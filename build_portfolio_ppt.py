from __future__ import annotations

import copy
import shutil
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path


WORKSPACE = Path(__file__).resolve().parent
DOWNLOADS = Path(r"C:\Users\user\Downloads")
SOURCE_SIZE = 25_160_630
OUTPUT = WORKSPACE / "chaerin-yeo-portfolio-completed.pptx"

P = "http://schemas.openxmlformats.org/presentationml/2006/main"
A = "http://schemas.openxmlformats.org/drawingml/2006/main"
R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
CT = "http://schemas.openxmlformats.org/package/2006/content-types"
NS = {"p": P, "a": A, "r": R}
ET.register_namespace("a", A)
ET.register_namespace("p", P)
ET.register_namespace("r", R)


def source_deck() -> Path:
    matches = [p for p in DOWNLOADS.glob("*.pptx") if p.stat().st_size == SOURCE_SIZE]
    if len(matches) != 1:
        raise RuntimeError(f"Expected one source deck of {SOURCE_SIZE} bytes, found {len(matches)}")
    return matches[0]


def shape_text(shape: ET.Element) -> str:
    return "".join(node.text or "" for node in shape.findall(".//a:t", NS))


def set_shape_text(shape: ET.Element, value: str) -> None:
    nodes = shape.findall(".//a:t", NS)
    if not nodes:
        return
    nodes[0].text = value
    for node in nodes[1:]:
        node.text = ""


def common_replacement(text: str) -> str | None:
    compact = text.replace(" ", "").replace("\u00a0", "")
    if text == "Kim Miri":
        return "CHAERIN YEO"
    if "김미리" in text:
        return text.replace("김미리", "여채린")
    if "ⓒ Kim Miri" in text:
        return "ⓒ CHAERIN YEO"
    if "2090" in compact:
        return "( 2026 )"
    if text == "Portfolio":
        return "Portfolio"
    if any(token in text for token in [
        "관련 이미지를 넣어주세요", "강조하고 싶은 포인트", "이곳에 고객니즈", "이곳에 관련 내용을",
        "실제로 경험한 업무", "간단한 설명을 이곳에", "프로젝트에 대해 간단히", "프로젝트명",
        "자소서의 소제목", "# 포인트 키워드", "페이지 내 인물사진", "< 차트 제목 입력칸 >",
    ]):
        return ""
    return None


def replace_by_position(slide_number: int, shapes: list[ET.Element]) -> None:
    """Set the content-bearing text boxes while leaving template typography and layout intact."""
    values: dict[int, dict[tuple[float, float], str]] = {
        1: {
            (1.61, 4.64): "사용자 경험을 설계하는\n백엔드 개발자 여채린",
            (1.61, 2.1): "PORTFOLIO",
            (2.14, 8.51): "여채린",
            (2.14, 9.01): "ycl0514@naver.com",
            (2.14, 9.51): "010-4806-9721",
        },
        2: {
            (2.18, 2.07): "Backend Developer  |  여채린",
            (7.74, 4.42): "2022.03~Present\n\n\n",
            (10.6, 4.43): "단국대학교 컴퓨터공학과\n\n\n",
            (3.32, 7.47): "2003.05.14\nycl0514@naver.com\n010-4806-9721\ngithub.com/chae-ring",
            (10.5, 1.18): "사용자 경험을 중심에 두고, 기능 구현을 넘어\n안정적인 서비스 흐름을 만드는 백엔드 개발자입니다.",
            (13.83, 4.42): "2026.07~Present  시선아이티 | GIS 통합 대시보드\n2026.03~Present  멋쟁이사자처럼 대학 14기 | 부대표\n2026.03~2026.06  Kakao Tech for Impact Campus 1기\n2025.03~2025.09  구름톤UNIV 4기",
            (7.88, 7.72): "Java\nSpring Boot\nJPA\nNestJS",
            (10.6, 7.74): "PostgreSQL\nMySQL\nRedis\nDocker",
            (13.69, 7.72): "TypeScript\nReact\nAWS\nGit / SVN",
        },
        3: {
            (1.54, 4.79): "MCMoments",
            (1.54, 5.65): "AI 아트워크 컬렉션 서비스",
            (7.53, 4.79): "버스온단",
            (7.53, 5.65): "실시간 통학 정보 통합 서비스",
            (13.51, 4.78): "Hab-eat",
            (13.54, 5.64): "AI 음식 인식 기반 식단 관리",
            (1.54, 7.58): "Tikitaka",
            (1.54, 8.44): "AI 질문 그룹화 학습 플랫폼",
            (7.53, 7.58): "프로젝트 우당탕탕",
            (7.53, 8.44): "지역 프로젝트 운영 플랫폼",
            (13.51, 7.57): "Experience",
            (13.54, 8.43): "현장실습 · 개발 커뮤니티 활동",
        },
        4: {
            (1.1, 2.18): "PROJECT 01 | MCMoments\nAI 아트워크로 구매 경험을 기록하는 컬렉션 서비스",
            (1.17, 7.81): "제품 구매 순간의 감정과 이야기를 AI 아트워크로 기록하고,\n보유 제품 기반 다음 상품 추천까지 연결하는 웹 서비스입니다.",
            (3.19, 6.89): "기간 : 2026.07–2026.08  |  역할 : Backend  |  5명",
            (13.26, 6.64): "구매한 제품을 단순 저장하지 않고\n나만의 이야기와 함께 기록하고 싶다.",
            (13.26, 8.04): "로그인부터 컬렉션 등록까지\n끊기지 않는 인증·등록 흐름이 필요했다.",
            (13.26, 9.43): "OAuth 인증, 시리얼 검증, AI 결과물을\n하나의 서비스 흐름으로 통합했다.",
        },
        5: {
            (1.88, 1.43): "RESULT | 인증부터 컬렉션 등록까지 이어지는 서비스 흐름 구현",
            (2.99, 3.9): "인증 흐름 설계",
            (1.51, 6.36): "Google OAuth 2.0 + JWT\n로그인과 API 인증을 일관되게 연결",
            (1.51, 7.18): "Spring Security 필터로\n권한이 필요한 API를 분리",
            (9.11, 3.9): "등록 검증 강화",
            (7.65, 6.36): "시리얼 번호·활성 상태·중복 등록을\n단계별로 검증",
            (7.65, 7.18): "사용자에게 원인을 구분한\n오류 메시지를 반환",
            (15.22, 3.9): "AI 결과 연결",
            (13.78, 6.36): "완료된 AI 아트워크만\n제품 컬렉션에 연결",
            (13.78, 7.18): "제품·아트워크·구매 스토리를\n일관된 데이터 구조로 관리",
        },
        6: {
            (1.88, 1.43): "PROJECT 02 | 버스온단\n통학을 위한 실시간 교통 정보 통합 서비스",
            (2.38, 9.51): "통학 정보 통합",
            (8.57, 9.51): "데이터 공백 보완",
            (14.75, 9.51): "Redis 캐싱",
        },
        7: {
            (1.88, 1.43): "RESULT | 버스·지하철 정보를 하나의 통학 대시보드로 통합",
            (3.57, 3.17): "통학에 필요한 정보를 한 화면에서",
            (1.25, 9.38): "API 응답을 공통 도착 정보 형태로\n가공해 프론트엔드에 제공",
            (13.78, 4.86): "실시간 데이터 우선",
            (13.78, 7.88): "시간표 데이터 보완",
        },
        8: {
            (1.1, 1.68): "PROJECT 03 | Hab-eat\nAI 음식 인식 기반 식단 관리 PWA",
            (1.18, 9.36): "음식 사진 촬영부터 영양 정보 조회·식단 기록까지\nAI 결과를 실제 사용자 행동으로 연결한 서비스입니다.",
            (3.94, 8.54): "기간 : 2024.10–2024.12  |  역할 : Backend  |  5명",
            (9.68, 3.54): "AI 음식 인식",
            (14.62, 3.54): "식단 기록 연결",
            (9.32, 2.75): "S3 Presigned URL과 FastAPI를 연동해 사진에서 음식명을 추출",
            (9.68, 6.62): "대체 검색 경험",
            (14.62, 6.62): "일일 영양 통계",
            (9.32, 5.83): "AI 인식 실패 시에도 자동완성 검색으로 식단 기록을 이어가도록 설계",
            (9.68, 9.72): "사용자 행동 유도",
            (14.62, 9.72): "데이터 구조 분리",
            (9.32, 8.93): "개별 식단 기록과 일일 영양 통계를 분리해 조회 성능을 고려",
        },
        9: {
            (1.88, 1.43): "RESULT | AI 인식·검색·영양 통계를 연결한 식단 기록 경험",
            (2.62, 7.57): "AI 서버 연동",
            (8.74, 7.57): "검색 성능 개선",
            (13.97, 7.57): "영양 통계 설계",
            (3.0, 10.0): "NestJS 서비스 API와 FastAPI AI 서버의 책임을 분리하고, 사용자가 AI 결과를 보정할 수 있는 흐름까지 구현했습니다.",
            (2.44, 6.67): "Full-Text Search",
            (8.57, 6.67): "일일 영양 요약",
            (2.69, 4.64): "AI\nFLOW",
        },
        10: {
            (1.88, 1.43): "PROJECT 04 | Tikitaka\nAI 질문 그룹화 기반 학습 아카이빙 플랫폼",
            (1.29, 4.33): "강의자료·필기·질문·답변을 하나의 Space 흐름으로 연결하고,\nAI가 유사 질문을 그룹화해 수업과 복습을 돕는 플랫폼입니다.",
            (1.49, 3.43): "Backend · AI",
            (4.64, 3.58): "기간 : 2026.03–Present  |  역할 : Backend · AI  |  4명",
            (1.56, 8.43): "교수자·학생·조교가\n같은 강의를 함께 사용",
            (5.14, 8.43): "질문이 흩어져\n수업 후 복습이 어려움",
            (8.69, 8.43): "역할별 권한과 AI 그룹화로\n학습 흐름을 구조화",
        },
        11: {
            (1.88, 1.43): "RESULT | 질문 데이터와 AI를 연결한 학습 아카이빙 경험",
            (9.43, 4.01): "권한 설계",
            (9.43, 6.1): "AI 질문 그룹화",
            (9.43, 8.35): "알림·배포 연동",
            (12.71, 3.43): "Space·멤버·세부 권한 관리",
            (12.71, 4.03): "역할과 참여 상태를 함께 검증해\n강의 Space별 권한을 제어",
            (12.71, 5.86): "유사 질문 자동 그룹화",
            (12.71, 6.44): "임베딩 기반으로 의미가 가까운 질문을\n그룹화해 반복 질문을 줄임",
            (12.71, 8.26): "Web Push와 Cloudflare 배포",
            (12.71, 8.85): "질문·답변 흐름을 알림으로 연결하고\n프론트 배포 환경까지 구성",
        },
        12: {
            (1.88, 1.43): "PROJECT 05 | 프로젝트 우당탕탕\n지역 프로젝트 운영과 공간 데이터를 연결하는 플랫폼",
            (8.83, 3.76): "지역 프로젝트를 지도에서 탐색하고, 의뢰부터 모집·참여·실행·기록까지 하나의 흐름으로 운영하고자 했습니다.",
            (8.83, 6.38): "프로젝트 목록·지도·상세 화면의 목적에 맞춰 API 응답을 분리하고, 참여 신청과 관리자 운영 기능을 구현했습니다.",
            (8.83, 9.0): "ESP32-S3 센서의 인원·움직임·소음·조도 데이터를 수집해 ‘공간의 숨결’ 지수로 시각화했습니다.",
        },
        13: {
            (1.88, 1.43): "RESULT | 지역 프로젝트 운영 데이터와 공간 활성 상태를 시각화",
            (3.0, 2.99): "의뢰·참여·운영 데이터를 연결하고, 센서 데이터가 지도 위 공간 상태로 이어지는 서비스 흐름을 구현했습니다.",
            (1.33, 3.83): "지도 기반 탐색",
            (7.1, 4.18): "프로젝트 상태·지역별 조회",
            (7.1, 4.93): "목록·지도·상세 API 분리",
            (1.33, 6.19): "운영 흐름 구현",
            (7.1, 6.54): "의뢰·참여 신청·관리자 기능",
            (7.1, 7.29): "권한 기반 운영 화면 연동",
            (1.33, 8.56): "IoT 데이터 시각화",
            (7.1, 8.9): "ESP32-S3 센서 데이터 수집",
            (7.1, 9.65): "공간 활성 상태 지수화",
        },
    }
    position_map = values.get(slide_number, {})
    for shape in shapes:
        text = shape_text(shape)
        xfrm = shape.find("./p:spPr/a:xfrm", NS)
        if xfrm is None:
            continue
        off = xfrm.find("./a:off", NS)
        if off is None:
            continue
        pos = (round(int(off.get("x")) / 914400, 2), round(int(off.get("y")) / 914400, 2))
        if pos in position_map:
            set_shape_text(shape, position_map[pos])
            continue
        replacement = common_replacement(text)
        if replacement is not None:
            set_shape_text(shape, replacement)


def update_slide_xml(data: bytes, slide_number: int) -> bytes:
    root = ET.fromstring(data)
    shapes = root.findall(".//p:sp", NS)
    replace_by_position(slide_number, shapes)
    return ET.tostring(root, encoding="utf-8", xml_declaration=True)


IMAGE_REPLACEMENTS = {
    "ppt/media/image32.png": "assets/images/project-mcm-moments-cover.png",
    "ppt/media/image47.png": "assets/images/project-mcm-moments-cover.png",
    "ppt/media/image53.png": "assets/images/project-mcm-moments-cover.png",
    "ppt/media/image57.png": "assets/images/project-mcm-moments-cover.png",
    "ppt/media/image65.png": "assets/images/project-busondan-poster.png",
    "ppt/media/image68.png": "assets/images/project-busondan-poster.png",
    "ppt/media/image71.png": "assets/images/busondan-detail-overview.png",
    "ppt/media/image78.png": "assets/images/project-busondan-poster.png",
    "ppt/media/image82.png": "assets/images/project-busondan-poster.png",
    "ppt/media/image83.png": "assets/images/busondan-detail-overview.png",
    "ppt/media/image90.png": "assets/images/project-habeat-poster.png",
    "ppt/media/image97.png": "assets/images/project-habeat-poster.png",
    "ppt/media/image102.png": "assets/images/project-habeat-cover.png",
    "ppt/media/image107.png": "assets/images/project-habeat-poster.png",
    "ppt/media/image117.png": "assets/images/tikitaka-detail-dashboard.png",
    "ppt/media/image118.png": "assets/images/tikitaka-detail-questions.png",
    "ppt/media/image120.png": "assets/images/tikitaka-detail-answer.png",
    "ppt/media/image133.png": "assets/images/tikitaka-detail-dashboard.png",
    "ppt/media/image143.png": "assets/images/project-udangtang-cover.png",
    "ppt/media/image146.png": "assets/images/project-udangtang-cover.png",
    "ppt/media/image147.png": "assets/images/project-udangtang-cover.png",
    "ppt/media/image153.png": "assets/images/project-udangtang-cover.png",
}


def update_slide2_relationships(data: bytes) -> bytes:
    root = ET.fromstring(data)
    for relationship in root:
        if relationship.get("Target") == "../media/image9.png":
            relationship.set("Target", "../media/chaerin-profile.jpg")
    return ET.tostring(root, encoding="utf-8", xml_declaration=True)


def update_content_types(data: bytes) -> bytes:
    root = ET.fromstring(data)
    existing = {node.get("Extension") for node in root}
    if "jpg" not in existing:
        ET.SubElement(root, f"{{{CT}}}Default", {"Extension": "jpg", "ContentType": "image/jpeg"})
    return ET.tostring(root, encoding="utf-8", xml_declaration=True)


def build() -> Path:
    source = source_deck()
    with zipfile.ZipFile(source, "r") as original, zipfile.ZipFile(OUTPUT, "w", zipfile.ZIP_DEFLATED) as result:
        for item in original.infolist():
            data = original.read(item.filename)
            if item.filename.startswith("ppt/slides/slide") and item.filename.endswith(".xml"):
                number = int(item.filename.rsplit("slide", 1)[1].split(".", 1)[0])
                data = update_slide_xml(data, number)
            elif item.filename == "ppt/slides/_rels/slide2.xml.rels":
                data = update_slide2_relationships(data)
            elif item.filename == "[Content_Types].xml":
                data = update_content_types(data)
            elif item.filename in IMAGE_REPLACEMENTS:
                data = (WORKSPACE / IMAGE_REPLACEMENTS[item.filename]).read_bytes()
            result.writestr(item, data)
        result.writestr("ppt/media/chaerin-profile.jpg", (WORKSPACE / "profile.jpg").read_bytes())
    return OUTPUT


if __name__ == "__main__":
    print(build())

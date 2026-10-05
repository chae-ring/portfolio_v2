/* 이 파일의 데이터만 수정하면 포트폴리오 전체 콘텐츠를 갱신할 수 있습니다. */
window.portfolioData = {
  intro: "사용자 경험을 중심에 두고, 기능 구현을 넘어 안정적인 서비스 흐름을\n만드는 백엔드 개발자입니다.",
  currentRole: "현장실습 - Developer",
  currentCompany: "@ 시선아이티",
  currentPeriod: "2026.07 — Present",
  focus: ["Spring Boot", "Java", "PostgreSQL", "eGovFrame", "SVN", "GIS"],
  profile: [["NAME", "여채린"], ["SCHOOL", "단국대학교 컴퓨터공학과"], ["BIRTH", "2003.05.14"], ["EMAIL", "ycl0514@naver.com"], ["GITHUB", "github.com/chae-ring"]],
  skills: [
    { title: "BACKEND", items: ["Java", "Spring Boot", "JPA", "NestJS"] },
    { title: "DATABASE & INFRA", items: ["MySQL", "PostgreSQL", "Redis", "Docker", "AWS"] },
    { title: "FRONTEND / WEB", items: ["TypeScript", "React", "JSP", "HTML/CSS"] }
  ],
  experiences: [
    {
      id: "internship", title: "현장실습 인턴 - 시선아이티", company: "GIS 통합 대시보드 개발", period: "Jul 2026 — Present",
      description: "공공기관에서 사용하는 GIS 통합 대시보드 개발에 참여해 기능을 배포했고, 현재 실제 업무에서 활용되고 있습니다.",
      highlights: ["OpenAPI 호출 제한을 고려해 외부 데이터를 DB에 적재하고, 대시보드에서 저장된 데이터를 조회하도록 구현", "관리자와 실무자의 업무 흐름 및 권한에 따라 필요한 대시보드 기능을 구분해 반영", "Java·JSP·Spring·eGovFrame으로 기능을 개발하고 SVN으로 소스 변경 사항 관리"],
      skills: ["Java", "JSP", "Spring", "eGovFrame", "OpenAPI 연동", "데이터베이스 적재·조회", "SVN"]
    },
    {
      id: "likelion", title: "멋쟁이사자처럼 대학 14기", company: "멋쟁이사자처럼 대학 14기 부대표", period: "Mar 2026 — Present",
      description: "멋쟁이사자처럼 대학 14기 부대표로 교내 개발 스터디와 대학 간 연합 행사를 준비하고, 구성원들의 프로젝트 참여를 지원하고 있습니다.",
      highlights: ["교내 Spring 스터디를 진행하며 프레임워크 학습과 실습을 함께 운영", "타 대학과 함께하는 연합 해커톤을 준비하며 행사 운영 사항 조율", "MCMoments 프로젝트로 중앙 해커톤에 참가해 입상", "아이디어톤에서 아이디어를 구체화해 2차 예선까지 진출"],
      skills: ["Spring 스터디 운영", "해커톤 행사 준비", "팀 프로젝트 협업", "아이디어 구체화", "커뮤니티 운영"]
    },
    {
      id: "kakao-tech-for-impact", title: "Kakao Tech for Impact Campus 1기", company: "Kakao Tech for Impact Campus 1기", period: "Mar 2026 — Jun 2026",
      description: "팀장 겸 백엔드·프론트엔드 개발자로 지역 프로젝트의 의뢰·모집·참여·운영을 지도와 연결한 ‘프로젝트 우당탕탕’을 개발했습니다. ESP32-S3 센서로 수집한 공간 데이터를 지표화해 지도에 시각화하고, 서비스를 AWS 환경에 배포했습니다.",
      highlights: ["사회혁신가와 현장 요구를 정리해 프로젝트 의뢰부터 참여·운영·아카이빙까지 이어지는 서비스 흐름과 기능으로 구체화", "Spring Boot로 지역·상태별 지도 조회, 프로젝트 상세, 의뢰·참여 신청 API와 관리자 승인·반려 및 통계 기능 구현", "ESP32-S3의 ToF·mmWave·음향·조도 센서 데이터를 처리하고, 공간 활성도를 0~100 지표로 정규화해 지도에 표시", "운영 배포 중 프론트엔드 API 주소 누락과 CORS Preflight 문제를 해결하고, PostgreSQL 운영 설정을 환경변수로 분리해 AWS 배포 구성 보완"],
      skills: ["Java·Spring Boot", "React·Vite", "PostgreSQL", "Naver Maps API", "ESP32-S3 센서 데이터", "AWS·Docker", "GitHub Actions"]
    },
    {
      id: "goormthon-univ", title: "구름톤UNIV 4기", company: "구름톤UNIV 4기 백엔드 개발", period: "Mar 2025 — Sep 2025",
      description: "교내 FAIL 세미나에서 배움과 실패 경험을 나누고, 연합 스터디로 Docker·Kubernetes를 학습했습니다. 시즌톤에서는 BE 팀장으로 세대 간 소통을 돕는 익명 토론 게임 ‘블러핑’을 개발했습니다.",
      highlights: ["교내 FAIL 세미나에서 개발 과정의 실패와 배운 점을 공유하고, 구성원들의 경험을 함께 돌아보는 자리 마련", "연합 스터디에서 Docker와 Kubernetes의 핵심 개념을 학습하며 컨테이너 기반 배포·오케스트레이션 이해 확장", "시즌톤 ‘블러핑’ BE 팀장으로 세대별 사용자를 자동 매칭하고 익명 실시간 토론을 진행하는 서비스 백엔드 개발", "기획·프론트엔드 파트와 기능 및 데이터 흐름을 조율해 세대 간 관점 차이를 게임으로 풀어내는 서비스 구현"],
      skills: ["Java·Spring Boot", "백엔드 개발", "Docker", "Kubernetes 기초", "API·데이터 설계", "팀 리딩·파트 협업"]
    },
    {
      id: "taba", title: "TMAX ACADEMY TABA 6기", company: "TABA 6기 개발 교육 및 팀 프로젝트", period: "Sep 2024 — Dec 2024",
      description: "AI·빅데이터 기반 SW 개발 과정을 이수하고, 팀 프로젝트 HAB-EAT에서 백엔드 개발을 맡아 AI 음식 인식 결과가 식단 기록과 영양 통계로 이어지는 서비스를 구현했습니다.",
      highlights: ["AI·빅데이터 처리를 위한 SW 개발 교육과 팀 프로젝트 수행", "NestJS·TypeScript·Prisma·MySQL을 활용해 음식 검색, 식단 등록, 영양 통계 API 구현", "FastAPI 기반 음식 인식 서버와 서비스 백엔드를 연동해 이미지 인식 결과를 식단 등록 흐름에 연결", "검색어 기반 음식 조회와 페이지네이션, MySQL Full-Text Index를 적용해 음식 검색 기능 구현", "식단 데이터와 일별 영양 통계를 분리해 날짜별 조회 및 영양 섭취량 집계 구현"],
      skills: ["NestJS·TypeScript", "REST API 설계·구현", "Prisma·MySQL", "AI 서버 연동", "검색·페이지네이션", "식단·영양 데이터 모델링"]
    }
  ],
  projects: [
    {
      id: "mcm-moments",
      type: "WEB APP",
      title: "MCMoments",
      summary: "MCM의 첫 구매 경험을 단순한 구매 이력으로 남기는 데서 그치지 않고, 구매 당시의 감정과 사연까지 기록하는 디지털 다이어리입니다. 시리얼을 인증하면 사연을 담은 AI 아트워크 보증서를 만들고, 보유 제품을 바탕으로 다음 컬렉션도 추천합니다.",
      image: "./assets/videos/mcm-moments-cover.mp4",
      mediaType: "video",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Java", "Spring Boot", "Spring Security", "Spring Data JPA", "PostgreSQL", "Google OAuth 2.0", "JWT", "OpenAI API", "Nginx"],
      period: "2026.07 — 2026.08",
      role: "Backend",
      people: "5명",
      detail: "제품 구매 경험을 감정 기반 디지털 아트워크 보증서로 기록하고, 개인 컬렉션을 토대로 다음 시즌 상품을 추천하는 서비스 흐름을 구현했습니다.",
      functionIntro: [
        "MCMoments는 제품을 단순히 등록하는 서비스가 아니라, 제품 구매 → 구매 당시의 이야기 기록 → AI 아트워크 생성 → 디지털 보증서 발급 → 컬렉션 관리까지 하나의 경험으로 이어지는 서비스입니다.",
        "백엔드 개발자로 참여해 사용자가 서비스를 시작하기 위한 Google 로그인·JWT 인증과 실제 MCM 제품을 개인 컬렉션으로 연결하는 시리얼 검증·제품 등록 영역을 담당했습니다."
      ],
      sections: [
        {
          title: "1. Google OAuth 2.0과 JWT — 로그인 이후의 요청까지 하나의 인증 흐름으로",
          paragraphs: [
            "별도의 회원가입 절차 없이 MCMoments를 이용할 수 있도록 Google OAuth 2.0 기반 로그인을 구현했습니다.",
            "Google 인증이 끝난 뒤 단순히 사용자 정보만 받아오는 것으로 끝내지 않고, 서비스 내부에서 사용할 사용자를 생성하거나 조회하고 JWT를 발급해 이후 API 요청까지 인증 상태가 이어지도록 구성했습니다."
          ],
          bullets: [
            "Google OAuth 인증 완료 후 googleId를 기준으로 기존 사용자 조회 및 신규 사용자 생성",
            "로그인 성공 시 사용자 ID와 이메일을 기반으로 JWT Access Token 발급",
            "프론트엔드로 리다이렉트한 뒤 토큰을 저장하고 이후 요청의 Authorization: Bearer 헤더에 자동 첨부",
            "Spring Security에 JWT 인증 필터를 연결해 인증된 사용자의 ID를 SecurityContext에서 사용할 수 있도록 구성",
            "로그인·OAuth 경로와 인증이 필요한 서비스 API의 접근 범위를 분리"
          ],
          closing: "인증 기능을 하나의 로그인 API로만 보지 않고, 로그인한 사용자가 제품 등록과 컬렉션 조회까지 자연스럽게 이어갈 수 있는 서비스 전체의 인증 흐름으로 설계했습니다."
        },
        {
          title: "2. 제품 시리얼 검증 — 입력값 확인이 아니라 실제 등록 가능 상태까지 판단",
          paragraphs: [
            "MCMoments에서는 사용자가 제품의 시리얼 번호를 입력하면 해당 제품을 자신의 컬렉션에 등록할 수 있는지 확인해야 합니다.",
            "단순히 DB에 해당 번호가 존재하는지만 확인하면 이미 다른 사용자가 등록한 제품이나 사용할 수 없는 시리얼도 다시 등록될 수 있기 때문에, 시리얼의 상태를 단계적으로 검증하도록 구현했습니다."
          ],
          bullets: [
            "입력받은 시리얼 번호로 제품 정보를 조회하고 존재 여부 확인",
            "이미 user_products에 연결된 시리얼인지 별도로 확인해 중복 등록 방지",
            "사용 가능한 시리얼인지 active 상태 확인",
            "정상 시리얼인 경우 제품명·모델·색상·카테고리·이미지를 함께 반환",
            "존재하지 않는 시리얼 / 이미 등록된 시리얼 / 비활성화된 시리얼을 서로 다른 오류 메시지로 구분"
          ],
          closing: "사용자가 단순히 ‘등록 실패’만 보는 것이 아니라, 왜 등록할 수 없는지 바로 이해할 수 있도록 서버의 검증 결과를 응답에 담았습니다."
        },
        {
          title: "3. 제품 등록 — 시리얼·아트워크·구매 기록의 관계 검증",
          paragraphs: [
            "제품 등록 단계에서는 시리얼만 저장하면 끝나는 것이 아니라, 앞 단계에서 생성한 AI 아트워크와 사용자의 제품이 정확히 연결되어야 했습니다.",
            "하나의 잘못된 연결이 My Collection과 디지털 보증서 전체 데이터에 영향을 줄 수 있어, 최종 등록 전에 여러 조건을 다시 검증했습니다."
          ],
          bullets: [
            "로그인한 사용자와 입력된 시리얼 번호 존재 여부 확인",
            "동일 시리얼의 중복 등록 여부 검사",
            "AI 아트워크가 COMPLETED 상태인지 확인",
            "이미 다른 제품에 연결된 아트워크인지 검사",
            "시리얼이 나타내는 제품과 아트워크가 생성된 제품이 동일한지 확인",
            "구매 사연과 감정 정보를 제품 등록 흐름에 함께 연결",
            "모든 검증이 완료된 뒤 UserProduct를 생성하고 사용된 시리얼을 비활성화"
          ],
          closing: "프론트에서 이미 검증했던 값이라도 최종 저장 시점에 서버가 다시 확인하도록 해 화면의 진행 상태와 실제 데이터의 유효성을 분리해 관리했습니다."
        }
      ],
      troubleshooting: {
        items: [
          {
            title: "1. 이미 등록한 시리얼이 모두 같은 오류로 보이던 문제",
            paragraphs: ["시리얼 검증 과정에서 이미 한 번 등록한 제품을 다시 입력하면, 사용자에게 ‘이미 등록된 시리얼 번호입니다.’가 아니라 단순히 ‘등록할 수 없는 시리얼 번호입니다.’라고 표시되는 문제가 있었습니다."],
            subsections: [
              {
                title: "원인",
                paragraphs: [
                  "제품 등록이 완료되면 해당 시리얼을 다시 사용할 수 없도록 active=false로 변경하고 있었습니다.",
                  "기존 검증 순서는 isActive()를 먼저 확인한 뒤 실제 등록 여부를 검사하고 있었기 때문에, 이미 등록된 시리얼은 두 조건을 모두 만족하더라도 첫 번째 비활성 상태 검사에서 처리가 종료됐습니다.",
                  "즉 데이터에는 ‘이미 등록됨’이라는 더 구체적인 상태가 있었지만, 검증 순서 때문에 그 정보가 사용자에게 전달되지 못하고 있었습니다."
                ]
              },
              {
                title: "해결",
                paragraphs: ["검증의 우선순위를 다시 정리했습니다."],
                bullets: [
                  "먼저 시리얼이 존재하는지 확인",
                  "다음으로 user_products에 이미 연결되어 있는지 검사",
                  "그 이후에 시리얼의 활성 상태를 확인",
                  "각 실패 원인을 message 필드로 별도 반환"
                ],
                closing: "최종 제품 등록 API에서도 동일한 순서로 검증하도록 맞춰, 사전 검증과 실제 저장 시점의 판단 기준이 달라지지 않도록 했습니다. 이 경험을 통해 조건을 모두 검사하는 것뿐 아니라, 어떤 조건을 먼저 판단하느냐도 사용자에게 전달되는 서비스 경험을 바꿀 수 있다는 점을 배웠습니다."
              }
            ]
          },
          {
            title: "2. 로그인된 화면에서 AI 아트워크 이미지만 표시되지 않던 문제",
            paragraphs: ["API를 통해 아트워크 정보는 정상적으로 조회되지만, 실제 생성된 이미지를 화면에 표시하면 이미지 요청만 인증 오류로 막히는 문제가 있었습니다."],
            subsections: [
              {
                title: "원인",
                paragraphs: [
                  "일반적인 API 호출은 Axios를 통해 JWT를 Authorization 헤더에 넣을 수 있었지만, 브라우저의 img 태그가 이미지 URL을 직접 요청할 때는 동일한 방식으로 Authorization 헤더를 넣을 수 없었습니다.",
                  "모든 API에 인증을 요구하도록 Spring Security를 설정하면서 이미지 조회 요청까지 JWT 검증 대상에 포함된 것이 원인이었습니다."
                ]
              },
              {
                title: "해결",
                paragraphs: [
                  "아트워크 이미지 자체는 식별 가능한 이미지 ID를 통해 조회하도록 구성되어 있었기 때문에, 이미지 전용 조회 경로인 /api/v1/artworks/{artworkId}/image만 별도의 공개 경로로 분리했습니다.",
                  "로그인이나 제품 등록처럼 사용자 권한이 필요한 API는 기존 JWT 인증을 유지하면서, 브라우저가 직접 불러와야 하는 리소스만 최소 범위로 예외 처리했습니다."
                ],
                closing: "단순히 Security 설정을 전체 허용으로 풀지 않고, 실제 요청 방식에 맞춰 접근 범위를 조정하면서 보안 정책과 프론트엔드 사용 방식의 경계를 함께 고려했습니다."
              }
            ]
          }
        ]
      },
      links: { github: "https://github.com/chae-ring/2026_LIKELION_HACKATHON" }
    },
    {
      id: "busondan",
      type: "WEB APP",
      title: "버스온단",
      summary: "죽전역을 이용해 통학하는 학생들이 지하철 도착 정보와 단국대학교 방향 버스 정보를 한 화면에서 확인할 수 있도록 만든 실시간 통학 정보 서비스입니다. 서로 다른 교통 정보를 하나의 흐름으로 연결하고, 실시간 데이터가 부족한 상황에서도 시간표 기반 정보를 함께 제공해 통학 중 필요한 정보를 지속적으로 확인할 수 있도록 구현했습니다.",
      image: "./assets/images/project-busondan-poster.png",
      imageBackground: "#2875f5",
      detailImages: ["./assets/images/busondan-detail-overview.png"],
      tech: ["React", "React Native", "JavaScript", "Spring Boot", "Java", "Python", "Kotlin", "Docker"],
      period: "2025.10 — 2025.11",
      role: "Frontend",
      people: "3명",
      detail: "죽전역 지하철 도착 정보와 단국대학교 방향 버스 정보를 한 화면에서 확인할 수 있도록 통학 흐름을 설계하고 구현했습니다.",
      functionIntro: [
        "버스온단은 죽전역에 도착한 학생이 학교까지 이동하기 위해 지하철 앱과 버스 앱을 각각 확인해야 하는 불편에서 시작했습니다.",
        "죽전역의 수인분당선 도착 정보와 학교 방향 버스 도착 정보를 한 화면에 모으고, 실시간 교통 API와 자체적으로 축적한 시간표 데이터를 함께 활용해 실제 통학 상황에서 끊기지 않는 정보 제공에 집중했습니다."
      ],
      sections: [
        {
          title: "1. 버스·지하철 실시간 교통정보 통합",
          paragraphs: ["경기버스 실시간 도착 API와 지하철 실시간 위치 API를 각각 연동하고, 서로 다른 형태의 응답을 서비스에서 사용할 수 있는 공통 도착 정보 형태로 가공했습니다."],
          bullets: [
            "경기버스 API를 통해 정류장별 실시간 버스 도착 정보 수집",
            "수인분당선 실시간 열차 위치를 바탕으로 죽전역까지 남은 시간 계산",
            "상행·하행, 노선, 종착역 등 통학에 필요한 정보만 선별",
            "Redis에 가공된 교통 데이터를 저장해 반복되는 외부 API 호출과 응답 처리 부담을 분리",
            "프론트에서는 약 10초 간격으로 최신 데이터를 갱신"
          ],
          closing: "단순히 외부 API 결과를 그대로 전달하는 대신, 사용자가 원하는 ‘몇 분 뒤 도착하는가’라는 정보로 다시 가공하는 서버 구조를 만들었습니다."
        },
        {
          title: "2. 실시간 데이터와 시간표 데이터를 함께 사용하는 보완 구조",
          paragraphs: [
            "실시간 API는 항상 모든 버스와 열차의 정상적인 도착 정보를 제공하지 않았습니다.",
            "그래서 실시간 데이터를 우선 사용하되, 도착 시간이 없거나 실시간 열차 목록에서 확인되지 않는 경우에는 저장된 운행 데이터를 이용해 정보를 보완하도록 구성했습니다.",
            "버스의 경우 실시간 응답에서 도착 예정 시간이 정상적으로 존재하면 live 데이터로 사용하고, 값이 없거나 정상적인 숫자로 들어오지 않은 노선은 별도로 분류했습니다. 이후 DB에 축적한 정류장·노선·요일별 운행 기록에서 평균 도착 시간을 조회해 현재 시각 기준 남은 시간을 계산하고 timetable 데이터로 추가했습니다.",
            "지하철 역시 실시간 열차 목록과 죽전역 시간표를 열차 번호 기준으로 비교한 뒤, 실시간 데이터에 존재하지 않는 열차를 시간표 기준 도착 정보로 추가했습니다.",
            "최종적으로 프론트에서는 데이터 출처를 숨기지 않고 실시간 / 시간표 기준으로 명확하게 구분해 보여주도록 구현했습니다."
          ]
        },
        {
          title: "3. 교통 데이터 캐싱과 주기적 갱신",
          paragraphs: [
            "교통 정보는 여러 사용자가 같은 시간대에 반복적으로 조회하는 데이터이기 때문에, 사용자가 요청할 때마다 외부 API를 직접 호출하지 않도록 처리했습니다.",
            "백엔드에서 일정 주기로 외부 교통 데이터를 수집하고 가공한 결과를 Redis에 저장한 뒤, 실제 사용자 요청에는 Redis에 준비된 결과를 반환하도록 구성했습니다.",
            "버스 실시간 정보는 주기적으로 수집한 뒤 정류장 단위로 Redis에 저장하고, 실시간 정보와 시간표 예측값을 합친 최종 데이터도 별도로 캐싱했습니다."
          ],
          closing: "이를 통해 외부 API 호출 과정과 사용자 조회 요청을 분리하고, 사용자에게 빠르게 가공된 데이터를 전달하는 구조를 만들었습니다."
        }
      ],
      troubleshooting: {
        items: [
          {
            title: "1. 실시간 교통정보가 누락되면 도착 정보 자체가 사라지던 문제",
            paragraphs: [
              "서비스 초기에는 외부 교통 API에서 전달되는 실시간 도착 정보를 중심으로 화면을 구성했습니다.",
              "하지만 실제 운영 과정에서 일부 노선의 도착 시간이 비어 있거나, 실시간 열차 목록에 예정된 열차가 나타나지 않는 경우가 있었습니다. 이 경우 화면에서는 해당 교통수단의 정보 자체가 사라져 사용자가 실제로 운행하지 않는 것으로 오해할 수 있었습니다."
            ],
            subsections: [
              {
                title: "원인",
                paragraphs: [
                  "외부 API가 제공하는 실시간 정보만 최종 데이터로 사용하고 있었기 때문에, API에서 특정 노선이나 열차의 도착 정보를 전달하지 않는 순간 서비스에서도 동일하게 정보가 사라지는 구조였습니다.",
                  "특히 통학 서비스에서는 몇 분 뒤 버스나 지하철이 오는지를 판단하는 것이 핵심인데, 외부 데이터 품질에 따라 핵심 기능의 사용 가능 여부가 결정되고 있었습니다."
                ]
              },
              {
                title: "해결",
                paragraphs: [
                  "실시간 정보를 완전히 대체하기보다 실시간 데이터를 우선 사용하고 부족한 부분만 시간표 데이터로 보완하는 방식으로 변경했습니다.",
                  "버스에서는 API 응답의 predictTime이 숫자로 제공되면 live 데이터로 사용하고, 도착 시간이 없거나 숫자가 아닌 노선은 시간표 보완 대상으로 분리했습니다. 백엔드는 운행 중 수집해 DB에 쌓은 정류장·노선·요일별 도착 기록에서 대표 dayCount를 고르고, 평균 시각과 5분 이상 차이 나는 기록은 평균 계산에서 제외해 예측 시각을 만들었습니다.",
                  "현재 시각과 예측 시각의 차이를 계산해 남은 시간을 만들고 이를 timetable 타입으로 최종 결과에 추가했습니다.",
                  "지하철에서는 실시간 열차 번호와 시간표의 열차 번호를 대조해 출발역 정보를 보완하고, 실시간 목록에 없는 열차만 도착 시각 기준 시간표 데이터로 추가했습니다. 자정을 넘는 막차·첫차는 날짜를 보정한 뒤 현재 시각과의 차이를 계산했습니다."
                ]
              }
            ]
          }
        ]
      },
      links: { github: "https://github.com/chae-ring/BusOnDan" }
    },
    {
      id: "tikitaka",
      type: "WEB",
      title: "Tikitaka",
      summary: "강의 자료와 질문을 연결해 수업 참여와 복습을 돕는 학습 플랫폼입니다. AI가 질문의 강의 관련 여부와 카테고리를 분류하고, 저장된 임베딩을 PostgreSQL pgvector로 비교해 같은 자료·카테고리 안의 유사 질문을 찾아줍니다.",
      image: "./assets/images/tikitaka-detail-dashboard.png",
      detailImages: [
        "./assets/images/tikitaka-detail-login.png",
        "./assets/images/tikitaka-detail-dashboard.png",
        "./assets/images/tikitaka-detail-questions.png",
        "./assets/images/tikitaka-detail-answer.png"
      ],
      tech: ["Java", "Spring Boot", "PostgreSQL", "pgvector", "Redis", "FastAPI", "OpenAI API", "Sentence Transformers", "paraphrase-multilingual-mpnet-base-v2", "Docker", "AWS EC2", "Cloudflare"],
      period: "2026.03 — Present",
      role: "Backend · AI",
      people: "4명",
      detail: "Spring Boot API와 AI 질문 분류·유사 질문 탐색 기능을 구현했으며, 프론트엔드는 Cloudflare 환경에 배포했습니다.",
      functionIntro: [
        "Tikitaka는 단순히 강의자료를 저장하는 서비스가 아니라, 강의 Space 안에서 자료·필기·질문·답변이 하나의 흐름으로 이어지는 학습 환경을 만드는 프로젝트입니다.",
        "백엔드 개발자로 참여해 강의 Space와 멤버·권한 관리, 질문 데이터 흐름과 AI 서버 연동, Web Push 알림 등 서비스의 주요 백엔드 기능을 구현했습니다."
      ],
      sections: [
        {
          title: "1. Space와 멤버 관리 — 같은 강의에서도 역할에 따라 다른 권한 제공",
          paragraphs: [
            "교수자와 학생, 조교가 하나의 Space를 함께 사용하지만 할 수 있는 작업은 서로 달라야 했습니다.",
            "단순히 PROFESSOR / STUDENT로 역할만 구분하는 것이 아니라 Space 참여 상태와 역할, 조교에게 부여된 세부 권한까지 함께 확인하도록 구성했습니다."
          ],
          bullets: [
            "Space 생성·참여·조회·수정·보관·복원·삭제 API 구현",
            "초대코드를 통한 강의 참여와 자동 승인 여부 처리",
            "가입 요청 승인·거절 및 멤버 내보내기",
            "PROFESSOR / ASSISTANT / STUDENT 역할 관리",
            "조교에게 멤버·강의자료·공지·질문·과제 관리 권한을 개별적으로 부여",
            "각 API에서 현재 사용자의 Space 참여 상태와 권한을 확인한 뒤 기능 수행"
          ],
          closing: "이를 통해 로그인 여부만 확인하는 인증에서 끝나지 않고, 같은 강의 안에서도 사용자의 역할과 권한에 따라 가능한 동작을 제어하는 구조를 만들었습니다."
        },
        {
          title: "2. AI 질문 분류와 유사 질문 탐색 — 강의자료·카테고리 범위 안에서 관련 질문 찾기",
          paragraphs: [
            "질문을 등록하면 AI 서버가 질문 내용과 슬라이드·강의자료 문맥, 해당 자료에서 사용할 수 있는 카테고리를 바탕으로 강의 관련 여부와 분류를 분석합니다. COURSE_RELATED 질문에는 768차원 임베딩을 함께 반환하고, OTHER 질문에는 임베딩을 만들지 않습니다.",
            "유사 질문 조회에서는 새 질문을 기존 그룹에 배정하는 대신, 저장된 질문 임베딩을 pgvector의 코사인 거리로 비교합니다. 같은 강의자료에 속하고 카테고리가 겹치는 질문 중 현재 질문·삭제된 질문·임베딩이 없는 질문을 제외해 상위 5개를 조회합니다."
          ],
          bullets: [
            "AI 서버에서 질문을 COURSE_RELATED / OTHER로 분류하고 카테고리 후보별 confidence 반환",
            "Sentence Transformers의 paraphrase-multilingual-mpnet-base-v2로 768차원 임베딩 생성",
            "분류 결과와 임베딩을 Spring Boot 백엔드에서 질문 데이터와 연결",
            "PostgreSQL pgvector 코사인 거리로 유사도 계산",
            "같은 document_id 및 연결된 category_id 범위에서 검색",
            "현재 질문을 제외한 상위 5개 결과 반환"
          ],
          closing: "질문마다 AI 분석 단계에서 임베딩을 생성해 저장하고, 유사 질문을 찾을 때는 저장된 벡터를 데이터베이스에서 비교하도록 나눴습니다. 유사도 비교를 위해 질문 쌍마다 LLM을 다시 호출하지 않으며, 검색 범위를 강의자료와 질문 카테고리로 제한합니다."
        },
        {
          title: "3. Web Push — 서비스 밖에서도 중요한 강의 이벤트 전달",
          paragraphs: [
            "기존 알림은 사용자가 Tikitaka 화면에 들어와야 확인할 수 있었기 때문에, 공지나 강의자료 등록과 같은 이벤트를 놓칠 수 있었습니다.",
            "기존 Notification 저장 구조는 유지하면서 Web Push를 별도 전달 채널로 추가했습니다."
          ],
          bullets: [
            "VAPID Public Key 조회 API",
            "브라우저별 Push Subscription 등록·삭제",
            "사용자별 Push Subscription 저장",
            "Notification 생성 시 등록된 구독 정보를 이용해 Web Push 발송",
            "기존 서비스 내부 알림과 브라우저 시스템 알림을 분리해 관리"
          ],
          closing: "기존 Notification 기능을 교체하지 않고 서비스 내부 알림 저장과 외부 Push 전달의 역할을 분리해 기존 기능에 영향을 최소화했습니다."
        }
      ],
      troubleshooting: {
        items: [
          {
            title: "1. Space 밖의 카테고리로 질문을 필터링할 수 있던 문제",
            paragraphs: [
              "질문 목록 API는 Space와 강의자료 기준으로 조회 범위를 받으며, 선택적으로 카테고리 ID도 전달받습니다. 카테고리 ID가 현재 Space나 지정한 강의자료에 속하는지 검증하지 않으면 다른 범위의 카테고리를 조회 조건으로 사용할 수 있었습니다.",
              "카테고리 필터를 적용하기 전에 소속 범위를 검증하도록 수정하고, 정상 범위·다른 강의자료·다른 Space 사례를 테스트로 나눠 확인했습니다."
            ],
            subsections: [
              {
                title: "원인",
                paragraphs: [
                  "목록 요청에 포함된 categoryId를 질문 데이터의 필터로 바로 사용하면, 해당 카테고리가 요청한 Space 또는 documentId 소속인지 보장되지 않았습니다.",
                  "질문 목록 범위는 Space와 강의자료로 제한되어 있어도 카테고리 조건의 소속 검증이 빠지면 서로 다른 강의자료의 분류 기준이 섞일 수 있는 경계가 있었습니다."
                ]
              },
              {
                title: "해결",
                paragraphs: [
                  "질문 목록 조회 전에 카테고리를 조회하고, 삭제되지 않은 카테고리인지 확인한 다음 카테고리의 Space ID가 요청 Space와 일치하는지 검사하도록 처리했습니다.",
                  "documentId가 전달된 경우에는 해당 카테고리의 document ID까지 일치해야 통과시키고, 범위를 벗어나거나 존재하지 않는 카테고리는 CATEGORY_NOT_FOUND로 처리했습니다.",
                  "추가한 테스트에서 같은 강의자료 카테고리는 허용하고, 다른 강의자료 또는 다른 Space의 카테고리는 거부하는 동작을 검증했습니다."
                ],
                closing: "이 변경은 카테고리 필터가 질문 조회의 Space·강의자료 경계를 넘지 않도록 서버에서 소속을 확인하는 검증을 추가한 작업입니다."
              }
            ]
          },
          {
            title: "2. AI가 고른 카테고리 결과를 저장 가능한 값으로 정규화",
            paragraphs: [
              "AI 서버는 질문과 강의자료 문맥, 해당 강의에서 사용할 수 있는 카테고리 ID·이름·설명을 전달받아 관련 여부와 분류 결과를 반환합니다. 모델 응답을 그대로 저장하면 요청에 포함되지 않은 카테고리나 중복 분류가 결과에 섞일 수 있어 서버 간 경계에서 정규화가 필요했습니다.",
              "AI 서버는 요청 후보에 없는 ID를 제외하고 중복 ID는 가장 높은 confidence만 남기며, 백엔드는 설정한 confidence 기준을 적용해 질문 분류를 반영합니다."
            ],
            subsections: [
              {
                title: "원인",
                paragraphs: [
                  "분류 모델의 출력은 외부 AI 호출의 결과이므로 요청 시 전달한 실제 카테고리 후보와 항상 일치한다고 가정할 수 없습니다. 또한 같은 카테고리가 반복해서 반환될 수 있습니다.",
                  "Tikitaka에서는 AI 서버가 후보 ID 집합과 대조해 유효하지 않은 ID를 버리고, 중복 결과를 정리한 뒤 confidence와 함께 반환합니다. COURSE_RELATED인데 유효한 카테고리가 하나도 없으면 빈 분류를 정상 결과로 저장하지 않고 오류로 처리합니다."
                ]
              },
              {
                title: "해결",
                paragraphs: [
                  "Spring 백엔드는 카테고리 후보를 ID·이름·설명과 함께 AI 서버에 전달하고, AI 서버는 Structured Output을 파싱한 뒤 요청 후보에 실제로 존재하는 UUID만 남기도록 정규화합니다.",
                  "정규화 결과는 confidence 순으로 반환되며 백엔드가 기준 미달 카테고리를 걸러냅니다. AI 서버가 COURSE_RELATED 질문에 유효한 카테고리를 반환하지 못한 경우에도 상태를 성공으로 덮어쓰지 않고 분류 실패 경로로 처리하도록 구성했습니다."
                ],
                closing: "모델 응답을 신뢰해 바로 저장하지 않고, 요청 후보와의 일치·중복·confidence를 서비스 경계에서 확인해 AI 분류 결과가 실제 강의 카테고리 범위 안에서만 사용되도록 했습니다."
              }
            ]
          }
        ]
      },
      links: { github: "https://github.com/TikiTaka-devTeam", demo: "https://tikitaka-frontend-v2.tikitakadev2026.workers.dev/" }
    },
    {
      id: "udangtang",
      type: "WEB",
      title: "프로젝트 우당탕탕",
      summary: "지역에서 진행되는 프로젝트를 지도 기반으로 아카이빙하고, 프로젝트 의뢰부터 참여 신청·운영 관리까지 연결해드리는 지역 프로젝트 플랫폼입니다. 완료된 프로젝트는 지역별 사례로 기록하고, 사용자는 모집 중인 프로젝트를 확인해 직접 참여할 수 있도록 구성했습니다. 또한 IoT 센서를 활용해 공간의 인원·움직임·소음·조도 데이터를 수집하고, 이를 ‘공간의 숨결’ 지수로 변환해 공간의 활성 상태를 시각화했습니다.",
      image: "./assets/videos/udangtang-cover.mp4",
      mediaType: "video",
      tech: ["React", "Vite", "Naver Maps API", "Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Spring Security", "JWT", "Docker", "GitHub Actions", "ESP32-S3", "Arduino"],
      period: "2026.03 — 2026.06",
      role: "Backend · Frontend",
      people: "4명",
      detail: "지역 기반 프로젝트의 의뢰·참여·운영 관리를 하나의 흐름으로 연결하고, ESP32-S3 센서 데이터를 수집·분석해 지도 위 공간 활성 상태로 시각화했습니다.",
      functionIntro: [
        "프로젝트 우당탕탕은 단순히 프로젝트 사례를 보여주는 웹사이트가 아니라, 의뢰 → 모집 → 참여 → 실행 → 기록으로 이어지는 프로젝트 운영 흐름을 하나의 서비스 안에서 연결하는 것을 목표로 했습니다.",
        "백엔드 개발을 중심으로 프로젝트 조회·의뢰·참여 신청·관리자 운영 기능과 데이터 구조를 구현했고, 관리자 및 사용자 웹 화면의 API 연동과 배포 과정에도 함께 참여했습니다."
      ],
      sections: [
        {
          title: "1. 지도 기반 프로젝트 아카이빙 — 지역과 상태에 따라 프로젝트 탐색",
          paragraphs: [
            "완료된 프로젝트와 현재 모집 중인 프로젝트를 사용자가 지역을 기준으로 탐색할 수 있도록 프로젝트 조회 API를 구현했습니다.",
            "단순 프로젝트 목록뿐 아니라 지도 화면과 상세 화면에서 필요한 데이터가 서로 달랐기 때문에 사용 목적에 따라 API 응답을 분리했습니다."
          ],
          bullets: [
            "지도 표시를 위한 GET /api/v1/projects/map 구현",
            "모집 프로젝트 목록 조회 API 구현",
            "프로젝트 상세 조회 API 구현",
            "RECRUITING / IN_PROGRESS / COMPLETED 등 프로젝트 상태 관리",
            "시·도와 시·군·구를 기준으로 프로젝트 필터링",
            "위도·경도를 반환해 지도상의 프로젝트 위치 표현",
            "참여 신청 중 APPROVED 상태만 집계해 실제 승인 참여자 수 제공"
          ],
          closing: "특히 프로젝트 Entity에 저장된 숫자를 그대로 보여주는 대신, 실제 승인된 참여 신청 데이터를 기준으로 참여자 수를 계산해 운영 상태와 사용자 화면의 정보가 일치하도록 구성했습니다."
        },
        {
          title: "2. 프로젝트 의뢰와 참여 신청 — 프로젝트가 만들어지는 흐름 연결",
          paragraphs: ["프로젝트를 조회하는 것에서 끝나지 않고, 새로운 프로젝트가 시작되는 과정까지 서비스 안에서 처리할 수 있도록 의뢰와 참여 신청 기능을 구현했습니다."],
          subsections: [
            {
              title: "프로젝트 의뢰",
              paragraphs: ["사용자가 지역의 공간이나 문제를 기반으로 프로젝트를 제안할 수 있도록 의뢰 데이터를 별도로 관리했습니다."],
              bullets: [
                "프로젝트 의뢰 생성",
                "의뢰 결과 및 상태 조회",
                "의뢰자의 연락처와 프로젝트 관련 정보 저장",
                "이후 관리자가 프로젝트로 전환할 수 있도록 데이터 구조 연결"
              ]
            },
            {
              title: "프로젝트 참여",
              paragraphs: ["모집 중인 프로젝트를 확인한 사용자가 바로 참여할 수 있도록 신청 기능을 구현했습니다."],
              bullets: [
                "프로젝트별 참여 신청 생성",
                "신청자 이름·연락처·이메일·참여 사유 및 직업 정보 저장",
                "신청 상태 PENDING / APPROVED / REJECTED / CANCELED 관리",
                "신청 상세 및 상태 조회",
                "승인된 신청을 실제 프로젝트 참여자 수와 연계"
              ],
              closing: "이를 통해 별개의 신청 폼을 두는 대신 프로젝트를 발견한 사용자가 서비스 안에서 바로 참여까지 이어갈 수 있는 흐름을 만들었습니다."
            }
          ]
        },
        {
          title: "3. 관리자 운영 기능 — 신청 데이터가 실제 운영으로 이어지도록",
          paragraphs: [
            "프로젝트 의뢰와 참여 신청 기능을 추가하면서 사용자 화면만 구현해서는 실제 서비스를 운영할 수 없었습니다.",
            "그래서 관리자가 웹에서 프로젝트와 신청 현황을 직접 확인하고 처리할 수 있도록 관리자 기능을 함께 구현했습니다."
          ],
          bullets: [
            "참여 신청 목록 및 상세 조회",
            "프로젝트·상태별 신청 필터링",
            "참여 신청 승인·반려·취소",
            "승인 후 실제 승인 참여자 수 재계산",
            "프로젝트별 신청 통계 조회",
            "전체 / 모집 중 / 진행 중 / 완료 프로젝트 수 집계",
            "전체 / 승인 / 대기 신청 수 집계",
            "사이트에 노출되는 누적 통계 데이터 관리",
            "설문 폼 수정·삭제",
            "관리자 페이지와 실제 API 연동"
          ],
          closing: "이를 통해 단순히 데이터를 저장하는 API가 아니라, 사용자의 신청이 관리자의 판단과 후속 운영까지 연결되는 백오피스 흐름을 구성했습니다."
        },
        {
          title: "4. 공간의 숨결 — 서로 다른 센서 데이터를 하나의 지표로",
          paragraphs: [
            "프로젝트 전체에서는 ESP32-S3에 여러 센서를 연결해 공간의 상태를 수집했습니다.",
            "사용한 센서는 각각 측정하는 값과 범위가 달랐기 때문에 단순히 센서 값을 나열하는 대신, 데이터를 정규화해 하나의 공간 활성도 지수로 표현했습니다."
          ],
          bullets: [
            "ToF 센서로 공간의 입·퇴장과 유동 인구 측정",
            "mmWave 센서로 재실 여부와 정적·동적 움직임 판단",
            "음향 센서로 공간의 소음과 활동 정도 분석",
            "조도 센서로 공간의 밝기와 운영 상태 측정",
            "센서별 노이즈 및 비정상 데이터 필터링",
            "인원 40% + 소음 40% + 조도 20%를 기반으로 0~100점 정규화",
            "움직임 감지 시 활성도 가산",
            "웹 화면에서 공간의 현재 상태를 시각적으로 제공"
          ],
          closing: "이 기능을 통해 프로젝트가 끝난 결과만 지도에 남기는 것이 아니라, 현재 공간이 실제로 어떻게 사용되고 있는지도 데이터로 보여줄 수 있도록 확장했습니다."
        }
      ],
      troubleshooting: {
        items: [
          {
            title: "1. 배포된 프론트엔드에서 백엔드 API 요청이 정상적으로 연결되지 않던 문제",
            paragraphs: [
              "로컬 환경에서는 프론트엔드와 백엔드 API 연동이 정상적으로 동작했지만, 서비스를 실제 도메인에 배포하는 과정에서는 운영 API와의 연결을 별도로 처리해야 했습니다.",
              "GitHub 기록상 이 문제를 해결하기 위해 프론트 CI의 API 주소 설정과 백엔드 CORS 설정을 연속적으로 수정했습니다."
            ],
            subsections: [
              {
                title: "원인",
                paragraphs: [
                  "첫 번째 문제는 Vite의 API 주소였습니다. 프론트에서는 VITE_API_BASE_URL 환경변수를 이용해 백엔드 주소를 결정하도록 되어 있었지만, GitHub Actions의 pnpm build 단계에는 해당 값이 전달되지 않고 있었습니다.",
                  "Vite의 VITE_* 환경변수는 애플리케이션 실행 시점이 아니라 정적 파일을 빌드할 때 코드에 포함되기 때문에, AWS Secret에 값이 존재하는 것만으로는 배포된 프론트에 적용되지 않았습니다.",
                  "API 주소를 적용한 뒤에는 두 번째 문제가 발생했습니다. 프론트는 https://studio.udtt.org에서 실행되고 백엔드는 별도 API 도메인을 사용하기 때문에 브라우저 입장에서는 서로 다른 Origin이었습니다. Spring Security에 해당 운영 도메인에 대한 CORS 설정이 없어 브라우저의 API 요청과 Preflight 요청을 정상적으로 처리할 수 없었습니다."
                ]
              },
              {
                title: "해결",
                paragraphs: ["프론트 CI의 Vite Build 단계에 운영 API 주소를 명시적으로 전달했습니다."],
                bullets: [
                  "GitHub Secret → VITE_API_BASE_URL → pnpm build → 운영 API 주소가 포함된 정적 파일",
                  "백엔드에서는 CorsConfigurationSource를 추가해 허용할 Origin을 명확하게 지정",
                  "localhost:5173, studio.udtt.org, www.studio.udtt.org, API 도메인 허용",
                  "GET / POST / PUT / PATCH / DELETE / OPTIONS 허용 및 Spring Security에서 Preflight OPTIONS 요청 통과 설정"
                ],
                closing: "이를 통해 단순히 ‘로컬에서 API가 된다’에서 끝내지 않고, 프론트와 백엔드가 서로 다른 도메인으로 배포되는 실제 운영 환경까지 고려해 연결 구조를 완성했습니다."
              }
            ]
          },
          {
            title: "2. 로컬·운영 데이터베이스 설정을 Spring Profile로 분리",
            paragraphs: [
              "로컬 개발 환경과 AWS 운영 환경에서 서로 다른 데이터베이스 연결 정보를 사용하도록 Spring 설정을 나눴습니다.",
              "GitHub 커밋에는 운영 Profile 추가, DB_URL·DB_USERNAME·DB_PASSWORD 환경변수 연결, PostgreSQL Driver와 Dialect 설정이 기록되어 있습니다."
            ],
            subsections: [
              {
                title: "구성",
                paragraphs: [
                  "초기 application.properties에는 local Profile과 공통 JPA 설정이 들어 있고, 운영 데이터베이스 설정은 application-prod.properties에 별도로 추가했습니다.",
                  "운영 접속 주소와 계정은 소스에 고정하지 않고 DB_URL, DB_USERNAME, DB_PASSWORD 환경변수로 주입하도록 구성했습니다."
                ]
              },
              {
                title: "반영 내용",
                paragraphs: [
                  "application.properties와 application-prod.properties로 환경별 설정을 나눴고, 운영 Profile에서는 PostgreSQL 연결에 필요한 값을 환경변수로 읽도록 했습니다."
                ],
                bullets: [
                  "운영 환경에서 DB_URL, DB_USERNAME, DB_PASSWORD를 외부 환경변수로 전달",
                  "PostgreSQL Driver와 Dialect를 명시하고 운영 환경의 JPA 설정을 별도로 관리",
                  "GitHub Actions → Docker Image → Amazon ECR → Amazon ECS 흐름으로 애플리케이션 코드와 운영 환경 설정을 분리"
                ],
                closing: "이 경험을 통해 환경별 설정을 코드에 섞어 두지 않고, 애플리케이션과 인프라 설정의 경계를 나누는 것이 배포 안정성에 중요하다는 점을 경험했습니다."
              }
            ]
          }
        ]
      },
      links: { github: "https://github.com/studio-udtt" }
    },
    {
      id: "habeat",
      type: "PWA",
      title: "Hab-eat",
      summary: "음식 사진에서 AI가 음식명을 인식해 영양 정보와 식단 기록으로 연결하는 건강 관리 서비스입니다. 인식 결과를 직접 검색해 보정할 수도 있고, 기록을 날짜별 영양 통계와 건강 챌린지로 이어 꾸준한 식습관 관리를 돕습니다.",
      image: "./assets/images/project-habeat-poster.jpg",
      tech: ["NestJS", "TypeScript", "MySQL", "FastAPI", "YOLOv11", "Docker", "AWS", "Prisma", "PyTorch", "OpenCV", "Nginx"],
      period: "2024.10 — 2024.12",
      role: "Backend",
      people: "5명",
      detail: "AI 추론 서버와 서비스 API를 연결해 이미지 인식 결과를 식단 기록 흐름에 반영했습니다.",
      functionIntro: [
        "Hab-eat은 사용자가 매번 음식명을 직접 검색하고 영양 정보를 입력해야 하는 식단 기록의 번거로움을 줄이는 데서 시작했습니다.",
        "백엔드 개발을 맡아 AI 음식 인식 서버와 서비스 서버를 연결하고, 음식 검색·식단 등록·영양소 통계 API를 구현했습니다. 처음 사용하는 NestJS와 Prisma를 프로젝트 시작 전부터 학습한 뒤 실제 서비스 API에 적용했습니다."
      ],
      sections: [
        {
          title: "1. AI 음식 인식 — 사진 촬영부터 식단 등록까지 하나의 흐름으로",
          paragraphs: [
            "사용자가 음식 사진을 촬영하면 이미지를 분석해 음식 이름을 반환하고, 해당 음식의 영양 정보를 조회해 식단 기록으로 이어질 수 있도록 구성했습니다.",
            "서비스 서버와 AI 서버의 역할을 분리하고 NestJS 백엔드가 두 시스템 사이를 연결했습니다."
          ],
          bullets: [
            "사용자별 식단 이미지 업로드를 위한 S3 Presigned URL 발급",
            "업로드된 이미지의 S3 URL을 AI 서버에 전달",
            "FastAPI 서버의 음식 분류 API 호출",
            "YOLOv11이 반환한 top1ClassName을 서비스의 음식명으로 변환",
            "AI가 지원하는 음식 목록에 존재하는지 확인",
            "인식된 음식을 검색·식단 등록 과정으로 연결"
          ],
          closing: "사용자 음식 촬영 → S3 이미지 업로드 → NestJS Backend → FastAPI AI Server → YOLOv11 음식 분류 → 음식명 반환 → Foods 데이터 조회 → 영양 정보 제공 흐름을 구성했습니다. AI 모델을 백엔드 내부에 직접 포함하지 않고 NestJS는 서비스 데이터와 흐름을, FastAPI는 모델 추론을 담당하도록 역할을 분리했습니다."
        },
        {
          title: "2. 음식 검색 — AI가 인식하지 못해도 사용자가 직접 찾을 수 있도록",
          paragraphs: [
            "AI 인식 결과가 항상 사용자가 먹은 음식과 정확하게 일치한다고 가정할 수 없었기 때문에, 사용자가 직접 음식을 찾을 수 있는 검색 기능을 함께 구현했습니다."
          ],
          bullets: [
            "음식명 키워드 기반 자동완성 API",
            "검색 결과의 id, name 반환",
            "선택한 음식 ID 기반 상세 영양정보 조회",
            "page, limit을 이용한 검색 결과 Pagination",
            "MySQL Full-Text Index를 활용한 음식명 검색",
            "한글 부분 검색을 고려한 ngram parser 적용"
          ],
          closing: "AI 인식 성공 시 인식된 음식으로 식단 등록하고, 인식 실패 또는 다른 음식 선택 시 자동완성 검색 → 음식 선택 → 상세 영양정보 조회 → 식단 등록으로 이어지게 했습니다. 두 경로를 제공해 AI 결과에만 의존하지 않고 사용자가 직접 결과를 보정할 수 있도록 구성했습니다."
        },
        {
          title: "3. 식단 기록과 일별 영양소 누적 — 개별 음식에서 하루 섭취량까지",
          paragraphs: ["단순히 사용자가 어떤 음식을 먹었는지만 저장하는 것이 아니라, 하루 동안 섭취한 영양 정보를 확인할 수 있도록 식단 데이터와 일별 누적 데이터를 분리했습니다."],
          bullets: [
            "음식명과 영양정보를 포함한 식단 등록 및 삭제",
            "날짜별 식단 조회와 아침·점심·저녁 단위 식단 분류",
            "하루 동안 섭취한 칼로리와 영양소 누적 계산",
            "DietStats를 이용한 사용자·날짜별 영양 통계 관리",
            "식단 변경 시 해당 날짜의 누적 영양정보 갱신",
            "탄수화물·당·지방·단백질·칼슘·나트륨·칼륨·철분·아연·콜레스테롤 관리"
          ],
          closing: "특히 개별 식단인 Diets와 하루 누적 정보인 DietStats를 분리해 매 화면에서 모든 식단을 다시 계산하지 않고 일별 영양상태를 관리할 수 있도록 데이터 구조를 구성했습니다."
        },
        {
          title: "4. 건강 챌린지 — 식단 기록을 지속적인 행동으로 연결",
          paragraphs: [
            "Hab-eat은 한 번 식단을 기록하는 데서 끝나는 서비스가 아니라, 건강한 행동을 지속하게 만드는 것을 목표로 했습니다.",
            "프로젝트 전체에서는 사용자의 목표에 따라 영양·생활습관 챌린지를 제공하고, AI 이미지 인식을 활용한 인증 기능까지 연결했습니다."
          ],
          bullets: [
            "다이어트·벌크업·유지 등 사용자 목표 구분",
            "사용자별 챌린지 참여 상태와 목표 일수·성공 일수 관리",
            "날짜별 챌린지 인증 이력 저장",
            "음식 섭취량을 활용한 영양 챌린지",
            "운동기구·객체 인식을 활용한 이미지 인증"
          ],
          closing: "AI 서버에는 음식 분류뿐 아니라 운동기구 탐지와 일반 객체 탐지 모델도 별도로 구성해, 식단 관리와 건강 행동 인증을 하나의 AI 서버에서 제공할 수 있도록 구성했습니다."
        }
      ],
      troubleshooting: {
        items: [
          {
            title: "1. 음식명 검색 성능을 비교해 LIKE 대신 Full-Text Search를 선택",
            paragraphs: [
              "음식 자동완성 검색에서 LIKE 쿼리와 MySQL Full-Text Search의 성능을 비교 테스트한 뒤, 음식명 검색에는 Full-Text Search를 선택했습니다.",
              "검색 결과에는 id와 name만 반환하고 page·limit으로 조회 범위를 제한해, 사용자가 음식을 선택하면 해당 ID로 영양 상세정보를 가져오는 흐름으로 연결했습니다."
            ],
            subsections: [
              {
                title: "검토 배경",
                paragraphs: [
                  "자동완성 검색 방식으로 LIKE와 Full-Text Search를 검토했고, 쿼리 성능을 비교해 검색 방식을 결정했습니다.",
                  "선택한 방식에 맞춰 음식명 인덱스와 Prisma 검색 조건도 함께 구성해야 했습니다."
                ]
              },
              {
                title: "해결",
                paragraphs: [
                  "성능 비교 결과를 바탕으로 MySQL Full-Text Search를 선택하고, Foods.name에 Full-Text 인덱스를 추가했습니다. 한글 음식명 검색을 위해 인덱스는 ngram parser를 사용하도록 구성했습니다.",
                  "Prisma 자동완성 검색은 음식명 필드의 Full-Text 검색 조건을 사용하도록 연결하고, page와 limit으로 결과를 나눠 반환하게 했습니다."
                ],
                bullets: [
                  "LIKE와 Full-Text Search 쿼리 성능 비교 후 검색 방식 결정",
                  "Foods.name에 MySQL Full-Text 인덱스 적용",
                  "한글 음식명 검색을 위해 ngram parser 지정",
                  "검색 결과를 페이지네이션하고 음식 ID 기반 상세 조회로 연결"
                ],
                closing: "검색 방식은 익숙한 쿼리를 그대로 쓰기보다 데이터와 실제 검색 조건을 놓고 성능을 비교해 선택했습니다. 비교 결과에 따라 인덱스 구조와 쿼리를 함께 조정하고, 검색 결과가 식단 등록까지 이어지도록 연결했습니다."
              }
            ]
          },
          {
            title: "2. 서버 시간 기준 때문에 식단이 다른 끼니로 분류되던 문제",
            paragraphs: ["식단을 날짜별로 조회한 뒤 createdAt 시간을 기준으로 아침·점심·저녁을 구분했는데, 서버와 사용자가 사용하는 시간대가 달라 실제 식사 시간과 다른 끼니로 분류될 수 있는 문제가 있었습니다."],
            subsections: [
              {
                title: "원인",
                paragraphs: [
                  "DB에 저장된 시간은 UTC를 기준으로 하고 있었지만, 사용자는 한국에서 서비스를 사용하기 때문에 화면과 식사 구분에는 KST(UTC+9) 기준이 필요했습니다.",
                  "기존에는 Date 객체와 timezone offset을 이용해 각 위치에서 시간을 직접 보정하고 있어 식단 등록·조회마다 서로 다른 기준이 적용될 가능성이 있었습니다."
                ]
              },
              {
                title: "해결",
                paragraphs: [
                  "UTC 시간을 KST로 변환하는 로직을 UtilService의 convertUtcToKst(utcDate) 공통 함수로 분리했습니다.",
                  "각 식단의 createdAt을 KST로 변환한 뒤 00:00~10:59는 아침, 11:00~16:59는 점심, 17:00~23:59는 저녁으로 구분했습니다."
                ],
                closing: "이를 통해 각 기능에서 개별적으로 시간대를 계산하지 않고 서비스 전체에서 동일한 KST 기준으로 식단 시간을 처리할 수 있도록 변경했습니다. 날짜와 시간을 다루는 기능에서는 저장된 값뿐 아니라 서버·DB·사용자가 바라보는 시간대가 서로 다를 수 있다는 점까지 고려해야 한다는 것을 배웠습니다."
              }
            ]
          }
        ]
      },
      links: { github: "https://github.com/6billion" }
    }
  ],
  archiveProjects: [
    { type: "WEB APP", title: "MCMOMENTS", subtitle: "첫 구매의 순간과 이야기를 AI 아트워크로 간직하고, 다음 컬렉션을 발견하는 디지털 다이어리", id: "mcm-moments" },
    { type: "WEB APP", title: "버스온단", subtitle: "통학길에 필요한 캠퍼스 버스·지하철 도착 정보를 한눈에 확인하는 서비스", id: "busondan" },
    { type: "PWA", title: "HAB-EAT", subtitle: "AI 음식 인식과 영양 기록으로 건강한 식습관 형성을 돕는 서비스", id: "habeat" },
    { type: "WEB", title: "TIKITAKA", subtitle: "강의 중 질문과 필기를 연결하고, AI 질문 분류와 유사 질문 탐색으로 수업 참여와 복습을 돕는 학습 플랫폼", id: "tikitaka" },
    { type: "WEB", title: "프로젝트 우당탕탕", subtitle: "지역의 프로젝트 의뢰부터 참여·운영·기록까지 연결하는 협업 플랫폼", id: "udangtang" }
  ],
  contacts: { email: "ycl0514@naver.com", github: "https://github.com/chae-ring", linkedin: "https://www.linkedin.com/", formEndpoint: "https://formsubmit.co/ycl0514@naver.com" }
};

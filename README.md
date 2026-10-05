# CHAERIN YEO Portfolio

GitHub Pages에서 바로 배포할 수 있는 정적 포트폴리오입니다.

## 콘텐츠 변경

모든 텍스트와 프로젝트 정보는 [`js/data.js`](./js/data.js)에서 수정합니다. 이미지 파일은 `assets/images/`에 두고 `image` 경로를 바꾸면 됩니다.

## GitHub Pages 배포

1. GitHub 저장소에 push합니다.
2. **Settings → Pages**에서 `Deploy from a branch`를 선택합니다.
3. `main` 브랜치의 `/ (root)` 폴더를 선택해 저장합니다.
4. 발급된 주소에서 확인합니다.

폼은 서버 없이 동작하도록 사용자의 메일 앱을 여는 `mailto:` 방식입니다. 실서비스 수신 폼이 필요하다면 Formspree, EmailJS 또는 자체 API를 연결하세요.

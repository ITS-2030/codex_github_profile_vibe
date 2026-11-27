# dev.log

GitHub Pages에 올릴 수 있는 한국어 개발자 포트폴리오입니다. `index.html`을 브라우저에서 열면 바로 미리 볼 수 있습니다.

## 내 정보로 바꾸기

1. `index.html`의 `<title>`, 헤더, 첫 화면과 소개 문구를 이름과 실제 개발 경험에 맞게 수정합니다.
2. `#projects`의 예시 카드와 대응하는 `<dialog>`의 본문을 실제 프로젝트로 바꿉니다. 카드 버튼의 `data-dialog`는 상세 창의 `id`와 같아야 합니다. 실제 저장소와 데모 주소가 있으면 상세 창에 링크를 추가합니다.
3. `#contact`의 `data-email`에는 공개할 이메일 주소, `data-github`에는 GitHub 사용자 이름을 입력합니다. 입력한 채널의 링크가 표시됩니다.

## GitHub Pages 배포

1. 이 폴더의 파일과 `assets/`를 GitHub 저장소의 `main` 브랜치 루트에 올립니다. `.nojekyll`도 함께 포함합니다.
2. 저장소에서 **Settings → Pages**로 이동합니다. **Build and deployment**의 **Source**를 **Deploy from a branch**로 선택합니다.
3. 브랜치와 폴더를 **main** 및 **/(root)**로 설정하고 **Save**를 누릅니다. 배포가 완료되면 Pages 설정에 표시된 주소를 열어 확인합니다.

저장소 이름이 `<사용자명>.github.io`이면 사이트는 `https://<사용자명>.github.io/`에 배포됩니다. 그 외 저장소 이름을 쓰면 주소 뒤에 `/<저장소명>/`이 붙습니다. [GitHub Pages 공식 가이드](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 메인 이미지

`assets/code-emblem.jpg`는 내장 ImageGen으로 생성하고 JPEG로 변환했습니다.

> Stylized-concept, landscape web hero artwork for a Korean developer portfolio. A single oversized sculptural coding emblem built from three unmistakable separate glyph shapes: left angle bracket, slash, right angle bracket, arranged as </> with a subtle inset perspective angle. Make them physical objects of thick folded, perforated and ribbed anodized aluminum, sculptural and tactile, with tight geometry like vintage signal hardware. Hot coral-orange key lighting (#ff7a65), muted dusky purple shadows. The symbol floats in a very dark charcoal-black studio (#101014). Barely visible fine engineering grid in the background and extremely subtle fine dust; sophisticated, restrained, directional glow. The entire symbol should be in the inner 72% of the image, centered horizontally and vertically, plenty of nearly black space around it, corners and edges fade fully to #101014. Sharp symbol with rich microtexture and shadows, modern design studio editorial product shot. Wide landscape aspect 3:2. No typography other than the abstract code glyph, no frame, no border, no watermark, no interface, no additional objects.

# 개발자 포트폴리오

HTML, CSS, JavaScript로 만든 한국어 개발자 포트폴리오입니다. 첫 프로젝트로 이 사이트의 구현과 배포를 소개합니다. `index.html`을 브라우저에서 열면 바로 미리 볼 수 있습니다. [배포된 사이트](https://its-2030.github.io/codex_github_profile_vibe/)

## 프로젝트 추가하기

1. `index.html`의 `#projects`에 프로젝트 소개, 기술 스택, 저장소 링크를 담은 카드를 추가합니다.
2. 구현 상세를 제공하려면 고유한 `id`를 가진 `<dialog>`를 추가하고, 카드 버튼의 `data-dialog`에 같은 값을 입력합니다.

## GitHub Pages 배포

이 저장소의 `.github/workflows/static.yml`은 `main`에 푸시할 때 정적 파일을 배포합니다. **Settings → Pages**에서 **Source**가 **GitHub Actions**로 설정되어 있으면 **Actions** 탭에서 배포 진행 상태를 확인할 수 있습니다.

브랜치에서 직접 배포하는 저장소에서는 **Source**를 **Deploy from a branch**로 설정하고 `main`의 `/(root)`를 선택합니다. HTML, CSS, JavaScript와 함께 `assets/`, `.nojekyll`도 포함합니다.

저장소 이름이 `<사용자명>.github.io`이면 사이트는 `https://<사용자명>.github.io/`에 배포됩니다. 그 외 저장소 이름을 쓰면 주소 뒤에 `/<저장소명>/`이 붙습니다. [GitHub Pages 공식 가이드](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 메인 이미지

`assets/code-emblem.jpg`는 내장 ImageGen으로 생성하고 JPEG로 변환했습니다.

> Stylized-concept, landscape web hero artwork for a Korean developer portfolio. A single oversized sculptural coding emblem built from three unmistakable separate glyph shapes: left angle bracket, slash, right angle bracket, arranged as </> with a subtle inset perspective angle. Make them physical objects of thick folded, perforated and ribbed anodized aluminum, sculptural and tactile, with tight geometry like vintage signal hardware. Hot coral-orange key lighting (#ff7a65), muted dusky purple shadows. The symbol floats in a very dark charcoal-black studio (#101014). Barely visible fine engineering grid in the background and extremely subtle fine dust; sophisticated, restrained, directional glow. The entire symbol should be in the inner 72% of the image, centered horizontally and vertically, plenty of nearly black space around it, corners and edges fade fully to #101014. Sharp symbol with rich microtexture and shadows, modern design studio editorial product shot. Wide landscape aspect 3:2. No typography other than the abstract code glyph, no frame, no border, no watermark, no interface, no additional objects.

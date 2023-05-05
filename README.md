# 원티드 프리온보딩 인턴십 프론트엔드  2주차 과제

---

원티드 프리온보딩 프론트엔드 인턴십 2주차 과제입니다. 

[가이드라인](https://www.notion.so/686886ad00a14160981dde383816b0d6)과 강의 자료 중 과제 피드백을 준수하였습니다.

## ⌨️설치 및 실행

---

### 설치

`npm run install`

### 실행

`npm run start`

## 📢 배포링크 ( CORS 이슈 존재 )

---

🔗  [https://main--peaceful-unicorn-6c299f.netlify.app/](https://main--peaceful-unicorn-6c299f.netlify.app/)

⚠️ cors 문제가 있습니다. cors disable 실행하신 후 확인해주세요.

```bash
#window일 경우
#chrome경로로 가셔서 터미널 창을 여시고, 다음 명령어를 입력하세요.
chrome.exe --disable-web-security --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp 
-–allow-file-access-from-files
```

또는 cors 해제 확장 프로그램 설치 : [https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc)

## 🎳 best practice 기능 구현 목록

---

- 검색창 구현
- 검색어 추천 기능 구현
- 캐싱 기능 구현
- 키보드만으로 추천 검색어들로 이동 가능하도록 구현

## 1. 검색어 추천 기능

---

### 1) 기능 개요

> 질환 명 검색 시 API에서 호출한 데이터를 바탕으로 최대 7개의 추천 검색어 제안
> 
![스크린샷 2023-05-05 오후 10 00 00](https://user-images.githubusercontent.com/97998938/236464270-b0a5aedf-04ba-4131-acc7-94e42faa3ecd.png)

### 2) API 캐싱기능 구현

```jsx
const CACHE_KEY_PREFIX = 'cache_';
const CACHE_EXPIRATION_TIME = 60 * 1000; // 1분

export const setCachedData = (key, data) => {
  const timestamp = Date.now();
  const cacheKey = `${CACHE_KEY_PREFIX}${key}`;
  const cacheData = JSON.stringify({ data, timestamp });
  localStorage.setItem(cacheKey, cacheData);
};

export const getCachedData = (key, expirationTime = CACHE_EXPIRATION_TIME) => {
  const cacheKey = `${CACHE_KEY_PREFIX}${key}`;
  const cachedData = localStorage.getItem(cacheKey);
  if (!cachedData) return null;

  const { data, timestamp } = JSON.parse(cachedData);

  const isExpired = Date.now() > timestamp + expirationTime;
  if (!isExpired) {
    return data;
  }
  localStorage.removeItem(cacheKey);
};
```

- 브라우저 `Local Storage`에 기존 검색어의 추천 검색어 결과 리스트를 저장
- 캐싱 사용 이유
    - 중복되는 검색어로 인한 API 반복 호출을 피함.
    - 동일 데이터 재 호출 시 데이터가 클라이언트 단에 존재하여 기존 대비 적은 시간 소요.
- 캐싱 데이터 만료 기간 부여
    - 캐싱 데이터를 생성하는 시점의 `timestamp`를 함께 저장
    - `timestamp` + 만료 시간(1분으로 설정)이 초과되는 캐싱 데이터는 `Local Storage`에서 삭제
- `Local Storage` 사용 이유
    - `Local Storage`는 데이터를 영구적으로 보관
    - `session Storage`는 브라우저가 종료되면 데이터도 소멸
    - `expired time` 직접 설정하기 위하여 `Local Storage`사용

### 3) API 호출 최소화 전략

```jsx
import { useEffect, useState } from 'react';

export const useDebounce = (callback, delay) => {
  const [debouncedCallback, setDebouncedCallback] = useState(() => callback);

  useEffect(() => {
    setDebouncedCallback(() => callback);
  }, [callback]);

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      debouncedCallback();
    }, delay);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [debouncedCallback, delay]);

  return debouncedCallback;
};
```

- 키보드 타이핑 도중 API 호출이 되지 않고, 타이핑이 종료되고 0.5초 후에 input 창에 입력된 Keyword를 확인하여 API를 호출.
- 추후 재사용 및 수정이 필요한 경우에 대비하여 해당 기능을 수행하는 로직은 커스텀 훅으로 분리하였음.

## 2. 추천 검색어 이동 기능

---

### 1) 기능 개요

> 다음 조작에 따라 추천 검색어 선택 및 이동이 가능합니다. 
⬆️ : 위방향 이동 , ⬇️ : 아래 방향 이동, ✅ enter : keyword 입력 , 🖱️: 마우스 `hover`
> 


![ezgif com-video-to-gif](https://user-images.githubusercontent.com/97998938/236464676-bf519ee0-a9fb-44c2-803a-85eb896bb37e.gif)


### 2) 구현 방법

```jsx
...

export const useKeyPress = (recommendations, setKeyword) => {
  const [focusIndex, setFocusIndex] = useState(0);

  const recommendLen =
    recommendations.length + 1 <= searchLength.INDEX_MAX
      ? recommendations.length + 1
      : searchLength.INDEX_MAX;

  const onKeyDownHandler = event => {
    switch (event.keyCode) {
      case searchEnterKeyCode.ENTER:
        if (!recommendations[focusIndex - 1]) return;
        setKeyword(recommendations[focusIndex - (1 % recommendLen)].name);
        setFocusIndex(0);
        break;
      case searchEnterKeyCode.ARROW_DOWN:
        setFocusIndex(focusIndex < recommendLen - 1 ? focusIndex + 1 : 1);
        break;
      case searchEnterKeyCode.ARROW_UP:
        setFocusIndex(focusIndex === 1 ? recommendLen - 1 : focusIndex - 1);
        break;
      default:
        break;
    }
  };

  return { focusIndex, setFocusIndex, onKeyDownHandler };
};
```

- `onKeyDownHandler` 키보드 위 아래 화살표를 타이핑 시 `focusIndex` 가 1씩 `+` (아래 방향), `-` (위 방향)된다.
- **`enter`** 입력시 선택된 키워드가 `Input`창에 입력된다.
- `focusIndex`와 `recommendations`의 결과를 비교해서 선택된 요소는 css를 변경해 준다.

## ✏️ 기술 스택

---

- React
- Javascript
- axios
- styled-components
- react-icons

## 👉 과제 진행 방식

---

- 개발 전 기능별 Best Practice 공통 기준을 세운 후에 팀원 개개인이 구현하고, 구체화 시켰습니다.
- 기능 구현 후 브랜치에 Pull Request를 날린 후, 코드 리뷰를 통해 최고의 Best Practice를 채택했습니다.
- 서로의 코드를 리뷰하고 그 중에서 Best Practice를 결정한 다음 보완할 점을 의논하고, 리팩토링을 진행했습니다.

## ✅ Best Practice 선정 기준

---

1. 가독성 좋은 코드 & 문서
    - 너무 길지 않고 뜻이 명확한 변수/함수명
    - 띄어쓰기가 규칙에 맞게 잘 짜여진 통일성 있는 코드
    - 관심사의 분리가 잘 이뤄진 코드
    - 커밋 메시지만으로 버전의 변화를 파악할 수 있는 히스토리
2. 성능이 좋은 코드
    - 컴포넌트 재사용을 통한 성능 개선
    - 유틸 함수 사용을 통한 반복 코드 제거
3. 유지보수하기 용이한 코드
    - 확장가능성이 있는 코드
    - 외부 의존성이 적은 코드

## 📏 규칙

---

### 코딩 컨벤션

> formatter와 linter 설정을 통해 통일성 있는 코드를 작성
> 
- ESlint
    - airbnb 규칙을 사용하였으며, 회의를 통해서 규칙을 수정
- Prettier
    - 팀에서 결정한 코드 포맷 옵션으로 저장 시 자동으로 포맷
- Husky
    - 커밋 전에는 포맷을, 푸쉬 전에는 린팅을 강제하는 설정
    
    ```bash
    #pre-commit
    npx lint-staged
    ```
    
    ```bash
    #pre-commit
    npm run lint
    ```
    

### 커밋 컨벤션

> 다음과 같은 기준에 따라 말머리를 붙이고, oneline commit message를 작성하는 것을 컨벤션으로 정함.
> 

```markdown
- feat: The new feature you're adding to a particular application
- fix: A bug fix
- style: Feature and updates related to styling
- refactor: Refactoring a specific section of the codebase
- test: Everything related to testing
- docs: Everything related to documentation
- chore: Regular code maintenance.

```

### 절대 경로 설정

- src 폴더를 절대 경로로 설정해서 간결한 import 경로 설정 가능

## 🤲 협업툴

---

- Github
- Discord
- Notion

## 📙 파일 구조

---

```jsx
📦src
 ┣ 📂apis
 ┃ ┣ 📜axiosInstance.js
 ┃ ┗ 📜searchConditions.js
 ┣ 📂components
 ┃ ┣ 📂layouts
 ┃ ┃ ┗ 📂AppLayout
 ┃ ┃ ┃ ┣ 📜AppLayout.jsx
 ┃ ┃ ┃ ┣ 📜AppLayout.styles.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂SearchBar
 ┃ ┃ ┣ 📂Recommendation
 ┃ ┃ ┃ ┣ 📂RecommendationList
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜RecommendationList.jsx
 ┃ ┃ ┃ ┃ ┗ 📜RecommendationList.styles.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜Recommendation.constants.js
 ┃ ┃ ┃ ┣ 📜Recommendation.jsx
 ┃ ┃ ┃ ┗ 📜Recommendation.styles.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜SearchBar.constants.js
 ┃ ┃ ┣ 📜SearchBar.hooks.jsx
 ┃ ┃ ┣ 📜SearchBar.jsx
 ┃ ┃ ┗ 📜SearchBar.styles.js
 ┃ ┗ 📂Title
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜Title.jsx
 ┃ ┃ ┗ 📜Title.styles.js
 ┣ 📂hooks
 ┃ ┣ 📜useClickOutside.js
 ┃ ┣ 📜useDebounce.js
 ┃ ┗ 📜useInput.js
 ┣ 📂styles
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜colors.js
 ┃ ┃ ┗ 📜dimensions.js
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜flex.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜position.js
 ┃ ┃ ┗ 📜textStyle.js
 ┃ ┗ 📜GlobalStyles.js
 ┣ 📂utils
 ┃ ┗ 📜cache.js
 ┣ 📜App.jsx
 ┗ 📜index.js
```

## 👨‍👩‍👧‍👦 팀 소개
| 이름 | Github link |
| --- | --- |
| 김동률 | https://github.com/doctork4 |
| 김혜빈 | https://github.com/khv2644511 |
| 심미진 | https://github.com/azure-553 |
| 이채욱 | https://github.com/codnr98 |
| 장의영 | https://github.com/yeongi |
| 김경일 | https://github.com/KKI147 |
| 정종현 | https://github.com/jung-jong |
| 하정원 | https://github.com/JayeHa |

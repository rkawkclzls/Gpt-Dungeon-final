# Gpt-Dungeon-final

## 프로젝트 소개

GPT-Dungeon은 사용자가 대화형 인터페이스를 통해 다양한 가상의 던전을 탐험할 수 있는 웹 기반 어플리케이션입니다. GitHub 페이지를 활용하여 쉽게 접근 가능한 이 프로젝트는, 최신 GPT 모델을 이용해 풍부하고 몰입감 있는 스토리텔링 경험을 제공합니다.

## 목표

- **접근성 높은 던전 탐험 게임 제공:** GitHub 페이지를 통해 누구나 쉽게 접근하고 즐길 수 있습니다.
- **대화형 스토리텔링:** GPT 모델을 활용하여 사용자의 선택에 따라 달라지는 스토리라인을 제공합니다.
- **교육적 활용:** 프로그래밍 및 인공지능 기술 학습에 대한 흥미를 유발할 수 있는 콘텐츠를 제공합니다.

## 사용 방법

1. **웹사이트 접속:** [GPT-Dungeon GitHub 페이지](https://github.com/username/gpt-dungeon)에 접속합니다.
2. **던전 선택:** 제공되는 던전 이미지 중 하나를 선택하여 탐험을 시작합니다.
3. **대화 진행:** GPT-Dungeon과의 대화를 통해 스토리를 진행시킵니다. 선택지를 선택하거나 질문에 답하여 던전을 탐험하세요.

## 기술 스택

- **프론트엔드:** HTML, CSS, JavaScript
- **AI 모델:** OpenAI GPT
- **호스팅:** GitHub Pages

  ## WBS
```mermaid
gantt
    title GPT-Dungeon 프로젝트 WBS (2024-02-13 ~ 2024-02-16)
    dateFormat  YYYY-MM-DD
    section 초기 계획 및 준비
    프로젝트 계획 수립       :done,    2024-02-13, 1d
    기술 스택 선정         :done,    2024-02-13, 1d
    
    section 프론트엔드 개발
    UI/UX 디자인          :         2024-02-14, 1d
    HTML/CSS 마크업       :         2024-02-14, 1d
    
    section 기능구현 API통합
    GPT API 통합          :         2024-02-15, 1d
    
    section 테스트 및 배포
    기능 테스트 및 버그 수정 :         2024-02-16, 1d
    GitHub Pages 배포     :         2024-02-16, 1d
```


## 사용자 상호작용 흐름

```mermaid
sequenceDiagram
    participant 사용자 as 사용자
    participant 웹 as 웹 인터페이스
    participant GPT as GPT 모델
    사용자->>웹: 던전 선택
    웹->>GPT: 사용자의 선택 전달
    GPT->>웹: 던전 내러티브 생성
    웹->>사용자: 스토리와 선택지 표시
    사용자->>웹: 선택 진행
    웹->>GPT: 사용자의 선택 전달
    GPT->>웹: 스토리 계속
    웹->>사용자: 스토리의 다음 부분 표시
```

## WBS
```mermaid
gantt
    title GPT-Dungeon 프로젝트 WBS (2024-02-13 ~ 2024-02-16)
    dateFormat  YYYY-MM-DD
    section 초기 계획 및 준비
    프로젝트 계획 수립       :done,    2024-02-13, 1d
    기술 스택 선정         :done,    2024-02-13, 1d
    
    section 프론트엔드 개발
    UI/UX 디자인          :         2024-02-14, 1d
    HTML/CSS 마크업       :         2024-02-14, 1d
    
    section 기능구현 API통합
    GPT API 통합          :         2024-02-15, 1d
    
    section 테스트 및 배포
    기능 테스트 및 버그 수정 :         2024-02-16, 1d
    GitHub Pages 배포     :         2024-02-16, 1d
```

## 의존성 그래프
```mermaid
graph TD
    A[게임 초기화] --> B[던전 데이터 로드]
    B --> C[던전 선택지 렌더링]
    C --> D[사용자 던전 선택]
    D --> E[GPT 모델 호출]
    E --> F[스토리 생성]
    F --> G[사용자에게 스토리 표시]
    G --> H[사용자 선택 진행]
    H -->|반복| E
```
## 시스템 아키텍쳐
```mermaid
graph TD
    A[사용자 인터페이스] -->|사용자 상호작용| B[GPT 모델 API]
    B -->|응답 생성| A
    A -->|결과 표시| C[웹 브라우저]
    C -->|사용자 행동| A
    B --> D[데이터 저장소]
    D -->|대화 저장| B
```




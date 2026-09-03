# X(Twitter) Scraper API (TwexAPI)

[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · **한국어** · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

> TwexAPI는 독립 서드파티 서비스입니다. X Corp와 제휴되어 있지 않습니다. "Twitter"와 "X"는 X Corp의 상표입니다.

TwexAPI는 X(Twitter) Scraper API이자 X API 대안입니다. 트윗 검색, 프로필, 팔로워 등 공개 데이터 조회에 사용합니다. REST, SDK, MCP, CLI, Skill, Terraform, [Apify Actor](https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2)을 지원합니다.

아래 요청에는 `X_API_SCRAPER_KEY`가 필요합니다. 읽기에는 공식 X 개발자 계정이나 X 계정 연결이 필요 없습니다.

## 요청 한 번 실행

[TwexAPI 대시보드](https://twexapi.io/dashboard)에서 API 키를 만든 뒤 실행하세요.

```bash
export X_API_SCRAPER_KEY='replace_me'

curl --request POST 'https://api.twexapi.io/twitter/advanced_search/page' \
  --header "Authorization: Bearer ${X_API_SCRAPER_KEY}" \
  --header 'content-type: application/json' \
  --data '{
    "searchTerms": ["from:elonmusk"],
    "sortBy": "Latest",
    "next_cursor": ""
  }'
```

## Skills 설치

```bash
npx skills@1.5.3 add twexapi-dev/x-api-scraper
```

### LobeHub

```bash
lh login
lh skill install https://github.com/twexapi-dev/x-api-scraper/tree/main/skills/x-api-scraper
lh skill install https://github.com/twexapi-dev/x-api-scraper/tree/main/skills/x-api-scraper-research
```

## 지원 범위

| 영역 | 작업 |
| --- | --- |
| Tweets | 검색, 타임라인, 답글, 인용, 스레드 |
| Profiles | 조회, 팔로워, 팔로잉 |
| Other | 리스트, 커뮤니티, 트렌드, 아티클 |
| Integrations | REST, MCP, Skills, SDK, CLI, Terraform |

## SDK 및 도구

| Tool | Source |
| --- | --- |
| TypeScript | https://github.com/twexapi-dev/x-api-scraper-typescript |
| Python | https://github.com/twexapi-dev/x-api-scraper-python |
| Go | https://github.com/twexapi-dev/x-api-scraper-go |
| CLI | https://github.com/twexapi-dev/x-api-scraper-cli |
| Terraform | https://registry.terraform.io/providers/twexapi-dev/x-api-scraper/latest |
| Apify | https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2 |
| Docs | https://docs.twexapi.io |

## 자주 묻는 질문

### 공식 X 개발자 계정이 필요한가요?

아니요. 공개 스크레이핑은 TwexAPI API 키만 사용합니다.

### 공개 읽기에 X 계정 연결이 필요한가요?

아니요. 트윗, 프로필, 검색, 팔로워, 타임라인 읽기는 API 키만 있으면 됩니다.

## 문서

- https://docs.twexapi.io
- https://docs.twexapi.io/mcp/overview
- https://twexapi.io/dashboard

## 라이선스

MIT

TwexAPI is an independent third-party service. Not affiliated with X Corp.

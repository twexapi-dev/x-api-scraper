# X(Twitter) Scraper API (TwexAPI)

[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · **한국어** · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

> TwexAPI는 독립 서드파티 서비스입니다. X Corp와 제휴되어 있지 않습니다. "Twitter"와 "X"는 X Corp의 상표입니다.

TwexAPI는 X(Twitter) Scraper API이자 X API 대안입니다. 트윗 검색, 프로필, 팔로워 페이지네이션, 승인된 계정 작업에 사용합니다. REST, SDK, MCP, CLI, Skill, Terraform을 지원합니다.

아래 요청에는 `X_API_SCRAPER_KEY`가 필요합니다. 공개 읽기에는 공식 X 개발자 계정이 필요 없습니다. DM과 쓰기에는 cookie 또는 `auth_token`이 필요합니다. X 비밀번호나 2FA 코드를 보내지 마세요.

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
npx skills add twexapi-dev/x-api-scraper
```

## 지원 범위

| 영역 | 작업 |
| --- | --- |
| Tweets | 검색, 타임라인, 답글, 인용, 스레드 |
| Profiles | 조회, 팔로워, 팔로잉 |
| Other | 리스트, 커뮤니티, 트렌드, 아티클 |
| Integrations | REST, MCP, Skills, SDK, CLI, Terraform |
| Actions | 게시, DM, 팔로우(확인 후) |

## SDK 및 도구

| Tool | Source |
| --- | --- |
| TypeScript | https://github.com/twexapi-dev/x-api-scraper-typescript |
| Python | https://github.com/twexapi-dev/x-api-scraper-python |
| Go | https://github.com/twexapi-dev/x-api-scraper-go |
| CLI | https://github.com/twexapi-dev/x-api-scraper-cli |
| Terraform | https://registry.terraform.io/providers/twexapi-dev/x-api-scraper/latest |
| Docs | https://docs.twexapi.io |

## 자주 묻는 질문

### 공식 X 개발자 계정이 필요한가요?

아니요. 공개 스크레이핑은 TwexAPI API 키만 사용합니다.

### 공개 읽기에 X 계정 연결이 필요한가요?

아니요. DM과 쓰기만 cookie 또는 `auth_token`이 필요합니다.

## 문서

- https://docs.twexapi.io
- https://docs.twexapi.io/mcp/overview
- https://twexapi.io/dashboard

## 라이선스

MIT

TwexAPI is an independent third-party service. Not affiliated with X Corp.

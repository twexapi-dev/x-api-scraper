# X（Twitter）Scraper API（TwexAPI）

[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

> TwexAPI 是独立第三方服务，与 X Corp 无隶属关系。"Twitter" 和 "X" 是 X Corp 的商标。

TwexAPI 是 X（Twitter）Scraper API 和 X API 替代方案。搜索推文、读取资料、分页粉丝，并获取结构化公开数据。可通过 REST、类型化 SDK、MCP、CLI、Skill、Terraform 或 [Apify Actor](https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2) 使用。

下面的请求需要 `X_API_SCRAPER_KEY`。读取不需要官方 X 开发者账号，也不需要连接 X 账号。

## 发送一次请求

在 [TwexAPI 控制台](https://twexapi.io/dashboard) 创建 API key，然后运行：

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

## 安装 Skills

```bash
npx skills@1.5.3 add twexapi-dev/x-api-scraper
```

### Claude Code

```bash
claude plugin marketplace add twexapi-dev/x-api-scraper
claude plugin install x-api-scraper@x-api-scraper
```

### LobeHub

使用 LobeHub CLI 0.0.48 或更高版本。登录后安装两个 Skill，再确认：

```bash
lh login
lh skill install https://github.com/twexapi-dev/x-api-scraper/tree/main/skills/x-api-scraper
lh skill install https://github.com/twexapi-dev/x-api-scraper/tree/main/skills/x-api-scraper-research
lh skill list --source market
```

## 能力范围

| 方向 | 支持的工作 |
| --- | --- |
| 推文 | 查询、搜索、时间线、回复、引用、线程、互动数据 |
| 资料 | 查询、搜索、粉丝、已认证粉丝、正在关注 |
| 其他 | 列表、社群、趋势、文章、hashtag、cashtag |
| 接入 | REST、MCP、Skills、SDK、CLI、Terraform、Apify |

## SDK 与工具

| Tool | Source |
| --- | --- |
| TypeScript | https://github.com/twexapi-dev/x-api-scraper-typescript |
| Python | https://github.com/twexapi-dev/x-api-scraper-python |
| Go | https://github.com/twexapi-dev/x-api-scraper-go |
| CLI | https://github.com/twexapi-dev/x-api-scraper-cli |
| Terraform | https://registry.terraform.io/providers/twexapi-dev/x-api-scraper/latest |
| Apify | https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2 |
| Docs | https://docs.twexapi.io |

## 常见问题

### 需要官方 X 开发者账号吗？

不需要。公开抓取使用 TwexAPI API key。

### 公开读取需要连接 X 账号吗？

不需要。推文、资料、搜索、粉丝、时间线等读取只需 API key。

## 文档

- https://docs.twexapi.io
- https://docs.twexapi.io/mcp/overview
- https://twexapi.io/dashboard

## 许可证

MIT

TwexAPI is an independent third-party service. Not affiliated with X Corp.

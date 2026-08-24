# X（Twitter）Scraper API（TwexAPI）

[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

> TwexAPI 是独立第三方服务，与 X Corp 无隶属关系。"Twitter" 和 "X" 是 X Corp 的商标。

TwexAPI 是 X（Twitter）Scraper API 和 X API 替代方案。搜索推文、读取资料、分页粉丝，以及在确认后执行账号操作。可通过 REST、类型化 SDK、MCP、CLI、Skill 或 Terraform 使用。

下面的请求需要 `X_API_SCRAPER_KEY`。公开读取不需要官方 X 开发者账号，也不需要连接 X 账号。私信和发帖等写操作还需要请求里的 cookie 或 `auth_token`。不要向 TwexAPI 或 agent 发送 X 密码或 2FA 验证码。

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
npx skills add twexapi-dev/x-api-scraper
```

## 能力范围

| 方向 | 支持的工作 |
| --- | --- |
| 推文 | 查询、搜索、时间线、回复、引用、线程、点赞、转推、书签 |
| 资料 | 查询、搜索、粉丝、已认证粉丝、正在关注 |
| 其他 | 列表、社群、趋势、文章、hashtag、cashtag |
| 接入 | REST、MCP、Skills、SDK、CLI、Terraform |
| 账号操作 | 发帖、引用、线程、删除、点赞、转贴、关注、私信、书签 |

## SDK 与工具

| Tool | Source |
| --- | --- |
| TypeScript | https://github.com/twexapi-dev/x-api-scraper-typescript |
| Python | https://github.com/twexapi-dev/x-api-scraper-python |
| Go | https://github.com/twexapi-dev/x-api-scraper-go |
| CLI | https://github.com/twexapi-dev/x-api-scraper-cli |
| Terraform | https://registry.terraform.io/providers/twexapi-dev/x-api-scraper/latest |
| Docs | https://docs.twexapi.io |

## 常见问题

### 需要官方 X 开发者账号吗？

不需要。公开抓取使用 TwexAPI API key。

### 公开读取需要连接 X 账号吗？

不需要。私信和写操作才需要 cookie 或 `auth_token`。

## 文档

- https://docs.twexapi.io
- https://docs.twexapi.io/mcp/overview
- https://twexapi.io/dashboard

## 许可证

MIT

TwexAPI is an independent third-party service. Not affiliated with X Corp.

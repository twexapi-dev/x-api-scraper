# X（Twitter）Scraper API（TwexAPI）

[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

> TwexAPI は独立した第三者サービスです。X Corp とは提携していません。"Twitter" と "X" は X Corp の商標です。

TwexAPI は X（Twitter）Scraper API および X API の代替です。ツイート検索、プロフィール、フォロワー、承認済みのアカウント操作に使えます。REST、型付き SDK、MCP、CLI、Skill、Terraform に対応しています。

次のリクエストには `X_API_SCRAPER_KEY` が必要です。公開読み取りに公式 X 開発者アカウントは不要です。DM と書き込みには cookie または `auth_token` が必要です。X のパスワードや 2FA コードは送らないでください。

## 1 回のリクエスト

[TwexAPI ダッシュボード](https://twexapi.io/dashboard) で API キーを作成し、実行します。

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

## Skills をインストール

```bash
npx skills add twexapi-dev/x-api-scraper
```

## 対応範囲

| 領域 | できること |
| --- | --- |
| Tweets | 検索、タイムライン、返信、引用、スレッド、いいね、リポスト |
| Profiles | 検索、フォロワー、フォロー中 |
| Other | リスト、コミュニティ、トレンド、記事 |
| Integrations | REST、MCP、Skills、SDK、CLI、Terraform |
| Actions | 投稿、DM、フォロー（確認後） |

## SDK とツール

| Tool | Source |
| --- | --- |
| TypeScript | https://github.com/twexapi-dev/x-api-scraper-typescript |
| Python | https://github.com/twexapi-dev/x-api-scraper-python |
| Go | https://github.com/twexapi-dev/x-api-scraper-go |
| CLI | https://github.com/twexapi-dev/x-api-scraper-cli |
| Terraform | https://registry.terraform.io/providers/twexapi-dev/x-api-scraper/latest |
| Docs | https://docs.twexapi.io |

## よくある質問

### 公式の X 開発者アカウントは必要ですか？

いいえ。公開スクレイピングは TwexAPI の API キーだけで行えます。

### 公開読み取りに X アカウントの接続は必要ですか？

いいえ。DM と書き込みだけ cookie または `auth_token` が必要です。

## ドキュメント

- https://docs.twexapi.io
- https://docs.twexapi.io/mcp/overview
- https://twexapi.io/dashboard

## ライセンス

MIT

TwexAPI is an independent third-party service. Not affiliated with X Corp.

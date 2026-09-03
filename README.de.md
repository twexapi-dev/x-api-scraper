# X-(Twitter)-Scraper-API (TwexAPI)

[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · **Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

> TwexAPI ist ein unabhängiger Drittanbieter. Keine Verbindung zu X Corp. "Twitter" und "X" sind Marken von X Corp.

TwexAPI ist eine X-(Twitter)-Scraper-API und eine X-API-Alternative. Suche Tweets, lies Profile, pagine Follower und hole strukturierte öffentliche Daten. REST, SDKs, MCP, CLI, Skills, Terraform und [Apify Actor](https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2).

Die folgende Anfrage braucht `X_API_SCRAPER_KEY`. Reads brauchen kein offizielles X-Entwicklerkonto und kein verbundenes X-Konto.

## Eine Anfrage ausführen

Erstelle einen API-Schlüssel im [TwexAPI-Dashboard](https://twexapi.io/dashboard). Dann:

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

## Skills installieren

```bash
npx skills@1.5.3 add twexapi-dev/x-api-scraper
```

### LobeHub

```bash
lh login
lh skill install https://github.com/twexapi-dev/x-api-scraper/tree/main/skills/x-api-scraper
lh skill install https://github.com/twexapi-dev/x-api-scraper/tree/main/skills/x-api-scraper-research
```

## Abdeckung

| Bereich | Arbeit |
| --- | --- |
| Tweets | Suche, Timelines, Antworten, Zitate, Threads |
| Profile | Lookup, Follower, Following |
| Sonstiges | Listen, Communities, Trends, Artikel |
| Integrationen | REST, MCP, Skills, SDK, CLI, Terraform |

## SDKs und Tools

| Tool | Source |
| --- | --- |
| TypeScript | https://github.com/twexapi-dev/x-api-scraper-typescript |
| Python | https://github.com/twexapi-dev/x-api-scraper-python |
| Go | https://github.com/twexapi-dev/x-api-scraper-go |
| CLI | https://github.com/twexapi-dev/x-api-scraper-cli |
| Terraform | https://registry.terraform.io/providers/twexapi-dev/x-api-scraper/latest |
| Apify | https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2 |
| Docs | https://docs.twexapi.io |

## Häufige Fragen

### Brauche ich ein offizielles X-Entwicklerkonto?

Nein. Öffentliches Scraping nutzt deinen TwexAPI-API-Schlüssel.

### Brauche ich ein verbundenes X-Konto für öffentliche Reads?

Nein. Tweet-, Profil-, Such-, Follower- und Timeline-Reads brauchen nur den API-Key.

## Dokumentation

- https://docs.twexapi.io
- https://docs.twexapi.io/mcp/overview
- https://twexapi.io/dashboard

## Lizenz

MIT

TwexAPI is an independent third-party service. Not affiliated with X Corp.

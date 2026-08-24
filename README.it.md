# API di scraping X (Twitter) (TwexAPI)

[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · **Italiano**

> TwexAPI è un servizio di terze parti indipendente. Non affiliato a X Corp. "Twitter" e "X" sono marchi di X Corp.

TwexAPI è un’API di scraping X (Twitter) e un’alternativa alla X API. Cerca tweet, leggi profili, pagina i follower ed esegui azioni account confermate. REST, SDK, MCP, CLI, Skills, Terraform, [Actor Apify](https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2).

La richiesta seguente richiede `X_API_SCRAPER_KEY`. Le letture pubbliche non richiedono un account sviluppatore X ufficiale. DM e scritture richiedono anche cookie o `auth_token`. Non inviare mai password X o codici 2FA.

## Esegui una richiesta

Crea una chiave nella [dashboard TwexAPI](https://twexapi.io/dashboard). Poi:

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

## Installa le Skills

```bash
npx skills@1.5.3 add twexapi-dev/x-api-scraper
```

### LobeHub

```bash
lh login
lh skill install https://github.com/twexapi-dev/x-api-scraper/tree/main/skills/x-api-scraper
lh skill install https://github.com/twexapi-dev/x-api-scraper/tree/main/skills/x-api-scraper-research
```

## Copertura

| Area | Lavoro |
| --- | --- |
| Tweet | Ricerca, timeline, risposte, citazioni, thread |
| Profili | Lookup, follower, following |
| Altro | Liste, community, trend, articoli |
| Integrazioni | REST, MCP, Skills, SDK, CLI, Terraform |
| Azioni | Post, DM, follow (dopo conferma) |

## SDK e strumenti

| Tool | Source |
| --- | --- |
| TypeScript | https://github.com/twexapi-dev/x-api-scraper-typescript |
| Python | https://github.com/twexapi-dev/x-api-scraper-python |
| Go | https://github.com/twexapi-dev/x-api-scraper-go |
| CLI | https://github.com/twexapi-dev/x-api-scraper-cli |
| Terraform | https://registry.terraform.io/providers/twexapi-dev/x-api-scraper/latest |
| Apify | https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2 |
| Docs | https://docs.twexapi.io |

## Domande frequenti

### Serve un account sviluppatore X ufficiale?

No. Lo scraping pubblico usa la chiave TwexAPI.

### Serve un account X collegato per le letture pubbliche?

No. Solo DM e scritture richiedono cookie o `auth_token`.

## Documentazione

- https://docs.twexapi.io
- https://docs.twexapi.io/mcp/overview
- https://twexapi.io/dashboard

## Licenza

MIT

TwexAPI is an independent third-party service. Not affiliated with X Corp.

# API de scraping de X (Twitter) (TwexAPI)

[English](README.md) · **Español** · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

> TwexAPI es un servicio independiente de terceros. No está afiliado a X Corp. "Twitter" y "X" son marcas de X Corp.

TwexAPI es una API de scraping de X (Twitter) y una alternativa a la X API. Busca tweets, lee perfiles, pagina seguidores y obtiene datos públicos estructurados. Usa REST, SDKs, MCP, CLI, Skills, Terraform o el [Actor de Apify](https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2).

La petición siguiente necesita `X_API_SCRAPER_KEY`. Las lecturas no requieren una cuenta de desarrollador oficial de X ni conectar una cuenta de X.

## Ejecuta una petición

Crea una clave en el [panel de TwexAPI](https://twexapi.io/dashboard). Luego ejecuta:

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

## Instalar las Skills

```bash
npx skills@1.5.3 add twexapi-dev/x-api-scraper
```

### LobeHub

```bash
lh login
lh skill install https://github.com/twexapi-dev/x-api-scraper/tree/main/skills/x-api-scraper
lh skill install https://github.com/twexapi-dev/x-api-scraper/tree/main/skills/x-api-scraper-research
```

## Cobertura

| Área | Trabajo |
| --- | --- |
| Tweets | Búsqueda, timelines, respuestas, citas, hilos |
| Perfiles | Consulta, seguidores, following |
| Otros | Listas, comunidades, tendencias, artículos |
| Integraciones | REST, MCP, Skills, SDK, CLI, Terraform |

## SDKs y herramientas

| Tool | Source |
| --- | --- |
| TypeScript | https://github.com/twexapi-dev/x-api-scraper-typescript |
| Python | https://github.com/twexapi-dev/x-api-scraper-python |
| Go | https://github.com/twexapi-dev/x-api-scraper-go |
| CLI | https://github.com/twexapi-dev/x-api-scraper-cli |
| Terraform | https://registry.terraform.io/providers/twexapi-dev/x-api-scraper/latest |
| Apify | https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2 |
| Docs | https://docs.twexapi.io |

## Preguntas frecuentes

### ¿Necesito una cuenta oficial de desarrollador de X?

No. El scraping público usa tu clave de TwexAPI.

### ¿Necesito conectar una cuenta de X para lecturas públicas?

No. Las lecturas de tweets, perfiles, búsqueda, seguidores y timelines usan solo la API key.

## Documentación

- https://docs.twexapi.io
- https://docs.twexapi.io/mcp/overview
- https://twexapi.io/dashboard

## Licencia

MIT

TwexAPI is an independent third-party service. Not affiliated with X Corp.

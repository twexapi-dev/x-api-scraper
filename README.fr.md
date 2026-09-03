# API de scraping X (Twitter) (TwexAPI)

[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

> TwexAPI est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X" sont des marques de X Corp.

TwexAPI est une API de scraping X (Twitter) et une alternative à l’API X. Recherchez des tweets, lisez des profils, paginez les abonnés et récupérez des données publiques structurées. REST, SDK, MCP, CLI, Skills, Terraform, [Actor Apify](https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2).

La requête ci-dessous nécessite `X_API_SCRAPER_KEY`. Les lectures n’exigent pas de compte développeur X officiel ni de connexion à un compte X.

## Exécuter une requête

Créez une clé dans le [tableau de bord TwexAPI](https://twexapi.io/dashboard). Puis :

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

## Installer les Skills

```bash
npx skills@1.5.3 add twexapi-dev/x-api-scraper
```

### LobeHub

```bash
lh login
lh skill install https://github.com/twexapi-dev/x-api-scraper/tree/main/skills/x-api-scraper
lh skill install https://github.com/twexapi-dev/x-api-scraper/tree/main/skills/x-api-scraper-research
```

## Couverture

| Zone | Travail |
| --- | --- |
| Tweets | Recherche, timelines, réponses, citations, fils |
| Profils | Lookup, abonnés, abonnements |
| Autre | Listes, communautés, tendances, articles |
| Intégrations | REST, MCP, Skills, SDK, CLI, Terraform |

## SDK et outils

| Tool | Source |
| --- | --- |
| TypeScript | https://github.com/twexapi-dev/x-api-scraper-typescript |
| Python | https://github.com/twexapi-dev/x-api-scraper-python |
| Go | https://github.com/twexapi-dev/x-api-scraper-go |
| CLI | https://github.com/twexapi-dev/x-api-scraper-cli |
| Terraform | https://registry.terraform.io/providers/twexapi-dev/x-api-scraper/latest |
| Apify | https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2 |
| Docs | https://docs.twexapi.io |

## Questions fréquentes

### Faut-il un compte développeur X officiel ?

Non. Le scraping public utilise votre clé TwexAPI.

### Faut-il connecter un compte X pour les lectures publiques ?

Non. Les lectures de tweets, profils, recherche, abonnés et timelines utilisent uniquement la clé API.

## Documentation

- https://docs.twexapi.io
- https://docs.twexapi.io/mcp/overview
- https://twexapi.io/dashboard

## Licence

MIT

TwexAPI is an independent third-party service. Not affiliated with X Corp.

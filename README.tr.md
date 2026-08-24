# X (Twitter) Scraper API (TwexAPI)

[English](README.md) · [Español](README.es.md) · **Türkçe** · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

> TwexAPI bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir. "Twitter" ve "X", X Corp’un markalarıdır.

TwexAPI bir X (Twitter) Scraper API ve X API alternatifidir. Tweet ara, profilleri oku, takipçileri sayfala ve onaylı hesap işlemleri çalıştır. REST, SDK, MCP, CLI, Skill, Terraform veya [Apify Actor](https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2) kullan.

Aşağıdaki istek için `X_API_SCRAPER_KEY` gerekir. Genel okumalar resmi X geliştirici hesabı gerektirmez. DM ve yazmalar için cookie veya `auth_token` da gerekir. X parolası veya 2FA kodu göndermeyin.

## Bir istek çalıştır

[TwexAPI panosunda](https://twexapi.io/dashboard) bir API anahtarı oluşturun. Sonra:

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

## Skill’leri kur

```bash
npx skills add twexapi-dev/x-api-scraper
```

## Kapsam

| Alan | İş |
| --- | --- |
| Tweetler | Arama, zaman çizelgesi, yanıt, alıntı, thread |
| Profiller | Lookup, takipçi, following |
| Diğer | Listeler, topluluklar, trendler, makaleler |
| Entegrasyon | REST, MCP, Skills, SDK, CLI, Terraform |
| İşlemler | Gönderi, DM, takip (onay sonrası) |

## SDK ve araçlar

| Tool | Source |
| --- | --- |
| TypeScript | https://github.com/twexapi-dev/x-api-scraper-typescript |
| Python | https://github.com/twexapi-dev/x-api-scraper-python |
| Go | https://github.com/twexapi-dev/x-api-scraper-go |
| CLI | https://github.com/twexapi-dev/x-api-scraper-cli |
| Terraform | https://registry.terraform.io/providers/twexapi-dev/x-api-scraper/latest |
| Apify | https://apify.com/fastcrawler/tweet-x-twitter-scraper-0-05-1k-pay-per-result-v2 |
| Docs | https://docs.twexapi.io |

## Sık sorulanlar

### Resmi X geliştirici hesabı gerekir mi?

Hayır. Genel scraping TwexAPI API anahtarını kullanır.

### Genel okumalar için X hesabı bağlamak gerekir mi?

Hayır. Yalnızca DM ve yazmalar cookie veya `auth_token` ister.

## Belgeler

- https://docs.twexapi.io
- https://docs.twexapi.io/mcp/overview
- https://twexapi.io/dashboard

## Lisans

MIT

TwexAPI is an independent third-party service. Not affiliated with X Corp.

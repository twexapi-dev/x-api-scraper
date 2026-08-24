# Usage notes

## Environment

| Name | Purpose |
| --- | --- |
| `X_API_SCRAPER_KEY` | TwexAPI Bearer API key |
| `X_API_SCRAPER_BASE_URL` | Optional override; default `https://api.twexapi.io` |

## Pagination

- Prefer page/cursor endpoints (`advanced`, `replies.page`, `userPage`, v3 followers).
- Stop when `hasNextPage` / `has_next_page` is false, or when the user-requested bound is reached.
- Never parse or synthesize cursors.

## Errors

Use `XAPIScraperError` from `@twexapi-dev/x-api-scraper/models/errors`.

Retry connection errors and HTTP 429 / 5xx on reads only.

## Install

```bash
npm install @twexapi-dev/x-api-scraper
pi install npm:@twexapi-dev/x-api-scraper
```

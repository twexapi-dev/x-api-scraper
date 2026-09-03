---
name: who-retweeted
description: "Read retweeters with TwexAPI. Keep reads bounded. Not affiliated with X Corp."
license: MIT
metadata:
  author: TwexAPI
  version: "0.1.0"
---

# Read retweeters

List accounts that retweeted a tweet.

## Endpoint

`POST /twitter/tweets/retweeters/page`

SDK: `client.tweets.engagement.retweeters` / `retweetersPage`.

Use the page method when the user needs more than one page. Deduplicate on user IDs.

---
name: post-tweets
description: "Post a tweet with TwexAPI. Keep reads bounded. Require confirmation for writes and private DMs. Not affiliated with X Corp."
license: MIT
metadata:
  author: TwexAPI
  version: "0.1.0"
---

# Post a tweet

Post a tweet after explicit confirmation.

## Endpoint

`POST /twitter/tweets/create`

SDK: `client.tweets.actions.create`. CLI: `x-api-scraper tweet create --text ... --dry-run` first.

Requires a cookie or `auth_token`. Never collect an X password or 2FA code. Show the exact payload before sending.

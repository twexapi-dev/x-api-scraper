---
name: send-dms
description: "Send a DM with TwexAPI. Keep reads bounded. Require confirmation for writes and private DMs. Not affiliated with X Corp."
license: MIT
metadata:
  author: TwexAPI
  version: "0.1.0"
---

# Send a DM

Send a DM after explicit confirmation.

## Endpoint

`POST /v3/twitter/send-dm`

SDK: `client.dm.send`. CLI: `x-api-scraper dm send <recipient> --text ...`.

Requires a cookie or `auth_token`. Confirm recipient, text, and media URL. History uses `POST /v3/twitter/dm-history`.

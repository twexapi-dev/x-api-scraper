---
name: write-threads
description: "Create a thread with TwexAPI. Keep reads bounded. Require confirmation for writes and private DMs. Not affiliated with X Corp."
license: MIT
metadata:
  author: TwexAPI
  version: "0.1.0"
---

# Create a thread

Create a thread after explicit confirmation.

## Endpoint

`POST /v3/twitter/tweets/create-thread`

SDK: `client.tweets.actions.createThread`.

Requires a cookie or `auth_token`. Show every post in the thread before sending.

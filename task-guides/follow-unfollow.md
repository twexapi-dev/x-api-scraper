---
name: follow-unfollow
description: "Follow or unfollow with TwexAPI. Keep reads bounded. Require confirmation for writes and private DMs. Not affiliated with X Corp."
license: MIT
metadata:
  author: TwexAPI
  version: "0.1.0"
---

# Follow or unfollow

Follow or unfollow after explicit confirmation.

## Endpoints

SDK: `client.users.follow` / `client.users.unfollow`.

Requires a cookie or `auth_token`. Show the target username before sending.

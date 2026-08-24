---
name: extract-followers
description: "List followers with TwexAPI. Keep reads bounded. Require confirmation for writes and private DMs. Not affiliated with X Corp."
license: MIT
metadata:
  author: TwexAPI
  version: "0.1.0"
---

# List followers

List followers for a public account.

## Endpoint

`POST /v3/twitter/users/followers`

SDK: `client.users.followers.list`. CLI: `x-api-scraper --app prod` follower commands.

Paginate with the returned cursor. Deduplicate on user IDs. Do not invent missing users.

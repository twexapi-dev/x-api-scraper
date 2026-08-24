---
name: tweet-replies
description: "Read tweet replies with TwexAPI. Keep reads bounded. Require confirmation for writes and private DMs. Not affiliated with X Corp."
license: MIT
metadata:
  author: TwexAPI
  version: "0.1.0"
---

# Read tweet replies

Paginate replies for a tweet ID.

## Endpoint

`POST /twitter/tweets/{tweet_id}/replies/page`

SDK: `client.tweets.replies.page`.

Ask for a numeric tweet ID when the user only pasted a URL. Extract the status ID from the path.

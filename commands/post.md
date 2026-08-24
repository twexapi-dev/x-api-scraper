---
description: Post a tweet to X
---

Post this text to X: "$ARGUMENTS"

## Workflow

1. If the text is empty, ask the user what to tweet.
2. Show the exact text, endpoint `POST /twitter/tweets/create`, and that a cookie or `auth_token` is required.
3. Wait for explicit user confirmation. Do not send the tweet before confirmation.
4. After confirmation, call `twexapi_request` with the confirmed payload.

Show the confirmed tweet ID when the API returns one.

Never collect an X password or 2FA code. Use only a cookie or `auth_token` the user already provided for this write.

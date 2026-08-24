# TwexAPI workflow examples

## Authentication

```ts
import { XApiScraper } from "@twexapi-dev/x-api-scraper";

const client = new XApiScraper({
  bearerAuth: process.env.X_API_SCRAPER_KEY,
});
```

## Search tweets

```ts
const page = await client.search.advanced({
  searchTerms: ["from:elonmusk"],
  sortBy: "Latest",
  nextCursor: "",
});
```

Pass `nextCursor` from the previous response to continue. Cursors are opaque. Never invent them.

## Profile and followers

```ts
const about = await client.users.getAbout({ screenName: "elonmusk" });
const followers = await client.users.followers.list({
  screenName: "elonmusk",
});
```

## Timeline and replies

```ts
const timeline = await client.timelines.userPage({ screenName: "elonmusk" });
const replies = await client.tweets.replies.page({ tweetId: "123" });
```

## Write actions

Show the payload and wait for approval. Writes need a cookie or `auth_token`.

```ts
await client.tweets.actions.create({
  // include cookie / auth fields from the user after approval
});
```

Do not retry writes unless the user approves a retry after seeing the error.

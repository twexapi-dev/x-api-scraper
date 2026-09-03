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

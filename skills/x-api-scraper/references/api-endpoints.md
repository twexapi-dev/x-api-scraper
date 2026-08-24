# TwexAPI REST and SDK index

Load this file when you need the route or SDK method for a task. Base URL: `https://api.twexapi.io`.

All requests use `Authorization: Bearer <X_API_SCRAPER_KEY>` unless noted.

| Need | REST route | SDK |
| --- | --- | --- |
| Search tweets | `POST /twitter/advanced_search/page` | `client.search.advanced` |
| Search hashtags | `POST /twitter/hashtags` | `client.search.hashtags` |
| Search cashtags | `POST /twitter/cashtags` | `client.search.cashtags` |
| User about | `GET /twitter/{screen_name}/about` | `client.users.getAbout` |
| Users by username | `POST /twitter/users` | `client.users.getByUsernames` |
| Users by id | `POST /twitter/users/by_ids` | `client.users.getByIds` |
| Search users | `GET /twitter/search-user/{keyword}/{target_count}` | `client.users.search` |
| Followers | `POST /v3/twitter/users/followers` | `client.users.followers.list` |
| Verified followers | `POST /v3/twitter/users/verified-followers` | `client.users.followers.verified` |
| Following | `POST /v3/twitter/users/following` | `client.users.following.list` |
| User timeline page | `POST /twitter/{screen_name}/timeline/page` | `client.timelines.userPage` |
| Tweets and replies page | `POST /twitter/tweets-replies/page` | `client.timelines.tweetsAndRepliesPage` |
| Tweet detail | `POST /v2/tweet/detail` | `client.tweets.detail` |
| Tweet thread | `POST /twitter/tweets/thread_by_id` | `client.tweets.thread` |
| Replies page | `POST /twitter/tweets/{tweet_id}/replies/page` | `client.tweets.replies.page` |
| Similar tweets | `GET /twitter/tweets/{tweet_id}/similar` | `client.tweets.similar` |
| Quotes page | `POST /twitter/tweets/quotes/page` | `client.tweets.engagement.quotesPage` |
| Trending tweets | `GET /twitter/global-trending/tweets` | `client.trending.tweets` |
| Community search | `POST /twitter/community/search` | `client.communities.search` |
| Community tweets page | `POST /twitter/community/tweets/page` | `client.communities.tweetsPage` |
| List search | `POST /twitter/list/search` | `client.lists.search` |
| Article markdown | `GET /x/article/{tweet_id}/markdown` | `client.articles.markdown` |
| Account balance | `GET /balance` | `client.account.balance` |
| DM history | `POST /v3/twitter/dm-history` | `client.dm.history` |
| Send DM | `POST /v3/twitter/send-dm` | `client.dm.send` |
| Create tweet | `POST /twitter/tweets/create` | `client.tweets.actions.create` |
| Like / unlike | `POST` / `DELETE` `/twitter/tweets/{tweet_id}/like` | `client.tweets.actions.like` / `unlike` |
| Follow / unfollow | `POST /twitter/user/follow` | `client.users.follow` / `unfollow` |

Writes and DMs need a cookie or `auth_token` on the request plus explicit user approval.

See the TypeScript [api.md](https://github.com/twexapi-dev/x-api-scraper-typescript/blob/main/api.md) for methods. Open a file under `docs/sdks/` in that repo, such as [search](https://github.com/twexapi-dev/x-api-scraper-typescript/blob/main/docs/sdks/search/README.md), for request fields.

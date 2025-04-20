export default defineEventHandler(async (event) => {
  // In a real app, this would fetch from the Rails API
  // For now, we'll use mock data
  const query = getQuery(event);
  const limit = query.limit ? parseInt(query.limit as string) : undefined;
  
  const mockNews = [
    {
      "type": "bluesky",
      "id": "post123",
      "content": "Urgent: Deportation case #DueProcess violation reported in Texas. Family separated without proper hearing.",
      "author": "@activist",
      "timestamp": "2025-04-20T10:00:00Z",
      "share_url": "https://bsky.app/post/123"
    },
    {
      "type": "newsapi",
      "id": "article456",
      "title": "Court Rules Against Deportation Without Hearing",
      "source": "The Intercept",
      "url": "https://theintercept.com/article/deportation-ruling",
      "timestamp": "2025-04-20T09:00:00Z"
    },
    {
      "type": "bluesky",
      "id": "post789",
      "content": "New report shows 65% of expedited deportations have #DueProcess concerns. We need accountability now.",
      "author": "@immigration_lawyer",
      "timestamp": "2025-04-19T14:30:00Z",
      "share_url": "https://bsky.app/post/789"
    },
    {
      "type": "newsapi",
      "id": "article101",
      "title": "Advocates Rally Against Mass Deportation Program",
      "source": "Democracy Now",
      "url": "https://democracynow.org/deportation-rally",
      "timestamp": "2025-04-18T16:45:00Z"
    },
    {
      "type": "bluesky",
      "id": "post202",
      "content": "BREAKING: Congressional hearing on #DueProcess in immigration courts scheduled for next week.",
      "author": "@policy_watch",
      "timestamp": "2025-04-17T11:20:00Z",
      "share_url": "https://bsky.app/post/202"
    }
  ];
  
  if (limit) {
    return mockNews.slice(0, limit);
  }
  
  return mockNews;
});

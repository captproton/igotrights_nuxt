export default defineEventHandler(async (event) => {
  // In a real app, this would fetch from the Rails API
  // For now, we'll use mock data
  
  const mockForumThreads = [
    {
      "id": "thread123",
      "title": "Discuss Due Process in Deportation Cases",
      "author": "legal_advocate",
      "timestamp": "2025-04-20T08:00:00Z",
      "content": "I'd like to start a discussion about recent cases where due process rights were violated during deportation proceedings. Has anyone been following the situation in Texas?"
    },
    {
      "id": "thread456",
      "title": "Community Support for Affected Families",
      "author": "community_organizer",
      "timestamp": "2025-04-18T15:30:00Z",
      "content": "We're organizing support groups for families affected by deportation policies. If you're interested in volunteering or know families who need support, please share resources here."
    },
    {
      "id": "thread789",
      "title": "Legislative Updates - New Bill Proposed",
      "author": "policy_watcher",
      "timestamp": "2025-04-15T11:45:00Z",
      "content": "A new bill has been proposed that would strengthen due process protections in immigration courts. Let's discuss the details and how we can support its passage."
    }
  ];
  
  return mockForumThreads;
});

export default defineEventHandler(async (event) => {
  // In a real app, this would fetch from the Rails API
  // For now, we'll use mock data
  const query = getQuery(event);
  const limit = query.limit ? parseInt(query.limit as string) : undefined;
  
  const mockPetitions = [
    {
      "id": "petition789",
      "title": "Stop Deportations Without Due Process",
      "embed_url": "https://change.org/p/stop-deportations/embed"
    },
    {
      "id": "petition456",
      "title": "Reform Immigration Court Procedures",
      "embed_url": "https://change.org/p/reform-immigration-courts/embed"
    }
  ];
  
  if (limit) {
    return mockPetitions.slice(0, limit);
  }
  
  return mockPetitions;
});

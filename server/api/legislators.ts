export default defineEventHandler(async (event) => {
  // In a real app, this would fetch from the Rails API
  // For now, we'll use mock data
  
  const mockLegislators = [
    {
      "id": "leg123",
      "name": "Senator Jane Doe",
      "email": "jane.doe@senate.gov",
      "phone": "202-555-1234"
    },
    {
      "id": "leg456",
      "name": "Representative John Smith",
      "email": "john.smith@house.gov",
      "phone": "202-555-5678"
    },
    {
      "id": "leg789",
      "name": "Senator Alex Johnson",
      "email": "alex.johnson@senate.gov",
      "phone": "202-555-9012"
    }
  ];
  
  return mockLegislators;
});

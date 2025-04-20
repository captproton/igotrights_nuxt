<script setup>
defineProps({
  legislator: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="p-6">
      <h3 class="text-xl font-bold mb-3">{{ legislator.name }}</h3>
      
      <div class="space-y-3 mb-4">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a :href="`mailto:${legislator.email}`" class="text-primary hover:underline">
            {{ legislator.email }}
          </a>
        </div>
        
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a :href="`tel:${legislator.phone}`" class="text-primary hover:underline">
            {{ legislator.phone }}
          </a>
        </div>
      </div>
      
      <div class="space-y-3">
        <a :href="`mailto:${legislator.email}?subject=Oppose%20Unjust%20Deportation%20Policies&body=Dear%20${legislator.name},%0A%0AI%20am%20writing%20to%20express%20my%20concern%20about%20current%20deportation%20policies%20that%20violate%20due%20process%20rights.%20I%20urge%20you%20to%20take%20action%20to%20ensure%20fair%20treatment%20for%20all%20individuals%20in%20our%20immigration%20system.%0A%0ASincerely,%0A[Your%20Name]`" 
           class="inline-block w-full text-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition">
          Email Now
        </a>
        
        <a :href="`tel:${legislator.phone}`" 
           class="inline-block w-full text-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition">
          Call Office
        </a>
      </div>
    </div>
  </div>
</template>

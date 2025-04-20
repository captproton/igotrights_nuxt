<script setup>
defineProps({
  petition: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="p-6">
      <h3 class="text-xl font-bold mb-4">{{ petition.title }}</h3>
      
      <div class="bg-gray-100 p-4 rounded-lg mb-4">
        <p class="text-gray-700">
          This petition calls for immediate action to stop unjust deportations that violate due process rights.
          Your signature matters in our fight for justice.
        </p>
      </div>
      
      <div class="border border-gray-200 rounded-lg p-4 mb-4">
        <div class="text-center text-gray-500">
          <p>Petition embed would appear here</p>
          <p class="text-sm mt-2">Source: {{ petition.embed_url }}</p>
        </div>
      </div>
      
      <a :href="petition.embed_url" target="_blank" 
         class="inline-block w-full text-center px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark transition">
        Sign this Petition
      </a>
    </div>
  </div>
</template>

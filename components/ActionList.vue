<script setup>
defineProps({
  actions: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div v-for="action in actions" :key="action.id" 
         class="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-secondary">
      <div class="p-6">
        <h3 class="text-xl font-bold mb-3">{{ action.title }}</h3>
        <p class="text-gray-600 mb-4">
          Take action now to support our mission against unjust deportation policies.
        </p>
        <a :href="action.url || '#'" target="_blank" 
           class="inline-block px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark transition">
          Take Action
        </a>
      </div>
    </div>
  </div>
</template>

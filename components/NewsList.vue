<script setup>
defineProps({
  newsItems: {
    type: Array,
    default: () => []
  }
});

const formatDate = (timestamp) => {
  if (!timestamp) return '';
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
</script>

<template>
  <div class="space-y-6">
    <div v-if="newsItems.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">No news items found matching your filter.</p>
    </div>
    
    <NewsItem 
      v-for="item in newsItems" 
      :key="item.id" 
      :news="item" 
    />
  </div>
</template>

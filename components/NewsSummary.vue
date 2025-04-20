<script setup>
defineProps({
  news: {
    type: Object,
    required: true
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
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="p-6">
      <div class="flex items-center mb-4">
        <span class="text-xs font-semibold uppercase tracking-wider" 
              :class="news.type === 'bluesky' ? 'text-blue-600' : 'text-green-600'">
          {{ news.type === 'bluesky' ? 'Bluesky' : 'News Article' }}
        </span>
        <span class="mx-2 text-gray-300">•</span>
        <span class="text-sm text-gray-500">{{ formatDate(news.timestamp) }}</span>
      </div>
      
      <h3 class="text-xl font-bold mb-2">
        {{ news.title || (news.content ? news.content.substring(0, 60) + '...' : 'No title') }}
      </h3>
      
      <p class="text-gray-600 mb-4">
        {{ news.content ? news.content.substring(0, 120) + '...' : 'No content available' }}
      </p>
      
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-500">
          {{ news.source || news.author || 'Unknown source' }}
        </span>
        <a :href="news.url || news.share_url || '#'" 
           target="_blank" 
           class="text-primary hover:text-primary-dark">
          Read more →
        </a>
      </div>
    </div>
  </div>
</template>

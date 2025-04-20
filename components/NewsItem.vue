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
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center">
        <span class="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded" 
              :class="news.type === 'bluesky' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'">
          {{ news.type === 'bluesky' ? 'Bluesky' : 'News Article' }}
        </span>
        <span class="mx-2 text-gray-300">•</span>
        <span class="text-sm text-gray-500">{{ formatDate(news.timestamp) }}</span>
      </div>
      
      <a :href="news.share_url || news.url || '#'" 
         target="_blank" 
         class="text-gray-400 hover:text-primary" 
         title="Share">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </a>
    </div>
    
    <h3 class="text-xl font-bold mb-3">
      {{ news.title || (news.content ? news.content.substring(0, 60) + '...' : 'No title') }}
    </h3>
    
    <p class="text-gray-600 mb-4">
      {{ news.content || 'No content available' }}
    </p>
    
    <div class="flex justify-between items-center">
      <span class="text-sm text-gray-500">
        {{ news.source || news.author || 'Unknown source' }}
      </span>
      <a :href="news.url || news.share_url || '#'" 
         target="_blank" 
         class="text-primary hover:text-primary-dark">
        Read full article →
      </a>
    </div>
  </div>
</template>

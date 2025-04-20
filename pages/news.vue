<script setup>
const { data: newsItems } = await useFetch('/api/news');
const activeFilter = ref('#DueProcess');

const filteredNews = computed(() => {
  if (!newsItems.value) return [];
  return newsItems.value.filter(item => 
    item.content?.includes(activeFilter.value) || 
    item.title?.includes(activeFilter.value)
  );
});
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8 text-center">{{ $t('news.title') }}</h1>
    
    <FilterBar :active-filter="activeFilter" />
    
    <div class="mt-8">
      <NewsList :news-items="filteredNews" />
    </div>
  </div>
</template>

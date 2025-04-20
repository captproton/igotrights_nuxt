<script setup>
const { data: newsItems } = await useFetch('/api/news?limit=3');
const { data: topActions } = await useFetch('/api/petitions?limit=2');
</script>

<template>
  <div>
    <HeroSection />
    
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">{{ $t('home.news.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NewsSummary 
            v-for="item in newsItems" 
            :key="item.id" 
            :news="item" 
          />
        </div>
        <div class="text-center mt-8">
          <NuxtLink :to="localePath('/news')" class="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition">
            {{ $t('home.news.viewAll') }}
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">{{ $t('home.actions.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ActionPreview 
            v-for="action in topActions" 
            :key="action.id" 
            :action="action" 
          />
        </div>
        <div class="text-center mt-8">
          <NuxtLink :to="localePath('/actions')" class="inline-block px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary-dark transition">
            {{ $t('home.actions.seeAll') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<template>
  <section class="bg-primary text-white py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl font-bold mb-6">{{ $t('home.hero.title') }}</h1>
      <p class="text-xl max-w-3xl mx-auto mb-8">
        {{ $t('home.hero.description') }}
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <NuxtLink :to="localePath('/actions')" class="px-8 py-3 bg-white text-primary font-bold rounded-md hover:bg-gray-100 transition">
          {{ $t('home.hero.action') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/news')" class="px-8 py-3 bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-primary transition">
          {{ $t('home.hero.news') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

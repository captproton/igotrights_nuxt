<template>
  <div class="text-center">
    <h1 class="text-5xl font-bold mb-6">{{ $t('error.title') }}</h1>
    <p class="text-xl mb-8">{{ $t('error.description') }}</p>
    <NuxtLink :to="localePath('/')" class="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition">
      {{ $t('error.home') }}
    </NuxtLink>
  </div>
</template>

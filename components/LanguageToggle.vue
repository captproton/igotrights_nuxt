<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value);
});
</script>

<template>
  <div class="relative group">
    <button class="flex items-center text-gray-700 hover:text-primary">
      <span class="mr-1">{{ locale }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
      <NuxtLink 
        v-for="locale in availableLocales" 
        :key="locale.code" 
        :to="switchLocalePath(locale.code)"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        {{ locale.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// The i18n functions are kept in setup but won't be used in the template anymore
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value);
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-md">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink :to="localePath('/')" class="text-2xl font-bold text-primary">Stand Against Deportation</NuxtLink>
        <div class="flex items-center space-x-6">
          <div class="hidden md:flex space-x-6">
            <NuxtLink :to="localePath('/')" class="text-gray-700 hover:text-primary">Home</NuxtLink>
            <NuxtLink :to="localePath('/news')" class="text-gray-700 hover:text-primary">News</NuxtLink>
            <NuxtLink :to="localePath('/actions')" class="text-gray-700 hover:text-primary">Action Hub</NuxtLink>
            <NuxtLink :to="localePath('/community')" class="text-gray-700 hover:text-primary">Community</NuxtLink>
            <NuxtLink :to="localePath('/about')" class="text-gray-700 hover:text-primary">About Us</NuxtLink>
          </div>
          
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
        </div>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Stand Against Deportation</h3>
            <p>Fighting for due process rights in U.S. immigration policy.</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><NuxtLink :to="localePath('/')" class="hover:text-primary-light">Home</NuxtLink></li>
              <li><NuxtLink :to="localePath('/news')" class="hover:text-primary-light">News</NuxtLink></li>
              <li><NuxtLink :to="localePath('/actions')" class="hover:text-primary-light">Action Hub</NuxtLink></li>
              <li><NuxtLink :to="localePath('/community')" class="hover:text-primary-light">Community</NuxtLink></li>
              <li><NuxtLink :to="localePath('/about')" class="hover:text-primary-light">About Us</NuxtLink></li>
              <li><NuxtLink :to="localePath('/privacy')" class="hover:text-primary-light">Privacy</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Contact</h3>
            <p>Email: info@standagainstdeportation.org</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {{ new Date().getFullYear() }} Stand Against Deportation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

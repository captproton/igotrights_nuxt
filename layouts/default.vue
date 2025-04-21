<script setup>
// Removed i18n related code since we're using static text now
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-md">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-primary">Stand Against Deportation</NuxtLink>
        <div class="flex items-center space-x-6">
          <div class="hidden md:flex space-x-6">
            <NuxtLink to="/" class="text-gray-700 hover:text-primary">Home</NuxtLink>
            <NuxtLink to="/news" class="text-gray-700 hover:text-primary">News</NuxtLink>
            <NuxtLink to="/actions" class="text-gray-700 hover:text-primary">Action Hub</NuxtLink>
            <NuxtLink to="/community" class="text-gray-700 hover:text-primary">Community</NuxtLink>
            <NuxtLink to="/about" class="text-gray-700 hover:text-primary">About Us</NuxtLink>
          </div>
          
          <!-- Removed language selector since i18n is not working -->
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
              <li><NuxtLink to="/" class="hover:text-primary-light">Home</NuxtLink></li>
              <li><NuxtLink to="/news" class="hover:text-primary-light">News</NuxtLink></li>
              <li><NuxtLink to="/actions" class="hover:text-primary-light">Action Hub</NuxtLink></li>
              <li><NuxtLink to="/community" class="hover:text-primary-light">Community</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-primary-light">About Us</NuxtLink></li>
              <li><NuxtLink to="/privacy" class="hover:text-primary-light">Privacy</NuxtLink></li>
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

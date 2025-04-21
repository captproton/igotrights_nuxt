<template>
  <section class="bg-primary text-white py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl font-bold mb-6">Stand Against Deportation</h1>
      <p class="text-xl max-w-3xl mx-auto mb-8">
        We oppose U.S. deportation policies that violate due process rights and tear families apart. Join our movement to advocate for fair and humane immigration policies.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <NuxtLink to="/actions" class="px-8 py-3 bg-white text-primary font-bold rounded-md hover:bg-gray-100 transition">
          Take Action
        </NuxtLink>
        <NuxtLink to="/news" class="px-8 py-3 bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-primary transition">
          Latest News
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

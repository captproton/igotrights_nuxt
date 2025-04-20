<script setup>
defineProps({
  action: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-secondary">
    <div class="p-6">
      <h3 class="text-xl font-bold mb-3">{{ action.title }}</h3>
      <p class="text-gray-600 mb-4">
        Take action now to support our mission against unjust deportation policies.
      </p>
      <NuxtLink to="/actions" class="inline-block px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark transition">
        Take Action
      </NuxtLink>
    </div>
  </div>
</template>

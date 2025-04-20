<script setup>
defineProps({
  threads: {
    type: Array,
    default: () => []
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
  <div class="space-y-4">
    <div v-for="thread in threads" :key="thread.id" class="border-b border-gray-200 pb-4">
      <div class="flex justify-between items-start">
        <h4 class="text-lg font-semibold">{{ thread.title }}</h4>
        <span class="text-sm text-gray-500">{{ formatDate(thread.timestamp) }}</span>
      </div>
      <p class="text-gray-600 mt-2">{{ thread.content }}</p>
      <div class="mt-2 text-sm text-gray-500">
        {{ thread.author }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  activeFilter: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="bg-gray-100 p-4 rounded-lg">
    <div class="flex flex-wrap items-center gap-4">
      <span class="font-medium text-gray-700">Filter by:</span>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-primary text-white rounded-full text-sm">
          #DueProcess
        </span>
        <span class="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm cursor-not-allowed">
          #FamilySeparation
        </span>
        <span class="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm cursor-not-allowed">
          #ImmigrationReform
        </span>
      </div>
    </div>
  </div>
</template>

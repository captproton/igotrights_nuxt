<script setup>
const { data: petitions } = await useFetch('/api/petitions');
const { data: legislators } = await useFetch('/api/legislators');
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8 text-center">{{ $t('actions.title') }}</h1>
    
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6">{{ $t('actions.petitions.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PetitionForm 
          v-for="petition in petitions" 
          :key="petition.id" 
          :petition="petition" 
        />
      </div>
    </section>
    
    <section>
      <h2 class="text-3xl font-bold mb-6">{{ $t('actions.legislators.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <LegislatorContact 
          v-for="legislator in legislators" 
          :key="legislator.id" 
          :legislator="legislator" 
        />
      </div>
    </section>
  </div>
</template>

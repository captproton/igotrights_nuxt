<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ $t('about.partners.title') }}</h2>
    <p class="text-gray-600 mb-6">
      {{ $t('about.partners.description') }}
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="border border-gray-200 rounded-lg p-4 text-center">
        <h3 class="font-bold mb-2">ACLU</h3>
        <p class="text-sm text-gray-600">American Civil Liberties Union</p>
      </div>
      
      <div class="border border-gray-200 rounded-lg p-4 text-center">
        <h3 class="font-bold mb-2">NILC</h3>
        <p class="text-sm text-gray-600">National Immigration Law Center</p>
      </div>
      
      <div class="border border-gray-200 rounded-lg p-4 text-center">
        <h3 class="font-bold mb-2">RAICES</h3>
        <p class="text-sm text-gray-600">Refugee and Immigrant Center for Education and Legal Services</p>
      </div>
    </div>
  </div>
</template>

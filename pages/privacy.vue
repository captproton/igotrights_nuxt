<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-6 text-center">{{ $t('privacy.title') }}</h1>
    <p class="text-center text-gray-500 mb-12">{{ $t('privacy.lastUpdated') }}: April 15, 2025</p>
    
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-8">
        <p class="text-gray-600 mb-8">
          {{ $t('privacy.introduction') }}
        </p>
        
        <div class="space-y-8">
          <section>
            <h2 class="text-2xl font-bold mb-4">{{ $t('privacy.information.title') }}</h2>
            <p class="text-gray-600">
              {{ $t('privacy.information.description') }}
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">{{ $t('privacy.use.title') }}</h2>
            <p class="text-gray-600">
              {{ $t('privacy.use.description') }}
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">{{ $t('privacy.sharing.title') }}</h2>
            <p class="text-gray-600">
              {{ $t('privacy.sharing.description') }}
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">{{ $t('privacy.rights.title') }}</h2>
            <p class="text-gray-600">
              {{ $t('privacy.rights.description') }}
            </p>
          </section>
          
          <section>
            <h2 class="text-2xl font-bold mb-4">{{ $t('privacy.contact.title') }}</h2>
            <p class="text-gray-600">
              {{ $t('privacy.contact.description') }}
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-12 text-center">{{ $t('about.title') }}</h1>
    
    <section class="mb-16">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-4">{{ $t('about.mission.title') }}</h2>
          <p class="text-gray-600 mb-6">
            {{ $t('about.mission.description') }}
          </p>
        </div>
      </div>
    </section>
    
    <section class="mb-16">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
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
      </div>
    </section>
    
    <section>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-4">{{ $t('about.contact.title') }}</h2>
          <p class="text-gray-600 mb-6">
            {{ $t('about.contact.description') }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@standagainstdeportation.org" class="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition text-center">
              {{ $t('about.contact.email') }}
            </a>
            <a href="tel:+15551234567" class="inline-block px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition text-center">
              {{ $t('about.contact.phone') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

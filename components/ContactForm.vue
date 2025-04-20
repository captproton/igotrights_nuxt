<template>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="mailto:info@standagainstdeportation.org" class="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition text-center">
      {{ $t('about.contact.email') }}
    </a>
    <a href="tel:+15551234567" class="inline-block px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition text-center">
      {{ $t('about.contact.phone') }}
    </a>
  </div>
</template>

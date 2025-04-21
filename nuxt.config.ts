// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  target: 'static',

  modules: [
    '@nuxtjs/tailwindcss',
    // Removed i18n module as it's not working and we're using static text instead
  ],

  css: [
    '@/assets/css/transitions.css'
  ],

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      title: 'Stand Against Deportation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Opposing U.S. deportation policies that violate due process rights' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Removed i18n configuration as we're using static text instead

  nitro: {
    preset: 'netlify'
  },

  compatibilityDate: '2025-04-20'
})
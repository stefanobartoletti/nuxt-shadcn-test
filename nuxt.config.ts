// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

})

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/icon'],
  css: ['@/assets/css/tailwind.css'],
    nitro: {
    compatibilityDate: '2025-08-02'
  },

  i18n: {
    strategy: 'prefix',
    locales: [
      { code: 'en', name: 'English', dir: 'ltr', file: 'en-US.json' },
      { code: 'ar', name: 'العربية', dir: 'rtl',file: 'ar.json' }
    ],
    langDir: 'locales',
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts', // أو .js لو استخدمت JavaScript
  }
})
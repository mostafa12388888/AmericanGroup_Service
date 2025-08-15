export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['@/assets/css/tailwind.css'],
    nitro: {
    compatibilityDate: '2025-08-02'
  },

  i18n: {
    strategy: 'prefix',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'ar', name: 'العربية', dir: 'rtl' }
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts', // أو .js لو استخدمت JavaScript
  }
})

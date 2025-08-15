<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCookie } from '#app'

const { locale } = useI18n()
const langCookie = useCookie('site_language')

const setPageDirection = (lang) => {
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.setAttribute('dir', dir)
  document.documentElement.setAttribute('lang', lang)
}

onMounted(() => {
  if (langCookie.value && langCookie.value !== locale.value) {
    locale.value = langCookie.value
  }
  setPageDirection(locale.value)
})

watch(locale, (newLocale) => {
  setPageDirection(newLocale)
  langCookie.value = newLocale
})
</script>

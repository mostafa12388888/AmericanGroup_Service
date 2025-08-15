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

// دالة لضبط اتجاه الصفحة ولغة الـ <html>
const setPageDirection = (lang) => {
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.setAttribute('dir', dir)
  document.documentElement.setAttribute('lang', lang)
}

onMounted(() => {
  if (process.client) {
    // تحميل اللغة من الكوكيز إذا موجودة
    if (langCookie.value && langCookie.value !== locale.value) {
      locale.value = langCookie.value
    }
    setPageDirection(locale.value)
  }
})

// مراقبة أي تغيير في اللغة وتحديث الاتجاه والكوكيز
watch(locale, (newLocale) => {
  if (process.client) {
    setPageDirection(newLocale)
    langCookie.value = newLocale
  }
})
</script>

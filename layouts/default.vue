<!-- File: components/FrontendLayout.vue -->
<template>
  <div class="min-h-screen flex flex-col relative" :class="{ 'rtl': $i18n.locale === 'ar' }">
    <!-- الهيدر -->
    <FrontendLayoutHeader
      @toggleSidebar="sidebarOpen = !sidebarOpen"
    />

    <!-- السايدبار -->
    <FrontendLayoutSidebar
      :isOpen="sidebarOpen"
      @close="sidebarOpen = false"
    />

    <!-- المحتوى -->
    <main 
      id="main-content" 
      class="flex-1 bg-gray-100 dark:bg-gray-900 p-4 mt-16 lg:mt-0 transition-colors"
    >
      <slot />
    </main>

    <!-- قسم التواصل -->
    <FrontendContactSectionCall />
    
    <!-- الفوتر -->
    <FrontendLayoutFooter />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const sidebarOpen = ref(false)

// Set document direction based on language
const setDirection = (lang) => {
  if (process.client) {
    const dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
    document.documentElement.setAttribute('lang', lang)
  }
}

// Watch for language changes
watch(locale, (newLocale) => {
  setDirection(newLocale)
})

// Set initial direction
onMounted(() => {
  setDirection(locale.value)
})
</script>

<style>
/* RTL Support */
.rtl {
  direction: rtl;
}

.rtl .space-x-2 > :not([hidden]) ~ :not([hidden]) {
  margin-right: 0.5rem;
  margin-left: 0;
}

.rtl .space-x-4 > :not([hidden]) ~ :not([hidden]) {
  margin-right: 1rem;
  margin-left: 0;
}

.rtl .space-x-6 > :not([hidden]) ~ :not([hidden]) {
  margin-right: 1.5rem;
  margin-left: 0;
}

.rtl .space-x-8 > :not([hidden]) ~ :not([hidden]) {
  margin-right: 2rem;
  margin-left: 0;
}

/* Font families for different languages */
html[lang="ar"] {
  font-family: 'Cairo', 'Tajawal', sans-serif;
}

html[lang="en"] {
  font-family: 'Inter', 'Roboto', sans-serif;
}
</style>
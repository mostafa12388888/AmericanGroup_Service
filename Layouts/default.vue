<template>
  <div class="min-h-screen flex flex-col relative" :class="{ 'rtl': $i18n.locale === 'ar' }">
    <FrontendLayoutHeader @toggleSidebar="sidebarOpen = !sidebarOpen" />
    <FrontendLayoutSidebar :isOpen="sidebarOpen" @close="sidebarOpen = false" />
    <main id="main-content" class="flex-1 bg-gray-100 dark:bg-gray-900 p-4 mt-16 lg:mt-0 transition-colors">
      <slot />
    </main>
    <FrontendContactSectionCall />
    <FrontendLayoutFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const sidebarOpen = ref(false)
</script>

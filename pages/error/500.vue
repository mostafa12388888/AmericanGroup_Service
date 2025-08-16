<!-- pages/error/500.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center px-4" 
       :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <div class="max-w-lg w-full text-center">
      <!-- شعار الشركة -->
      <div class="mb-8">
        <div class="w-24 h-24 mx-auto bg-red-600 rounded-full flex items-center justify-center">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 class="mt-4 text-2xl font-bold text-gray-900">{{ $t('company.name') }}</h1>
        <p class="text-gray-600">{{ $t('company.description') }}</p>
      </div>

      <!-- رسالة الخطأ -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div class="text-6xl font-bold text-red-600 mb-4">500</div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('errors.500.title') }}</h2>
        <p class="text-gray-600 mb-6">{{ $t('errors.500.message') }}</p>
        
        <!-- مؤشر التحميل -->
        <div class="flex justify-center mb-6">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            @click="refresh"
            class="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700"
          >
            {{ $t('errors.500.refresh') }}
          </button>
          <NuxtLink 
            to="/" 
            class="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300"
          >
            {{ $t('errors.500.goHome') }}
          </NuxtLink>
        </div>
      </div>

      <!-- معلومات الاتصال -->
      <div class="text-sm text-gray-600">
        <p>{{ $t('errors.needHelp') }}</p>
        <div class="flex justify-center gap-4 mt-2">
          <a href="tel:+20123456789" class="text-red-600 hover:underline">{{ $t('contact.phone') }}</a>
          <a href="mailto:info@amerikia-group.com" class="text-red-600 hover:underline">{{ $t('contact.email') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: computed(() => `500 - ${useNuxtApp().$i18n.t('company.name')}`),
  description: computed(() => useNuxtApp().$i18n.t('errors.500.message'))
})

const refresh = () => {
  window.location.reload()
}
</script>
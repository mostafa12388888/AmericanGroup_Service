
<!-- pages/error/404.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4" 
       :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <div class="max-w-lg w-full text-center">
      <!-- شعار الشركة -->
      <div class="mb-8">
        <div class="w-24 h-24 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 class="mt-4 text-2xl font-bold text-gray-900">{{ $t('company.name') }}</h1>
        <p class="text-gray-600">{{ $t('company.description') }}</p>
      </div>

      <!-- رسالة الخطأ -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div class="text-6xl font-bold text-blue-600 mb-4">404</div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('errors.404.title') }}</h2>
        <p class="text-gray-600 mb-6">{{ $t('errors.404.message') }}</p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/" 
            class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            {{ $t('errors.404.goHome') }}
          </NuxtLink>
          <button 
            @click="$router.go(-1)"
            class="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300"
          >
            {{ $t('errors.404.goBack') }}
          </button>
        </div>
      </div>

      <!-- معلومات الاتصال -->
      <div class="text-sm text-gray-600">
        <p>{{ $t('errors.needHelp') }}</p>
        <div class="flex justify-center gap-4 mt-2">
          <a href="tel:+20123456789" class="text-blue-600 hover:underline">{{ $t('contact.phone') }}</a>
          <a href="mailto:info@amerikia-group.com" class="text-blue-600 hover:underline">{{ $t('contact.email') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: computed(() => `404 - ${useNuxtApp().$i18n.t('company.name')}`),
  description: computed(() => useNuxtApp().$i18n.t('errors.404.message'))
})
</script>

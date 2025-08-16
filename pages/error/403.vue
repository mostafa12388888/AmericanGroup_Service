<template>
  <div class="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center px-4" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <div class="max-w-lg w-full text-center">
      <!-- Company Logo -->
      <div class="mb-8">
        <div class="w-24 h-24 mx-auto bg-red-600 rounded-full flex items-center justify-center">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m0 0v2m0-2h2m-2 0H10m9-7a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 class="mt-4 text-2xl font-bold text-gray-900">{{ $t('company.name') }}</h1>
        <p class="text-gray-600">{{ $t('company.description') }}</p>
      </div>

      <!-- Error Message -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div class="text-6xl font-bold text-red-600 mb-4">403</div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('errors.403.title') }}</h2>
        <p class="text-gray-600 mb-6">{{ $t('errors.403.message') }}</p>
        
        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/" 
            class="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
          >
            {{ $t('errors.403.goHome') }}
          </NuxtLink>
          <NuxtLink 
            to="/login" 
            class="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
          >
            {{ $t('errors.403.login') }}
          </NuxtLink>
        </div>
      </div>

      <!-- Contact Info -->
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
definePageMeta({
  layout: 'error'
})

useSeoMeta({
  title: computed(() => `403 - ${useNuxtApp().$i18n.t('company.name')}`),
  description: computed(() => useNuxtApp().$i18n.t('errors.403.message'))
})
</script>
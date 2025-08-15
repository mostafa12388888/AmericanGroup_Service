<!-- components/FAQ/FaqHeader.vue -->
<template>
  <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="flex items-center justify-center mb-4">
        <svg class="w-12 h-12 text-yellow-400 ml-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
        </svg>
        <h1 class="text-4xl font-bold">{{ companyName }}</h1>
      </div>
      <p class="text-xl text-blue-100">{{ description }}</p>
      <p class="text-lg text-blue-200 mt-2">{{ subDescription }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  companyName: {
    type: String,
    default: 'الأمريكية جروب'
  },
  description: {
    type: String,
    default: 'متخصصون في صيانة وإصلاح الأدوات الكهربائية المنزلية'
  },
  subDescription: {
    type: String,
    default: 'خدمة موثوقة وسريعة في جميع أنحاء مصر'
  }
})
</script>

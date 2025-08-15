<!-- components/ContactInfoCard.vue -->
<template>
  <div class="bg-white rounded-lg p-8 text-center shadow-sm">
    <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <component :is="iconComponent" class="w-6 h-6 text-gray-600" />
    </div>
    <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ title }}</h3>
    <p class="text-gray-600 mb-6">{{ subtitle }}</p>
    <button 
      @click="$emit('click')"
      class="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
    >
      {{ buttonText }}
      <ArrowRightIcon class="w-4 h-4 ml-2" />
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['click'])

// Email Icon Component
const EmailIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.45a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  `
}

// Location Icon Component
const LocationIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  `
}

// Phone Icon Component
const PhoneIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  `
}

// Arrow Right Icon Component
const ArrowRightIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  `
}

const iconComponent = computed(() => {
  const icons = {
    email: EmailIcon,
    location: LocationIcon,
    phone: PhoneIcon
  }
  return icons[props.icon] || EmailIcon
})
</script>

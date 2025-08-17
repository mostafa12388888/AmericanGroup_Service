<template>
  <div class="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 p-6 rounded-lg flex flex-col justify-between h-full text-center shadow-lg">
    <h3 class="font-bold text-xl mb-4">{{ title }}</h3>
    <p class="text-sm leading-relaxed mb-6" v-html="description"></p>
    <NuxtLink 
      v-if="buttonText" 
      :to="buttonLink" 
      class="inline-block bg-green-400 text-white hover:bg-green-500 font-semibold px-4 py-2 rounded-full transition shadow-md"
    >
      {{ buttonText }}
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  buttonText: String,
  buttonLink: {
    type: String,
    default: '#'
  }
})
</script>

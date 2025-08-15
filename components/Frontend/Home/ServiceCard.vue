<template>
  <div class="bg-orange-500 text-white p-6 rounded-lg flex flex-col justify-between h-full text-center">
    <h3 class="font-bold text-xl mb-4">{{ title }}</h3>
    <p class="text-sm leading-relaxed mb-6" v-html="description"></p>
    <NuxtLink v-if="buttonText" :to="buttonLink" class="inline-block bg-white text-orange-600 hover:text-orange-700 font-semibold px-4 py-2 rounded transition">
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

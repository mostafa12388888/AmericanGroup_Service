// components/TeamHeader.vue
<template>
  <div class="text-center mb-16">
    <p class="text-amber-500 font-medium text-sm uppercase tracking-wider mb-4">
      {{ subtitle }}
    </p>
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      <span v-html="title"></span>
    </h1>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Our Experience Work<br>Experts'
  },
  subtitle: {
    type: String,
    default: 'OUR TEAM'
  }
})
</script>


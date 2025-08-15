<!-- components/ContactInfoCards.vue -->
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
    <FrontendContactInfoCard
      v-for="item in contactInfo"
      :key="item.id"
      :icon="item.icon"
      :title="item.title"
      :subtitle="item.subtitle"
      :button-text="item.buttonText"
      @click="item.action"
    />
  </div>
</template>

<script setup>
const contactInfo = [
  {
    id: 1,
    icon: 'email',
    title: 'Support email',
    subtitle: 'help@gmail.com',
    buttonText: 'Email Us',
    action: () => window.location.href = 'mailto:help@gmail.com'
  },
  {
    id: 2,
    icon: 'location',
    title: 'Location',
    subtitle: '46, West Triangle Gardens, VA 20147',
    buttonText: 'Visit Us',
    action: () => window.open('https://maps.google.com/?q=46, West Triangle Gardens, VA 20147', '_blank')
  },
  {
    id: 3,
    icon: 'phone',
    title: 'Phone number',
    subtitle: '(+91) 119 123456',
    buttonText: 'Call Us',
    action: () => window.location.href = 'tel:+91119123456'
  }
]
</script>
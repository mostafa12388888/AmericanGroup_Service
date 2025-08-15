<template>
  <footer class="bg-gray-900 text-white py-6">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p>© 2025 الأمريكية جروب - جميع الحقوق محفوظة</p>
      <div class="flex gap-4">
        <a
          v-for="social in socials"
          :key="social.icon"
          :href="social.link"
          target="_blank"
          class="text-white hover:text-blue-400 transition"
        >
          <i :class="[social.icon, 'text-2xl']"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  socials: Array
})
</script>

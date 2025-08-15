<template>
  <li class="hover:bg-gray-100">
    <NuxtLink
      :to="to"
      class="h-16 px-6 flex justify-center items-center w-full focus:text-orange-500"
      :aria-label="label"
    >
      <slot />
    </NuxtLink>
  </li>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
  label: { type: String, required: true }
})
</script>

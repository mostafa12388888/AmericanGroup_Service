<template>
  <header class="flex items-center justify-between p-4 border-b border-orange-900 bg-orange-800 text-white">
    <NuxtLink to="/" class="flex items-center space-x-2 text-xl font-bold">
      <img src="https://via.placeholder.com/40" alt="Logo" class="w-10 h-10 rounded-full" />
      <span class="hidden md:inline">kissTheme</span>
    </NuxtLink>
    <button
      @click="$emit('toggle')"
      class="md:hidden text-black p-2 border border-white rounded hover:bg-orange-700 focus:outline-none"
    >
    <Icon name="uil:bars" class="text-black text-xl" />

    </button>
  </header>
</template>

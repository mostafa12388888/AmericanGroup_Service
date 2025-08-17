// layouts/error.vue
<template>
  <div class="error-layout">
    <slot />
  </div>
</template>

<style scoped>
.error-layout {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
</style>

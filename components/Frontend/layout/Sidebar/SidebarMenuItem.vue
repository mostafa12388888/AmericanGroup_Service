<!-- File: components/FrontendLayoutSidebarMenuItem.vue -->
<template>
  <li>
    <div v-if="hasChildren">
      <button
        @click="toggle"
        class="w-full flex justify-between items-center px-4 py-2 hover:bg-orange-700 focus:outline-none"
        :aria-expanded="isOpen.toString()"
        :aria-controls="id"
      >
        <span class="flex items-center">
          <Icon :name="icon" class="mr-2 w-4 text-sm" /> {{ label }}
        </span>
        <Icon
          :name="isOpen ? 'mdi:chevron-down' : 'mdi:chevron-right'"
          class="text-xs"
        />
      </button>

      <ul v-if="isOpen" :id="id" class="ml-4 border-l border-orange-700 pl-2">
        <slot />
      </ul>
    </div>

    <NuxtLink
      v-else
      :to="to"
      class="block px-4 py-2 hover:bg-orange-700 focus:outline-none"
      :aria-label="label"
    >
      <i :class="icon" class="mr-2 w-4 text-sm"></i> {{ label }}
    </NuxtLink>
  </li>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const props = defineProps({
  label: String,
  icon: String,
  to: String,
  hasChildren: { type: Boolean, default: false },
  id: String,
});

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

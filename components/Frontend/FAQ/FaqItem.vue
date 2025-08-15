
<!-- components/FAQ/FaqItem.vue -->
<template>
  <div
    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
    role="listitem"
  >
    <details class="group" @toggle="onToggle">
      <summary
        class="p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl list-none"
      >
        <div class="flex items-center justify-between">
          <span class="text-lg font-semibold text-gray-800 flex-1 ml-4">
            {{ question }}
          </span>
          <div class="bg-blue-100 rounded-full p-2 flex-shrink-0">
            <svg
              class="w-5 h-5 text-blue-600 transition-transform duration-300"
              :class="{ 'rotate-180': isOpen }"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </summary>
      <div class="px-6 pb-6">
        <div class="bg-blue-50 rounded-lg p-4 border-r-4 border-blue-500">
          <p class="text-gray-700 leading-relaxed text-lg">
            {{ answer }}
          </p>
        </div>
      </div>
    </details>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['toggle'])

const isOpen = ref(false)

const onToggle = (event) => {
  isOpen.value = event.target.open
  emit('toggle', event.target.open)
}
</script>

<style scoped>
details > summary {
  list-style: none;
}

details > summary::-webkit-details-marker {
  display: none;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>

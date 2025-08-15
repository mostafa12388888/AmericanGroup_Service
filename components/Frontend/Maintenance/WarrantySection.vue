<template>
  <div class="mt-16 max-w-4xl mx-auto">
    <h3 class="text-3xl font-bold text-center mb-12">كيف يعمل الضمان؟</h3>
    <div class="grid md:grid-cols-4 gap-8">
      <div 
        v-for="(step, index) in processSteps" 
        :key="step.id"
        class="text-center"
      >
        <div class="relative">
          <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center font-bold text-2xl text-white">
            {{ index + 1 }}
          </div>
          <div v-if="index < processSteps.length - 1" class="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        </div>
        <h4 class="text-lg font-bold mb-2">{{ step.title }}</h4>
        <p class="text-blue-200 text-sm">{{ step.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  processSteps: {
    type: Array,
    required: true
  }
})
</script>
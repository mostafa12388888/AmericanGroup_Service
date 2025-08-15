
<!-- components/FAQ/FaqList.vue -->
<template>
  <div class="text-center mb-12">
    <h2 id="faq-heading" class="text-4xl font-bold text-gray-900 mb-4">
      {{ title }}
    </h2>
    <div class="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
      {{ subtitle }}
    </p>
  </div>

  <div class="grid gap-4 mb-16" role="list" aria-label="الأسئلة المتكررة">
    <FrontendFaqItem
      v-for="(item, index) in items"
      :key="index"
      :question="item.question"
      :answer="item.answer"
      @toggle="onItemToggle(index, $event)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
    validator: (items) => {
      return items.every(item => 
        typeof item.question === 'string' && 
        typeof item.answer === 'string'
      )
    }
  },
  title: {
    type: String,
    default: 'الأسئلة الشائعة'
  },
  subtitle: {
    type: String,
    default: 'نجيب على أكثر الأسئلة التي نتلقاها من عملائنا الكرام حول خدماتنا'
  }
})

const emit = defineEmits(['item-toggle'])

const onItemToggle = (index, isOpen) => {
  emit('item-toggle', { index, isOpen })
}
</script>

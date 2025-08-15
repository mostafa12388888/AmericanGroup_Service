
<!-- components/FAQ/ContactForm.vue -->
<template>
  <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
    <div class="text-center mb-8">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4">
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
      </div>
      <h3 class="text-3xl font-bold text-gray-900 mb-2">{{ formTitle }}</h3>
      <p class="text-gray-600 text-lg">{{ formSubtitle }}</p>
    </div>

    <form @submit.prevent="submitForm" class="space-y-6">
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
            الاسم الكامل *
          </label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="أدخل اسمك الكامل"
          />
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
            رقم الهاتف *
          </label>
          <input
            id="phone"
            v-model="formData.phone"
            type="tel"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="01xxxxxxxxx"
          />
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          البريد الإلكتروني
        </label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="example@email.com"
        />
      </div>

      <div>
        <label for="device" class="block text-sm font-medium text-gray-700 mb-2">
          نوع الجهاز
        </label>
        <select
          id="device"
          v-model="formData.device"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        >
          <option value="">اختر نوع الجهاز</option>
          <option
            v-for="device in deviceOptions"
            :key="device.value"
            :value="device.value"
          >
            {{ device.label }}
          </option>
        </select>
      </div>

      <div>
        <label for="question" class="block text-sm font-medium text-gray-700 mb-2">
          سؤالك أو استفسارك *
        </label>
        <textarea
          id="question"
          v-model="formData.question"
          required
          rows="5"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
          placeholder="اكتب سؤالك أو استفسارك هنا..."
        ></textarea>
      </div>

      <div class="flex items-center justify-center pt-4">
        <button
          type="submit"
          :disabled="isSubmitting"
          class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-12 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <span v-if="!isSubmitting" class="flex items-center">
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
            </svg>
            {{ submitButtonText }}
          </span>
          <span v-else class="flex items-center">
            <svg class="animate-spin w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25"></circle>
              <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" class="opacity-75"></path>
            </svg>
            جاري الإرسال...
          </span>
        </button>
      </div>
    </form>

    <!-- Success Message -->
    <div
      v-if="showSuccess"
      class="mt-6 bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg"
    >
      <div class="flex items-center">
        <svg class="w-6 h-6 text-green-400 ml-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <p class="text-green-700 font-medium">
          {{ successMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  formTitle: {
    type: String,
    default: 'لم تجد إجابة لسؤالك؟'
  },
  formSubtitle: {
    type: String,
    default: 'أرسل لنا سؤالك وسنقوم بالرد عليك في أقرب وقت ممكن'
  },
  submitButtonText: {
    type: String,
    default: 'إرسال السؤال'
  },
  successMessage: {
    type: String,
    default: 'تم إرسال سؤالك بنجاح! سنقوم بالتواصل معك قريباً.'
  },
  deviceOptions: {
    type: Array,
    default: () => [
      { value: 'oven', label: 'فرن كهربائي' },
      { value: 'washing-machine', label: 'غسالة' },
      { value: 'refrigerator', label: 'ثلاجة' },
      { value: 'dishwasher', label: 'غسالة أطباق' },
      { value: 'microwave', label: 'ميكروويف' },
      { value: 'other', label: 'أخرى' }
    ]
  }
})

const emit = defineEmits(['submit'])

const isSubmitting = ref(false)
const showSuccess = ref(false)

const formData = reactive({
  name: '',
  phone: '',
  email: '',
  device: '',
  question: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  showSuccess.value = false
  
  try {
    // Emit to parent component
    await emit('submit', { ...formData })
    
    // Show success message
    showSuccess.value = true
    
    // Reset form
    Object.keys(formData).forEach(key => {
      formData[key] = ''
    })
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

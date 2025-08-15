
<!-- components/FAQ/ContactInfo.vue -->
<template>
  <div class="mt-16 grid md:grid-cols-3 gap-8 text-center">
    <div
      v-for="item in contactItems"
      :key="item.type"
      class="bg-white rounded-xl shadow-md p-6 border border-gray-100"
    >
      <div 
        class="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
        :class="`bg-${item.color}-100`"
      >
        <component 
          :is="item.icon" 
          class="w-6 h-6"
          :class="`text-${item.color}-600`"
        />
      </div>
      <h4 class="font-semibold text-gray-900 mb-2">{{ item.title }}</h4>
      <p class="text-gray-600">{{ item.value }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const props = defineProps({
  phone: {
    type: String,
    default: '+20 114 684 8300'
  },
  email: {
    type: String,
    default: 'info@alamerikya.com'
  },
  workingHours: {
    type: String,
    default: '24/7 طوال أيام الأسبوع'
  }
})

// Icon components
const PhoneIcon = defineComponent({
  setup() {
    return () => h('svg', {
      class: 'w-6 h-6',
      fill: 'currentColor',
      viewBox: '0 0 20 20'
    }, [
      h('path', {
        d: 'M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'
      })
    ])
  }
})

const EmailIcon = defineComponent({
  setup() {
    return () => h('svg', {
      class: 'w-6 h-6',
      fill: 'currentColor',
      viewBox: '0 0 20 20'
    }, [
      h('path', {
        'fill-rule': 'evenodd',
        d: 'M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z',
        'clip-rule': 'evenodd'
      })
    ])
  }
})

const ClockIcon = defineComponent({
  setup() {
    return () => h('svg', {
      class: 'w-6 h-6',
      fill: 'currentColor',
      viewBox: '0 0 20 20'
    }, [
      h('path', {
        'fill-rule': 'evenodd',
        d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z',
        'clip-rule': 'evenodd'
      })
    ])
  }
})

const contactItems = computed(() => [
  {
    type: 'phone',
    icon: PhoneIcon,
    color: 'green',
    title: 'اتصل بنا',
    value: props.phone
  },
  {
    type: 'email',
    icon: EmailIcon,
    color: 'blue',
    title: 'البريد الإلكتروني',
    value: props.email
  },
  {
    type: 'hours',
    icon: ClockIcon,
    color: 'orange',
    title: 'ساعات العمل',
    value: props.workingHours
  }
])
</script>

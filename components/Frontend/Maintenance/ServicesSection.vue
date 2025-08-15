<template>
  <section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">خدماتنا المتميزة</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          نقدم مجموعة شاملة من خدمات الصيانة والإصلاح لجميع الأجهزة الكهربائية
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:-translate-y-2 service-card animate-fade-in-up"
          :class="[service.hoverColor, `animation-delay-${(index + 1) * 100}`]"
        >
          <div class="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
               :class="service.bgColor">
            <Icon :name="service.icon" class="w-8 h-8" :class="service.iconColor" />
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">{{ service.title }}</h3>
          <p class="text-gray-600 text-center leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    title: 'تصليح الثلاجات',
    description: 'صيانة شاملة لجميع أنواع الثلاجات مع قطع غيار أصلية وضمان 12 شهر',
    icon: 'heroicons:cube',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    hoverColor: 'hover:border-blue-200'
  },
  {
    id: 2,
    title: 'تصليح الغسالات',
    description: 'إصلاح فوري لجميع أعطال الغسالات الفوق أوتوماتيك والعادية',
    icon: 'heroicons:cog-6-tooth',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    hoverColor: 'hover:border-green-200'
  },
  {
    id: 3,
    title: 'صيانة التكييفات',
    description: 'خدمة صيانة دورية وإصلاح جميع أنواع التكييفات مع تنظيف شامل',
    icon: 'heroicons:sun',
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    hoverColor: 'hover:border-yellow-200'
  },
  {
    id: 4,
    title: 'إصلاح الميكروويف',
    description: 'تشخيص دقيق وإصلاح سريع لجميع أعطال الميكروويف',
    icon: 'heroicons:radio',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    hoverColor: 'hover:border-purple-200'
  },
  {
    id: 5,
    title: 'صيانة الخلاطات',
    description: 'إصلاح محترف للخلاطات والعصارات مع ضمان الجودة',
    icon: 'heroicons:beaker',
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-600',
    hoverColor: 'hover:border-pink-200'
  },
  {
    id: 6,
    title: 'خدمة منزلية',
    description: 'زيارة منزلية مجانية للكشف والصيانة في جميع المحافظات',
    icon: 'heroicons:home',
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    hoverColor: 'hover:border-indigo-200'
  }
]
</script>
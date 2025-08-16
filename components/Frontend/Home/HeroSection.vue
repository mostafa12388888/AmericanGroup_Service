<template>
  <div class="min-h-screen bg-gray-100">
    <!-- السلايدر الرئيسي -->
    <div class="relative w-full h-screen overflow-hidden">
      <!-- الشرائح -->
      <div 
        class="flex transition-transform duration-500 ease-in-out h-full"
        :style="{ transform: `translateX(${-currentSlide * 100}%)` }"
      >
        <!-- الشريحة الأولى -->
        <div class="relative w-full h-full flex-shrink-0">
          <div class="absolute inset-0 bg-black bg-opacity-60"></div>
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop" 
            alt="دعم فني"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <h1 class="text-4xl md:text-6xl font-bold mb-4">دعم فني 24 ساعة</h1>
              <p class="text-lg md:text-xl mb-8">اتصل بنا في أي وقت وسنوصلك بأقرب فني معتمد</p>
              <NuxtLink to="/contact">
                <button 
                  class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
                >
                  اطلب الصيانة الآن
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- الشريحة الثانية -->
        <div class="relative w-full h-full flex-shrink-0">
          <div class="absolute inset-0 bg-black bg-opacity-60"></div>
          <img 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop" 
            alt="صيانة أجهزة"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <h1 class="text-4xl md:text-6xl font-bold mb-4">
                صيانة <span class="text-orange-500">وايت وستنجهاوس</span> المعتمدة في مصر
              </h1>
              <p class="text-lg md:text-xl mb-8">خدمة منزلية - فنيين معتمدين - قطع غيار أصلية</p>
              <NuxtLink to="/contact">
                <button 
                  class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
                >
                  اطلب الصيانة الآن
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- الشريحة الثالثة -->
        <div class="relative w-full h-full flex-shrink-0">
          <div class="absolute inset-0 bg-black bg-opacity-60"></div>
          <img 
            src="https://images.unsplash.com/photo-1556909114-30bfe2e79312?w=1920&h=1080&fit=crop" 
            alt="فروع الشركة"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <h1 class="text-4xl md:text-6xl font-bold mb-4">فروعنا في جميع مناطق القاهرة</h1>
              <p class="text-lg md:text-xl mb-8">اطلب صيانة من أي مكان، نصلك في نفس اليوم</p>
              <NuxtLink to="/contact">
                <button 
                  class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
                >
                  اطلب الصيانة الآن
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- أزرار التنقل -->
      <button 
        @click="prevSlide"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button 
        @click="nextSlide"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      <!-- المؤشرات -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button 
          v-for="(slide, index) in 3" 
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-colors duration-300"
          :class="currentSlide === index ? 'bg-orange-500' : 'bg-white bg-opacity-50'"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const slideInterval = ref(null)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 3
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoSlide = () => {
  slideInterval.value = setInterval(nextSlide, 5000)
}

const stopAutoSlide = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
  }
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

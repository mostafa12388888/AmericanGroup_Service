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
                  class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 mb-6"
                >
                  اطلب الصيانة الآن
                </button>
              </NuxtLink>
              
              <!-- أيقونات الاتصال والواتس اب -->
              <div class="flex justify-center items-center gap-6 mt-4">
                <!-- أيقونة الاتصال -->
                <a href="tel:+201234567890" class="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span class="font-semibold">اتصل الآن</span>
                </a>
                
                <!-- أيقونة الواتس اب -->
                <a href="https://wa.me/+201234567890" target="_blank" class="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.119"/>
                  </svg>
                  <span class="font-semibold">واتس اب</span>
                </a>
              </div>
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
                  class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 mb-6"
                >
                  اطلب الصيانة الآن
                </button>
              </NuxtLink>
              
              <!-- أيقونات الاتصال والواتس اب -->
              <div class="flex justify-center items-center gap-6 mt-4">
                <!-- أيقونة الاتصال -->
                <a href="tel:+201234567890" class="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span class="font-semibold">اتصل الآن</span>
                </a>
                
                <!-- أيقونة الواتس اب -->
                <a href="https://wa.me/+201234567890" target="_blank" class="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.119"/>
                  </svg>
                  <span class="font-semibold">واتس اب</span>
                </a>
              </div>
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
                  class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 mb-6"
                >
                  اطلب الصيانة الآن
                </button>
              </NuxtLink>
              
              <!-- أيقونات الاتصال والواتس اب -->
              <div class="flex justify-center items-center gap-6 mt-4">
                <!-- أيقونة الاتصال -->
                <a href="tel:+201234567890" class="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span class="font-semibold">اتصل الآن</span>
                </a>
                
                <!-- أيقونة الواتس اب -->
                <a href="https://wa.me/+201234567890" target="_blank" class="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.119"/>
                  </svg>
                  <span class="font-semibold">واتس اب</span>
                </a>
              </div>
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
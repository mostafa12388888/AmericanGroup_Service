<template>
  <section
    class="max-w-7xl mx-auto px-4 py-8"
    aria-label="شركاؤنا من الوكالات المتميزة"
  >
    <!-- عنوان السلايدر -->
    <h2 class="text-3xl font-bold text-black mb-8 text-center">
      شركاؤنا من الوكالات المتميزة
    </h2>

    <!-- أزرار التحكم -->
    <div class="flex justify-end gap-2 mb-4" role="group" aria-label="تحكم السلايدر">
      <button
        @click="scrollPrev"
        aria-label="السابق"
        class="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
      >
        <Icon name="heroicons:arrow-right" class="w-5 h-5" />
      </button>
      <button
        @click="scrollNext"
        aria-label="التالي"
        class="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
      >
        <Icon name="heroicons:arrow-left" class="w-5 h-5" />
      </button>
    </div>

    <!-- السلايدر -->
    <div
      ref="sliderRef"
      class="flex gap-6 overflow-hidden focus:outline-none"
      role="listbox"
      tabindex="0"
      @keydown.left.prevent="scrollPrev"
      @keydown.right.prevent="scrollNext"
      @mouseenter="pause = true"
      @mouseleave="pause = false"
    >
      <!-- نكرر العناصر مرتين لعمل لوب دائري -->
      <template v-for="n in 2" :key="n">
        <article
          v-for="agency in agencies"
          :key="agency.id + '-' + n"
          role="option"
          class="flex-none w-full sm:w-[calc(100%/3-1rem)] bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 card-hover cursor-pointer flex flex-col items-center justify-center text-center focus:outline-none"
        >
          <!-- رابط الوكالة -->
          <NuxtLink
            :to="`/agencies/${agency.slug}`"
            :aria-label="`عرض تفاصيل ${agency.name}`"
            class="flex flex-col items-center"
          >
            <!-- صورة اللوجو -->
            <div
              class="w-28 h-28 flex items-center justify-center rounded-full bg-white/20 border-4 border-white/30 shadow-lg overflow-hidden mb-4"
            >
              <img
                :src="agency.logo"
                :alt="`شعار ${agency.name}`"
                class="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            <!-- اسم الوكالة -->
            <h3 class="text-lg font-semibold text-black dark:text-white">
              {{ agency.name }}
            </h3>
          </NuxtLink>
        </article>
      </template>
    </div>
  </section>
</template>

<script setup>
const sliderRef = ref(null)
const pause = ref(false)

// بيانات الوكالات
const agencies = [
  {
    id: 1,
    slug: 'digital-creativity-agency',
    name: 'وكالة الإبداع الرقمي',
    logo: 'https://images.unsplash.com/photo-1556909114-30bfe2e79312?w=1920&h=1080&fit=crop'
  },
  {
    id: 2,
    slug: 'modern-design-studio',
    name: 'استوديو التصميم الحديث',
    logo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop'
  },
  {
    id: 3,
    slug: 'marketing-experts',
    name: 'خبراء التسويق',
    logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop'
  },
  {
    id: 4,
    slug: 'tech-solutions',
    name: 'حلول التقنية',
    logo: 'https://images.unsplash.com/photo-1556909114-30bfe2e79312?w=1920&h=1080&fit=crop'
  },
  {
    id: 4,
    slug: 'tech-solutions',
    name: 'حلول التقنية',
    logo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop'
  },
  {
    id: 4,
    slug: 'tech-solutions',
    name: 'حلول التقنية',
    logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop'
  }
]

const speed = 1 // سرعة التحريك
let scrollInterval = null

// التحريك التلقائي
onMounted(() => {
  startAutoScroll()
})

onBeforeUnmount(() => {
  stopAutoScroll()
})

watch(pause, (val) => {
  if (val) {
    stopAutoScroll()
  } else {
    startAutoScroll()
  }
})

function startAutoScroll() {
  stopAutoScroll()
  scrollInterval = setInterval(() => {
    if (sliderRef.value) {
      sliderRef.value.scrollLeft += speed
      // إذا وصل للنهاية يرجع للبداية
      if (sliderRef.value.scrollLeft >= sliderRef.value.scrollWidth / 2) {
        sliderRef.value.scrollLeft = 0
      }
    }
  }, 16) // حوالي 60FPS
}

function stopAutoScroll() {
  if (scrollInterval) {
    clearInterval(scrollInterval)
    scrollInterval = null
  }
}

function scrollNext() {
  if (sliderRef.value) {
    sliderRef.value.scrollLeft += sliderRef.value.clientWidth
  }
}

function scrollPrev() {
  if (sliderRef.value) {
    sliderRef.value.scrollLeft -= sliderRef.value.clientWidth
  }
}
</script>

<style scoped>
.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
}
</style>

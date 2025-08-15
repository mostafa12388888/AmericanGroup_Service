<template>
  <div class="min-h-screen bg-gray-50">

    <!-- Hero Section with Slider and Video -->
    <section id="home" class="pt-20 min-h-screen">
      <div class="flex flex-col lg:flex-row h-full">
        <!-- Slider Section -->
        <div class="w-full lg:w-3/5 relative overflow-hidden">
          <div class="h-96 lg:h-screen relative">
            <!-- Slides -->
            <div
              v-for="(slide, index) in slides"
              :key="index"
              :class="[
                'absolute inset-0 transition-opacity duration-1000',
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0',
              ]"
            >
              <div
                :class="[
                  'relative h-full flex items-center justify-center text-white',
                  slide.bgClass,
                ]"
              >
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="relative z-10 text-center px-6 max-w-4xl">
                  <div class="text-6xl md:text-8xl mb-8 animate-bounce-slow">
                    {{ slide.icon }}
                  </div>
                  <h2
                    class="text-4xl md:text-7xl font-bold mb-6 animate-fade-in-up"
                  >
                    {{ slide.title }}
                  </h2>
                  <p
                    class="text-xl md:text-3xl opacity-95 leading-relaxed animate-fade-in-up delay-300"
                  >
                    {{ slide.description }}
                  </p>
                  <div
                    class="mt-8 flex justify-center space-x-4 space-x-reverse animate-fade-in-up delay-500"
                  >
                    <button
                      class="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
                    >
                      اعرف المزيد
                    </button>
                    <button
                      class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all"
                    >
                      منتجاتنا
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation Arrows -->
            <button
              @click="prevSlide"
              class="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              @click="nextSlide"
              class="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>

            <!-- Dots Indicator -->
            <div
              class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 space-x-reverse z-20"
            >
              <button
                v-for="(slide, index) in slides"
                :key="`dot-${index}`"
                @click="goToSlide(index)"
                :class="[
                  'w-3 h-3 rounded-full transition-all duration-300',
                  currentSlide === index
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75',
                ]"
              ></button>
            </div>
          </div>
        </div>

        <!-- Video Section -->
        <div
          class="w-full lg:w-2/5 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-6 lg:p-12"
        >
          <div class="w-full max-w-lg">
            <div class="text-center mb-8">
              <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4">
                فيديو تعريفي
              </h3>
              <p class="text-gray-300 text-lg leading-relaxed">
                اكتشف قصة نجاحنا وكيف أصبحنا الشريك الأول في مجال الأدوات
                الكهربائية
              </p>
            </div>

            <div class="relative group cursor-pointer" @click="playVideo">
              <div
                class="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div
                  class="aspect-video flex items-center justify-center relative overflow-hidden"
                >
                  <!-- Video Placeholder with Animation -->
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 animate-pulse"
                  ></div>

                  <!-- Play Button -->
                  <div
                    class="relative z-10 text-center transform group-hover:scale-110 transition-all duration-300"
                  >
                    <div
                      class="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 mx-auto"
                    >
                      <svg
                        class="w-10 h-10 text-white translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p class="text-white text-lg font-semibold">شاهد الفيديو</p>
                    <p class="text-white/75 text-sm mt-1">
                      مدة الفيديو: 4:32 دقيقة
                    </p>
                  </div>

                  <!-- Floating Elements -->
                  <div
                    class="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-ping"
                  ></div>
                  <div
                    class="absolute bottom-6 left-6 w-1 h-1 bg-white/50 rounded-full animate-pulse"
                  ></div>
                  <div
                    class="absolute top-1/3 left-8 w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"
                  ></div>
                </div>
              </div>

              <!-- Video Stats -->
              <div class="mt-6 grid grid-cols-3 gap-4 text-center">
                <div class="text-white">
                  <div class="text-2xl font-bold">25+</div>
                  <div class="text-sm text-gray-300">سنة خبرة</div>
                </div>
                <div class="text-white">
                  <div class="text-2xl font-bold">50K+</div>
                  <div class="text-sm text-gray-300">عميل سعيد</div>
                </div>
                <div class="text-white">
                  <div class="text-2xl font-bold">100+</div>
                  <div class="text-sm text-gray-300">منتج متميز</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Brands Section -->
    <section
      id="brands"
      class="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >العلامات التجارية</span
            >
            المميزة
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن وكلاء معتمدون لأشهر العلامات التجارية العالمية في مجال الأدوات
            الكهربائية والإلكترونيات
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="brand in brands"
            :key="brand.name"
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl text-center transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden"
          >
            <!-- Background Gradient -->
            <div
              :class="[
                'absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl',
                brand.bgGradient,
              ]"
            ></div>

            <div class="relative z-10">
              <div
                class="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
              >
                {{ brand.icon }}
              </div>

              <h3 class="text-2xl font-bold text-gray-800 mb-4">
                {{ brand.name }}
              </h3>

              <p
                class="text-gray-600 leading-relaxed mb-6 min-h-[120px] flex items-center"
              >
                {{ brand.description }}
              </p>

              <div class="flex flex-wrap gap-2 justify-center mb-6">
                <span
                  v-for="category in brand.categories"
                  :key="category.name"
                  :class="[
                    'px-3 py-1 rounded-full text-sm font-medium',
                    category.class,
                  ]"
                >
                  {{ category.name }}
                </span>
              </div>

              <div class="space-y-2 text-sm text-gray-500">
                <div class="flex justify-between">
                  <span>المنتجات:</span>
                  <span class="font-semibold">{{ brand.products }}+</span>
                </div>
                <div class="flex justify-between">
                  <span>الضمان:</span>
                  <span class="font-semibold text-green-600">{{
                    brand.warranty
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>





  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const route = useRoute()
const agency = route.params.agency
// Page Head Configuration
useHead({
  title: "ElectroTech - التوكيلات المعتمدة للأدوات الكهربائية",
  meta: [
    {
      name: "description",
      content:
        "شركة رائدة في توكيل وتوزيع الأدوات الكهربائية من أشهر العلامات التجارية العالمية مثل LG وSamsung وPanasonic وBosch",
    },
    {
      name: "keywords",
      content:
        "أدوات كهربائية, LG, Samsung, Panasonic, Bosch, توكيلات معتمدة, إلكترونيات, أجهزة منزلية",
    },
    {
      property: "og:title",
      content: "ElectroTech - التوكيلات المعتمدة للأدوات الكهربائية",
    },
    {
      property: "og:description",
      content:
        "شريككم الموثوق في عالم الأدوات الكهربائية والتكنولوجيا المتقدمة",
    },
    { property: "og:type", content: "website" },
  ],
});

// Reactive Data
const currentSlide = ref(0);
const mobileMenuOpen = ref(false);
const isSubmitting = ref(false);

// Form Data
const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

// Slider Data
const slides = ref([
  {
    title: "LG Electronics",
    description: "الريادة في الأجهزة المنزلية والتكنولوجيا المتقدمة",
    icon: "🏠",
    bgClass: "bg-gradient-to-br from-red-600 via-red-500 to-red-700",
  },
  {
    title: "Samsung",
    description: "الابتكار والجودة في عالم الإلكترونيات والتكنولوجيا",
    icon: "📱",
    bgClass: "bg-gradient-to-br from-blue-600 via-blue-500 to-blue-800",
  },
  {
    title: "Panasonic",
    description: "حلول متقدمة للطاقة والتكنولوجيا المستدامة",
    icon: "🔋",
    bgClass: "bg-gradient-to-br from-green-600 via-green-500 to-green-800",
  },
  {
    title: "Bosch",
    description: "الدقة الألمانية في الأدوات والأجهزة المتخصصة",
    icon: "🔧",
    bgClass: "bg-gradient-to-br from-purple-600 via-purple-500 to-purple-800",
  },
]);

// Brands Data
const brands = ref([
  {
    name: "LG Electronics",
    icon: "🏠",
    description:
      "علامة تجارية كورية رائدة في الأجهزة المنزلية والتكنولوجيا المتقدمة، تشمل الثلاجات، الغسالات، أجهزة التلفزيون الذكية، ومكيفات الهواء عالية الكفاءة.",
    categories: [
      { name: "ثلاجات", class: "bg-red-100 text-red-800" },
      { name: "غسالات", class: "bg-blue-100 text-blue-800" },
      { name: "تلفزيونات", class: "bg-green-100 text-green-800" },
    ],
    products: 150,
    warranty: "5 سنوات",
    bgGradient: "bg-gradient-to-br from-red-500 to-red-600",
  },
  {
    name: "Samsung",
    icon: "📱",
    description:
      "عملاق التكنولوجيا الكوري المتخصص في الهواتف الذكية، أجهزة التلفزيون، الأجهزة المنزلية الذكية، وحلول التكنولوجيا المتطورة والمبتكرة.",
    categories: [
      { name: "هواتف ذكية", class: "bg-blue-100 text-blue-800" },
      { name: "تابلت", class: "bg-purple-100 text-purple-800" },
      { name: "تلفزيونات ذكية", class: "bg-gray-100 text-gray-800" },
    ],
    products: 200,
    warranty: "3 سنوات",
    bgGradient: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    name: "Panasonic",
    icon: "🔋",
    description:
      "شركة يابانية عريقة متخصصة في حلول الطاقة المستدامة، البطاريات عالية الجودة، الأدوات الكهربائية المتطورة، وأنظمة التكنولوجيا البيئية.",
    categories: [
      { name: "بطاريات", class: "bg-green-100 text-green-800" },
      { name: "أدوات كهربائية", class: "bg-yellow-100 text-yellow-800" },
      { name: "كاميرات", class: "bg-blue-100 text-blue-800" },
    ],
    products: 120,
    warranty: "4 سنوات",
    bgGradient: "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    name: "Bosch",
    icon: "🔧",
    description:
      "الدقة الألمانية المتميزة في الأدوات الكهربائية المهنية، أجهزة القياس الدقيقة، الأجهزة المنزلية الفاخرة، وحلول التكنولوجيا الصناعية المتقدمة.",
    categories: [
      { name: "أدوات مهنية", class: "bg-red-100 text-red-800" },
      { name: "أجهزة قياس", class: "bg-blue-100 text-blue-800" },
      { name: "أجهزة منزلية", class: "bg-green-100 text-green-800" },
    ],
    products: 180,
    warranty: "5 سنوات",
    bgGradient: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
]);

// Services Data
const services = ref([
  {
    title: "البيع بالتجزئة والجملة",
    description:
      "توفير جميع المنتجات بأفضل الأسعار التنافسية مع ضمانات شاملة وخدمة ما بعد البيع المتميزة",
    icon: "🛒",
    iconBg: "bg-gradient-to-br from-blue-100 to-blue-200",
    features: [
      "أسعار تنافسية",
      "ضمانات شاملة",
      "خدمة ما بعد البيع",
      "تسهيلات في السداد",
    ],
  },
  {
    title: "الصيانة والدعم التقني",
    description:
      "فريق فني متخصص لتقديم خدمات الصيانة والإصلاح مع قطع غيار أصلية وضمانات موثوقة",
    icon: "🔧",
    iconBg: "bg-gradient-to-br from-green-100 to-green-200",
    features: [
      "فنيين معتمدين",
      "قطع غيار أصلية",
      "ضمان على الصيانة",
      "خدمة سريعة",
    ],
  },
  {
    title: "الاستشارات التقنية",
    description:
      "خبراء متخصصون لمساعدتك في اختيار الحلول التقنية المناسبة لاحتياجاتك الخاصة",
    icon: "💡",
    iconBg: "bg-gradient-to-br from-purple-100 to-purple-200",
    features: [
      "استشارة مجانية",
      "خبراء متخصصون",
      "حلول مخصصة",
      "دراسة الاحتياجات",
    ],
  },
  {
    title: "التوصيل والتركيب",
    description:
      "خدمة توصيل سريعة وآمنة مع فريق فني متخصص لتركيب وتشغيل الأجهزة بشكل احترافي",
    icon: "🚚",
    iconBg: "bg-gradient-to-br from-orange-100 to-orange-200",
    features: ["توصيل مجاني", "تركيب احترافي", "تشغيل وتجريب", "ضمان التركيب"],
  },
  {
    title: "خدمة العملاء 24/7",
    description:
      "دعم فني متواصل على مدار الساعة للإجابة على استفساراتكم وحل أي مشاكل تقنية قد تواجهونها",
    icon: "📞",
    iconBg: "bg-gradient-to-br from-red-100 to-red-200",
    features: [
      "دعم على مدار الساعة",
      "استجابة سريعة",
      "متعدد القنوات",
      "متابعة مستمرة",
    ],
  },
  {
    title: "التدريب والتأهيل",
    description:
      "برامج تدريبية متخصصة لاستخدام الأدوات والأجهزة بأقصى كفاءة وأمان في بيئة العمل",
    icon: "🎓",
    iconBg: "bg-gradient-to-br from-teal-100 to-teal-200",
    features: ["برامج تدريبية", "شهادات معتمدة", "تدريب عملي", "دعم مستمر"],
  },
]);

// Contact Information
const contactInfo = ref([
  {
    title: "عنواننا",
    icon: "📍",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    details: [
      "123 شارع التحرير، وسط البلد",
      "القاهرة، مصر",
      "الرمز البريدي: 11511",
    ],
  },
  {
    title: "اتصل بنا",
    icon: "📞",
    iconBg: "bg-gradient-to-br from-green-500 to-green-600",
    details: [
      "هاتف: 02-1234-5678",
      "موبايل: 010-1234-5678",
      "الخط الساخن: 19999",
    ],
  },
  {
    title: "راسلنا",
    icon: "✉️",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    details: [
      "info@electrotech.com",
      "sales@electrotech.com",
      "support@electrotech.com",
    ],
  },
]);

// Methods
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const playVideo = () => {
  // هنا يمكن إضافة منطق تشغيل الفيديو
  alert("سيتم تشغيل الفيديو التعريفي قريباً!");
};

const submitForm = async () => {
  isSubmitting.value = true;

  try {
    // محاكاة إرسال النموذج
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("تم إرسال رسالتكم بنجاح! سنتواصل معكم قريباً.");

    // إعادة تعيين النموذج
    form.value = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  } catch (error) {
    alert("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
  } finally {
    isSubmitting.value = false;
  }
};

// Auto slider functionality
let autoSliderInterval = null;

const startAutoSlider = () => {
  autoSliderInterval = setInterval(nextSlide, 5000);
};

const stopAutoSlider = () => {
  if (autoSliderInterval) {
    clearInterval(autoSliderInterval);
    autoSliderInterval = null;
  }
};

// Smooth scroll functionality
const smoothScroll = (target) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// Lifecycle hooks
onMounted(() => {
  startAutoSlider();

  // Add smooth scroll to navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("href");
      smoothScroll(target);

      // Close mobile menu if open
      if (mobileMenuOpen.value) {
        mobileMenuOpen.value = false;
      }
    });
  });
});

onUnmounted(() => {
  stopAutoSlider();
});
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.mobile {
  @apply py-2 px-4 rounded-lg hover:bg-gray-50;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-fade-in-up.delay-300 {
  animation-delay: 0.3s;
  animation-fill-mode: both;
}

.animate-fade-in-up.delay-500 {
  animation-delay: 0.5s;
  animation-fill-mode: both;
}

.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #7c3aed);
}

/* RTL Support */
[dir="rtl"] .space-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}
</style>

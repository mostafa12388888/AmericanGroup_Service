<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Skip to Main Content Link -->

    <!-- Main Content -->
    <main id="main-content" class="focus:outline-none" tabindex="-1">
      <!-- Hero Section -->
      <section class="hero-section" role="banner">
        <div class="absolute inset-0 bg-black bg-opacity-20" aria-hidden="true"></div>
        <div class="relative max-w-7xl mx-auto px-4 py-24 text-center text-white">
          <div class="animate-fade-in">
            <h2 class="text-5xl md:text-6xl font-bold mb-6">من نحن</h2>
            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              شركة أمريكن جروب - رائدة في مجال إصلاح وصيانة الأدوات الكهربائية بأحدث التقنيات وأعلى معايير الجودة
            </p>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <NuxtLink 
                to="/services" 
                class="btn-primary"
                aria-label="استعراض خدماتنا"
              >
                خدماتنا
              </NuxtLink>
              <NuxtLink 
                to="/contact" 
                class="btn-secondary"
                aria-label="تواصل معنا للاستفسار"
              >
                تواصل معنا
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Company Story Section -->
      <section class="py-20 bg-white" aria-labelledby="story-title">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="story-title" class="text-4xl font-bold text-gray-800 mb-6">قصتنا</h2>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                تأسست شركة أمريكن جروب من رؤية واضحة: تقديم خدمات إصلاح وصيانة الأدوات الكهربائية بأعلى معايير الجودة والاحترافية. منذ تأسيسنا، التزمنا بتطوير خبراتنا ومهاراتنا لنكون الخيار الأول لعملائنا.
              </p>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                نفخر بفريق من الخبراء المتخصصين الذين يمتلكون سنوات من الخبرة في التعامل مع جميع أنواع الأجهزة الكهربائية، من الأجهزة المنزلية الصغيرة إلى المعدات الصناعية الكبيرة.
              </p>
              <div class="flex items-center space-x-4 space-x-reverse">
                <div class="bg-blue-100 p-3 rounded-full" aria-hidden="true">
                  <Icon name="fa6-solid:check" class="text-blue-600 text-xl" />
                </div>
                <span class="text-lg font-semibold text-gray-800">ضمان على جميع الخدمات</span>
              </div>
            </div>
            <div class="relative">
              <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white transform rotate-3 shadow-2xl">
                <h3 class="text-2xl font-bold mb-4">{{ stats.experience }}+ سنة من الخبرة</h3>
                <p class="text-lg opacity-90">في خدمة عملائنا الكرام وتقديم أفضل الحلول التقنية</p>
              </div>
              <div class="absolute -bottom-4 -right-4 bg-yellow-400 rounded-2xl p-6 transform -rotate-6 shadow-lg" aria-hidden="true">
                <Icon name="fa6-solid:award" class="text-yellow-800 text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>





      <!-- Values Section -->
      <section class="py-20 bg-gray-50" aria-labelledby="values-title">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 id="values-title" class="text-4xl font-bold text-gray-800 mb-4">قيمنا ومبادئنا</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              نؤمن بمجموعة من القيم التي توجه عملنا وتضمن تقديم أفضل خدمة لعملائنا
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div 
              v-for="value in values" 
              :key="value.title"
              class="value-card bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-blue-500"
            >
              <div 
                class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                :class="value.iconBg"
                aria-hidden="true"
              >
                <Icon :name="value.icon" :class="value.iconColor" class="text-2xl" />
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ value.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="py-20 bg-white" aria-labelledby="team-title">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 id="team-title" class="text-4xl font-bold text-gray-800 mb-4">فريق العمل</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              فريق من الخبراء المتخصصين يجمع بين الخبرة العملية والمعرفة التقنية المتقدمة
            </p>
          </div>
          <div class="grid md:grid-cols-4 gap-8">
            <div 
              v-for="member in team" 
              :key="member.role"
              class="text-center focus-within:ring-2 focus-within:ring-blue-500 rounded-lg p-4"
            >
              <div 
                class="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center"
                :aria-label="`صورة ${member.role}`"
              >
                <Icon :name="member.icon" class="text-gray-500 text-4xl" aria-hidden="true" />
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ member.role }}</h3>
              <p class="text-gray-600">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'أمريكن جروب | خبراء إصلاح الأدوات الكهربائية في مصر - ضمان وجودة',
  meta: [
    {
      name: 'description',
      content: 'أمريكن جروب - شركة رائدة في إصلاح وصيانة الأدوات الكهربائية بمصر. خدمة 24/7، ضمان شامل، قطع غيار أصلية. اتصل الآن للحصول على استشارة مجانية.'
    },
    {
      name: 'keywords',
      content: 'إصلاح أدوات كهربائية, صيانة أجهزة منزلية, أمريكن جروب, إصلاح غسالات, إصلاح ثلاجات, إصلاح مكيفات, قطع غيار أصلية'
    },
    { name: 'author', content: 'أمريكن جروب' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'أمريكن جروب | خبراء إصلاح الأدوات الكهربائية' },
    { property: 'og:description', content: 'خدمات إصلاح احترافية للأدوات الكهربائية مع ضمان شامل وقطع غيار أصلية' },
    { property: 'og:image', content: 'https://americangroup.com/images/og-image.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'ar_EG' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'أمريكن جروب | خبراء إصلاح الأدوات الكهربائية' },
    { name: 'twitter:description', content: 'خدمات إصلاح احترافية للأدوات الكهربائية مع ضمان شامل' }
  ],
  link: [
    { rel: 'canonical', href: 'https://americangroup.com/about' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "أمريكن جروب",
        "description": "شركة متخصصة في إصلاح وصيانة الأدوات الكهربائية",
        "url": "https://americangroup.com",
        "telephone": "+20-123-456-7890",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "شارع التحرير",
          "addressLocality": "القاهرة",
          "addressCountry": "مصر"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "30.0444",
          "longitude": "31.2357"
        },
        "openingHours": "Mo-Su 24:00",
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150"
        }
      })
    }
  ]
})

// Reactive Data
const accessibilityPanel = ref(false)
const mobileMenuOpen = ref(false)
const highContrast = ref(false)
const fontSize = ref(16)

// Static Data
const currentYear = new Date().getFullYear()

const navigation = [
  { name: 'الرئيسية', href: '/' },
  { name: 'عنا', href: '/about' },
  { name: 'خدماتنا', href: '/services' },
  { name: 'تواصل معنا', href: '/contact' }
]

const stats = {
  experience: 15
}

const statistics = [
  { icon: 'fa6-solid:users', value: '5000+', label: 'عميل راضٍ' },
  { icon: 'fa6-solid:wrench', value: '15000+', label: 'جهاز تم إصلاحه' },
  { icon: 'fa6-solid:clock', value: '15+', label: 'سنة خبرة' },
  { icon: 'fa6-solid:star', value: '98%', label: 'معدل الرضا' }
]

const values = [
  {
    icon: 'fa6-solid:shield-alt',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'الجودة والموثوقية',
    description: 'نلتزم بأعلى معايير الجودة في كل خدمة نقدمها، مع استخدام قطع غيار أصلية وتقنيات متطورة'
  },
  {
    icon: 'fa6-solid:handshake',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'الشفافية والأمانة',
    description: 'نتعامل مع عملائنا بشفافية كاملة في التشخيص والتسعير، مع ضمان عدم وجود تكاليف خفية'
  },
  {
    icon: 'fa6-solid:rocket',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'الابتكار والتطوير',
    description: 'نسعى باستمرار لتطوير خدماتنا وتحديث معداتنا لمواكبة أحدث التطورات في المجال'
  }
]

const team = [
  { icon: 'fa6-solid:user', role: 'فنيو متخصصون', description: 'خبرة تزيد عن 10 سنوات' },
  { icon: 'fa6-solid:user-tie', role: 'مهندسو إلكترونيات', description: 'تشخيص متقدم ودقيق' },
  { icon: 'fa6-solid:headset', role: 'خدمة العملاء', description: 'دعم على مدار الساعة' },
  { icon: 'fa6-solid:truck', role: 'فريق التوصيل', description: 'خدمة سريعة وموثوقة' }
]

const contact = {
  phone: '+20 123 456 7890',
  whatsapp: '201234567890',
  email: 'info@americangroup.com',
  address: 'القاهرة، مصر'
}

const footerServices = [
  'إصلاح الأجهزة المنزلية',
  'صيانة المعدات الصناعية',
  'تشخيص الأعطال',
  'قطع الغيار الأصلية'
]

// Methods
const skipToMain = () => {
  document.getElementById('main-content').focus()
}

const closeAccessibilityPanel = () => {
  accessibilityPanel.value = false
}

const toggleHighContrast = () => {
  highContrast.value = !highContrast.value
  document.body.classList.toggle('high-contrast', highContrast.value)
}

const increaseFontSize = () => {
  if (fontSize.value < 24) {
    fontSize.value += 2
    document.documentElement.style.fontSize = fontSize.value + 'px'
  }
}

const decreaseFontSize = () => {
  if (fontSize.value > 12) {
    fontSize.value -= 2
    document.documentElement.style.fontSize = fontSize.value + 'px'
  }
}

const resetAccessibility = () => {
  highContrast.value = false
  fontSize.value = 16
  document.body.classList.remove('high-contrast')
  document.documentElement.style.fontSize = '16px'
}

// Watchers
watch(accessibilityPanel, (newVal) => {
  if (newVal) {
    nextTick(() => {
      document.getElementById('accessibility-title')?.focus()
    })
  }
})

// Lifecycle
onMounted(() => {
  // Add loading class removal
  document.body.classList.add('loaded')
  
  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})
</script>

<style scoped>
/* Skip Link */
.skip-link {
  @apply absolute -top-40 left-6 bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300 z-50;
}

.skip-link:focus {
  @apply top-4;
}

/* Focus Visible */
.focus-visible:focus-visible {
  @apply outline-none ring-2 ring-blue-500 ring-offset-2;
}

/* Navigation */
.nav-link {
  @apply text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 focus-visible;
}

/* Buttons */
.btn-primary {
  @apply bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 focus-visible transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center;
}

.btn-secondary {
  @apply border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 focus-visible transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center;
}

/* Accessibility Panel */
.accessibility-btn {
  @apply w-full text-right p-3 border rounded-lg hover:bg-gray-50 focus-visible transition-colors flex items-center;
}

/* Hero Section */
.hero-section {
  @apply relative overflow-hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* Cards */
.value-card {
  @apply transition-all duration-300 hover:transform hover:scale-105;
}

.stat-card {
  @apply transition-all duration-500 hover:transform hover:scale-110;
}

/* Animations */
@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

/* High Contrast Mode */
:global(.high-contrast) {
  filter: contrast(150%) brightness(120%);
}

:global(.high-contrast) .btn-primary {
  @apply bg-black border-2 border-yellow-400 text-yellow-400;
}

:global(.high-contrast) .nav-link {
  @apply text-black hover:text-yellow-600;
}

/* Loading State */
:global(body.loaded) {
  animation: pageLoad 0.5s ease-in;
}

@keyframes pageLoad {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Print Styles */
@media print {
  .skip-link,
  nav,
  .accessibility-panel,
  button[aria-label*="إمكانية"] {
    @apply hidden;
  }
  
  .hero-section {
    @apply bg-none text-black;
  }
}
</style>
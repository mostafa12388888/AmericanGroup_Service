<template>
  <!-- Services Section -->
  <section id="services" class="py-20 bg-white relative">
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"
      ></div>
      <div
        class="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-100 rounded-full opacity-25 animate-bounce-slow"
      ></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          خدماتنا
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          >
            المميزة
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          نقدم مجموعة شاملة من الخدمات المتخصصة لضمان رضا عملائنا وتلبية جميع
          احتياجاتهم التقنية
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        >
          <!-- Icon -->
          <div
            :class="[
              'w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300',
              service.iconBg,
            ]"
          >
            <span class="text-3xl">{{ service.icon }}</span>
          </div>

          <!-- Title -->
          <h3
            class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors"
          >
            {{ service.title }}
          </h3>

          <!-- Description -->
          <p class="text-gray-600 leading-relaxed mb-6">
            {{ service.description }}
          </p>

          <!-- Features -->
          <div class="space-y-2">
            <div
              v-for="feature in service.features"
              :key="feature"
              class="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600"
            >
              <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>{{ feature }}</span>
            </div>
          </div>

          <!-- Hover Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// قائمة الخدمات
const services = [
  {
    title: "البيع بالتجزئة",
    icon: "🛒",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    description:
      "نوفر أحدث المنتجات الكهربائية بأفضل الأسعار للعملاء الأفراد مع ضمان الجودة.",
    features: ["أسعار تنافسية", "ضمان معتمد", "منتجات أصلية"],
  },
  {
    title: "البيع بالجملة",
    icon: "📦",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    description:
      "خدمة خاصة للموزعين والتجار بأسعار مميزة وكميات كبيرة لتلبية احتياجات السوق.",
    features: ["خصومات حصرية", "شحن سريع", "دعم ما بعد البيع"],
  },
  {
    title: "الصيانة والإصلاح",
    icon: "🛠️",
    iconBg: "bg-gradient-to-br from-green-500 to-green-600",
    description:
      "فريق مختص لصيانة وإصلاح جميع أنواع الأجهزة الكهربائية والإلكترونية.",
    features: ["مهندسون خبراء", "قطع غيار أصلية", "خدمة سريعة"],
  },
  {
    title: "الدعم التقني",
    icon: "💡",
    iconBg: "bg-gradient-to-br from-yellow-500 to-yellow-600",
    description:
      "استشارات تقنية وخدمة دعم لحل المشكلات وتقديم النصائح للعملاء.",
    features: ["استجابة فورية", "دعم 24/7", "إرشادات متخصصة"],
  },
  {
    title: "التوصيل والتركيب",
    icon: "🚚",
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
    description:
      "خدمة توصيل الأجهزة حتى باب المنزل وتركيبها بواسطة فريق محترف.",
    features: ["توصيل سريع", "تركيب احترافي", "خدمة ما بعد البيع"],
  },
  {
    title: "الاستيراد والتصدير",
    icon: "🌍",
    iconBg: "bg-gradient-to-br from-pink-500 to-pink-600",
    description:
      "استيراد أفضل المنتجات العالمية وتصدير منتجاتنا للأسواق الخارجية.",
    features: ["منتجات عالية الجودة", "شبكة دولية", "أسعار منافسة"],
  },
];
</script>

<style>
/* أنيميشن مخصص */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}
</style>

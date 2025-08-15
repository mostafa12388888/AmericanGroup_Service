<template>
  <!-- About Section -->
  <section id="about" class="py-20 bg-white relative overflow-hidden">
    <!-- Background Decorations -->
    <div
      class="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-32 -translate-y-32 opacity-50"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-x-48 translate-y-48 opacity-30"
    ></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          من
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          >
            نحن
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          نحن شركة رائدة في مجال توكيل وتوزيع الأدوات الكهربائية والإلكترونيات
          من أشهر العلامات التجارية العالمية. نفتخر بخبرتنا التي تمتد لأكثر من
          25 عاماً في السوق المصري والعربي.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Vision / Mission / Values -->
        <div class="space-y-8">
          <div
            v-for="(item, index) in aboutItems"
            :key="index"
            class="flex items-start space-x-4 rtl:space-x-reverse"
          >
            <div
              :class="[
                'w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0',
                item.bg
              ]"
            >
              <span class="text-white text-2xl">{{ item.icon }}</span>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-3">{{ item.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ item.text }}</p>
            </div>
          </div>
        </div>

        <!-- Stats Boxes -->
        <div class="relative">
          <div class="grid grid-cols-2 gap-6">
            <div
              v-for="(stat, i) in stats"
              :key="i"
              :class="[
                'rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300',
                stat.bg
              ]"
            >
              <div class="text-4xl mb-4">{{ stat.icon }}</div>
              <div :class="['text-3xl font-bold mb-2', stat.color]">
                {{ stat.number }}
              </div>
              <div class="text-gray-700 font-semibold">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Vision / Mission / Values
const aboutItems = [
  {
    title: "رؤيتنا",
    icon: "🎯",
    bg: "bg-gradient-to-br from-blue-500 to-blue-600",
    text: "أن نكون الشريك الأول والأوثق في مجال الأدوات الكهربائية والتكنولوجيا المتقدمة في المنطقة العربية، مع التزامنا بأعلى معايير الجودة والخدمة."
  },
  {
    title: "مهمتنا",
    icon: "💼",
    bg: "bg-gradient-to-br from-purple-500 to-purple-600",
    text: "توفير حلول تقنية متطورة وموثوقة تلبي احتياجات عملائنا وتساهم في تحسين جودة حياتهم اليومية من خلال منتجات عالية الجودة وخدمة متميزة."
  },
  {
    title: "قيمنا",
    icon: "⭐",
    bg: "bg-gradient-to-br from-green-500 to-green-600",
    text: "الجودة، الثقة، الابتكار، وخدمة العملاء المتميزة هي أسس نجاحنا وتميزنا في السوق. نؤمن بالشفافية والنزاهة في جميع تعاملاتنا."
  }
];

// Stats
const stats = [
  {
    icon: "📈",
    number: "25+",
    label: "سنة من الخبرة",
    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    color: "text-blue-600"
  },
  {
    icon: "👥",
    number: "50K+",
    label: "عميل راض",
    bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    color: "text-purple-600"
  },
  {
    icon: "🏪",
    number: "15",
    label: "فرع في مصر",
    bg: "bg-gradient-to-br from-green-50 to-green-100",
    color: "text-green-600"
  },
  {
    icon: "🎖️",
    number: "10+",
    label: "علامة تجارية",
    bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    color: "text-orange-600"
  }
];
</script>

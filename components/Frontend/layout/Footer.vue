<template>
  <!-- Footer -->
  <footer class="bg-black text-white py-12">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Logo and description -->
        <div>
          <div class="flex items-center space-x-3 rtl:space-x-reverse mb-4">
            <div
              class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
            >
              <span class="text-white text-lg font-bold">⚡</span>
            </div>
            <div>
              <h3 class="text-xl font-bold">ElectroTech</h3>
              <p class="text-sm text-gray-400">التوكيلات المعتمدة</p>
            </div>
          </div>
          <p class="text-gray-400 leading-relaxed">
            شريككم الموثوق في عالم الأدوات الكهربائية والتكنولوجيا المتقدمة منذ
            أكثر من 25 عاماً.
          </p>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-bold mb-4">الخدمات</h4>
          <ul class="space-y-2 text-gray-400">
            <li v-for="service in services" :key="service">
              <NuxtLink
                to="#"
                class="hover:text-white transition-colors"
              >
                {{ service }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Brands -->
        <div>
          <h4 class="text-lg font-bold mb-4">العلامات التجارية</h4>
          <ul class="space-y-2 text-gray-400">
            <li v-for="brand in brands" :key="brand">
              <NuxtLink
                to="#"
                class="hover:text-white transition-colors"
              >
                {{ brand }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="text-lg font-bold mb-4">تابعونا</h4>
          <div class="flex space-x-4 rtl:space-x-reverse mb-4">
            <a
              v-for="icon in socialIcons"
              :key="icon.name"
              :href="icon.link"
              :class="[
                'w-10 h-10 rounded-full flex items-center justify-center transition-colors',
                icon.bg,
                icon.hover
              ]"
            >
              <span class="text-white">{{ icon.emoji }}</span>
            </a>
          </div>
          <p class="text-gray-400 text-sm">
            📞 خدمة العملاء: +20 114 684 8300<br />
            📧 info@electrotech.com
          </p>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-gray-800 pt-8 text-center">
        <p class="text-gray-400">
          © 2025 ElectroTech. جميع الحقوق محفوظة. | تصميم وتطوير فريق ElectroTech
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// خدمات
const services = [
  "البيع بالتجزئة",
  "البيع بالجملة",
  "الصيانة والإصلاح",
  "الدعم التقني",
];

// علامات تجارية
const brands = ["LG Electronics", "Samsung", "Panasonic", "Bosch"];

// أيقونات التواصل الاجتماعي
const socialIcons = [
  { name: "facebook", link: "#", emoji: "📘", bg: "bg-blue-600", hover: "hover:bg-blue-700" },
  { name: "twitter", link: "#", emoji: "🐦", bg: "bg-blue-400", hover: "hover:bg-blue-500" },
  { name: "instagram", link: "#", emoji: "📷", bg: "bg-red-600", hover: "hover:bg-red-700" },
  { name: "youtube", link: "#", emoji: "📺", bg: "bg-red-500", hover: "hover:bg-red-600" },
];
</script>

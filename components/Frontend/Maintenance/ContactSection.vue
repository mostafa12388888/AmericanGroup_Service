<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-gray-800 mb-8">تواصل معنا الآن</h2>
      <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        هل تحتاج للمساعدة؟ فريقنا جاهز لخدمتك على مدار الساعة
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="tel:+201234567890"
          class="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Icon name="heroicons:phone" class="w-5 h-5 inline ml-2" />
          اتصل بنا الآن
        </a>
        
        <a 
          href="https://wa.me/201234567890"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-gradient-to-r from-green-400 to-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Icon name="simple-icons:whatsapp" class="w-5 h-5 inline ml-2" />
          واتساب
        </a>
      </div>
    </div>
  </section>
</template>
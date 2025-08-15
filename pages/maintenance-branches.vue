<template>
  <div class="min-h-screen bg-gray-50" dir="rtl">
    <!-- SEO Head -->
    <Head>
      <Title>الأمريكية جروب - تصليح الأدوات الكهربائية</Title>
      <Meta name="description" content="الأمريكية جروب - شركة رائدة في تصليح الأدوات الكهربائية بأعلى جودة وأفضل ضمان في جميع أنحاء مصر" />
      <Meta name="keywords" content="تصليح أدوات كهربائية, صيانة, ضمان, الأمريكية جروب" />
      <Meta property="og:title" content="الأمريكية جروب - تصليح الأدوات الكهربائية" />
      <Meta property="og:description" content="شركة رائدة في تصليح الأدوات الكهربائية بأعلى جودة وأفضل ضمان" />
      <Meta property="og:type" content="website" />
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <Link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
    </Head>

    <!-- Hero Section -->
    <section id="home" class="hero-section bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 text-white py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="hero-pattern absolute inset-0"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            الأمريكية جروب
          </h1>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            خبرة تتجاوز <span class="text-yellow-300">20 عاماً</span>
            <br>في تصليح الأدوات الكهربائية
          </h2>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed animate-fade-in-up animation-delay-200">
            الشركة الرائدة في مصر لتصليح وصيانة جميع الأدوات الكهربائية
            <br>بأعلى جودة وأفضل ضمان في جميع أنحاء الجمهورية
          </p>
          <button 
            @click="scrollToSection('branches')"
            class="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 animate-fade-in-up animation-delay-400"
          >
            <Icon name="heroicons:map-pin" class="w-5 h-5 inline ml-2" />
            اختر أقرب فرع لك
          </button>
        </div>
      </div>
    </section>

    <!-- Services Section -->
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
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:-translate-y-2 service-card"
            :class="[service.hoverColor, `animate-fade-in-up animation-delay-${(index + 1) * 100}`]"
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

    <!-- Branches Section -->
    <section id="branches" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">شبكة فروعنا في جميع أنحاء مصر</h2>
          <p class="text-xl text-gray-600">{{ totalBranchesCount }} فرع استراتيجي لخدمتك في أي مكان</p>
        </div>
        
        <!-- Governorate Selector -->
        <div class="flex justify-center mb-12">
          <div class="bg-white rounded-full p-2 shadow-lg border-2 border-gray-100">
            <div class="flex flex-wrap gap-2 justify-center">
              <button
                v-for="governorate in governoratesData"
                :key="governorate.id"
                @click="selectGovernorate(governorate.id)"
                :class="[
                  'governor-btn text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2',
                  selectedGovernorate === governorate.id ? 'active scale-105' : ''
                ]"
              >
                <span class="text-lg">{{ governorate.emoji }}</span>
                {{ governorate.name }}
                <span class="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                  {{ governorate.branches.length }}
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Selected Governorate Content -->
        <div v-if="selectedGovernorateData" class="animate-fade-in">
          <div class="text-center mb-8">
            <h3 class="text-3xl font-bold text-gray-800 mb-2">
              <span class="text-4xl ml-2">{{ selectedGovernorateData.emoji }}</span>
              فروع {{ selectedGovernorateData.name }}
            </h3>
            <p class="text-lg text-gray-600">
              {{ selectedGovernorateData.branches.length }} فرع متاح لخدمتك
            </p>
          </div>

          <!-- Branch Selector for Governorate -->
          <div class="flex flex-wrap justify-center gap-3 mb-12">
            <button
              v-for="branch in selectedGovernorateData.branches"
              :key="branch.id"
              @click="selectBranch(branch.id)"
              :class="[
                'branch-btn text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2',
                selectedBranchId === branch.id ? 'active' : ''
              ]"
            >
              <Icon name="heroicons:building-office-2" class="w-4 h-4" />
              {{ branch.name }}
            </button>
          </div>

          <!-- Selected Branch Details -->
          <div v-if="selectedBranchData" class="max-w-6xl mx-auto animate-fade-in">
            <div class="grid lg:grid-cols-2 gap-8">
              <!-- Branch Info Card -->
              <div class="branch-card rounded-2xl p-8 shadow-xl border border-gray-100">
                <div class="flex items-center mb-6">
                  <span class="text-3xl ml-4">{{ selectedGovernorateData.emoji }}</span>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-800">{{ selectedBranchData.fullName }}</h3>
                    <p class="text-gray-600">{{ selectedGovernorateData.name }}</p>
                  </div>
                </div>
                
                <div class="space-y-6">
                  <div class="flex items-start">
                    <Icon name="heroicons:map-pin" class="w-6 h-6 text-blue-600 ml-4 mt-1 flex-shrink-0" />
                    <div>
                      <p class="text-gray-700 font-medium">العنوان</p>
                      <p class="text-gray-600">{{ selectedBranchData.address }}</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <Icon name="heroicons:phone" class="w-6 h-6 text-green-600 ml-4 mt-1 flex-shrink-0" />
                    <div>
                      <p class="text-gray-700 font-medium">رقم الهاتف</p>
                      <a :href="`tel:${selectedBranchData.phone}`" class="text-green-600 hover:text-green-700 font-medium">
                        {{ selectedBranchData.phone }}
                      </a>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <Icon name="heroicons:clock" class="w-6 h-6 text-orange-600 ml-4 mt-1 flex-shrink-0" />
                    <div>
                      <p class="text-gray-700 font-medium">ساعات العمل</p>
                      <p class="text-gray-600">{{ selectedBranchData.workingHours }}</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <Icon name="heroicons:wrench-screwdriver" class="w-6 h-6 text-purple-600 ml-4 mt-1 flex-shrink-0" />
                    <div>
                      <p class="text-gray-700 font-medium">الخدمات المتاحة</p>
                      <div class="flex flex-wrap gap-2 mt-2">
                        <span 
                          v-for="service in selectedBranchData.services" 
                          :key="service"
                          class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {{ service }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Contact Buttons -->
                  <div class="flex gap-4 pt-4">
                    <a 
                      :href="`tel:${selectedBranchData.phone}`"
                      class="flex-1 bg-green-600 text-white px-4 py-3 rounded-xl font-medium text-center hover:bg-green-700 transition-colors"
                    >
                      <Icon name="heroicons:phone" class="w-4 h-4 inline ml-2" />
                      اتصال
                    </a>
                    <a 
                      :href="`https://wa.me/${selectedBranchData.whatsapp}`"
                      target="_blank"
                      class="flex-1 bg-green-500 text-white px-4 py-3 rounded-xl font-medium text-center hover:bg-green-600 transition-colors"
                    >
                      <Icon name="simple-icons:whatsapp" class="w-4 h-4 inline ml-2" />
                      واتساب
                    </a>
                  </div>
                </div>
              </div>

              <!-- Branch Features -->
              <div class="space-y-4">
                <div 
                  v-for="feature in selectedBranchData.features" 
                  :key="feature.title"
                  class="branch-card rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div class="flex items-center mb-4">
                    <div :class="`bg-${feature.color}-100`" class="w-12 h-12 rounded-xl flex items-center justify-center ml-4 feature-icon">
                      <Icon :name="feature.icon" :class="`text-${feature.color}-600`" class="w-6 h-6" />
                    </div>
                    <h4 class="text-lg font-bold text-gray-800">{{ feature.title }}</h4>
                  </div>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Warranty Section -->
    <section id="warranty" class="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">ضمان شامل على جميع الخدمات</h2>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            نحن واثقون من جودة عملنا، لذلك نقدم ضماناً شاملاً على جميع خدمات الصيانة والإصلاح
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div 
            v-for="(warranty, index) in warrantyOptions" 
            :key="warranty.id"
            class="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            :class="`animate-fade-in-up animation-delay-${(index + 1) * 200}`"
          >
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Icon :name="warranty.icon" class="w-10 h-10 text-white" />
              </div>
              <h3 class="text-2xl font-bold mb-2">{{ warranty.period }}</h3>
              <h4 class="text-xl font-semibold text-blue-200 mb-4">{{ warranty.type }}</h4>
              <p class="text-blue-100 mb-6">{{ warranty.description }}</p>
              
              <ul class="space-y-2 text-sm text-blue-100">
                <li v-for="feature in warranty.features" :key="feature" class="flex items-center justify-center">
                  <Icon name="heroicons:check" class="w-4 h-4 text-green-400 ml-2 flex-shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Warranty Process -->
        <div class="mt-16 max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold text-center mb-12">كيف يعمل الضمان؟</h3>
          <div class="grid md:grid-cols-4 gap-8">
            <div 
              v-for="(step, index) in warrantyProcess" 
              :key="step.id"
              class="text-center"
            >
              <div class="relative">
                <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center font-bold text-2xl text-white">
                  {{ index + 1 }}
                </div>
                <div v-if="index < warrantyProcess.length - 1" class="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
              </div>
              <h4 class="text-lg font-bold mb-2">{{ step.title }}</h4>
              <p class="text-blue-200 text-sm">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
   
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Reactive data
const selectedGovernorate = ref('cairo')
const selectedBranchId = ref(null)

// Services data
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

// Governorates data with multiple branches
const governoratesData = [
  {
    id: 'cairo',
    name: 'القاهرة الكبرى',
    emoji: '🏛️',
    branches: [
      {
        id: 'cairo-downtown',
        name: 'وسط البلد',
        fullName: 'فرع وسط البلد الرئيسي',
        address: 'شارع الجمهورية، وسط البلد، القاهرة',
        phone: '+20 2 2345 6789',
        whatsapp: '201234567890',
        workingHours: 'من السبت إلى الخميس: 9 ص - 10 م',
        services: ['ثلاجات', 'غسالات', 'تكييفات', 'ميكروويف', 'خلاطات'],
        features: [
          {
            title: 'فريق متخصص',
            description: '25 فني معتمد مع خبرة تزيد عن 15 سنة',
            icon: 'heroicons:users',
            color: 'blue'
          },
          {
            title: 'قطع غيار أصلية',
            description: 'نستخدم قطع غيار أصلية 100% مع ضمان 12 شهر',
            icon: 'heroicons:check-circle', 
            color: 'green'
          },
          {
            title: 'خدمة سريعة',
            description: 'نصل إليك في أقل من 2 ساعة',
            icon: 'heroicons:clock',
            color: 'yellow'
          }
        ] 
      },
      {
        id: 'cairo-nasr-city',
        name: 'مدينة نصر',
        fullName: 'فرع مدينة نصر',
        address: 'شارع عباس العقاد، مدينة نصر، القاهرة',
        phone: '+20 2 4567 8901',
        whatsapp: '201234567891',
        workingHours: 'من السبت إلى الخميس: 9 ص - 10 م',
        services: ['ثلاجات', 'غسالات', 'تكييفات'],
        features: [
          {
            title: 'فريق متخصص',
            description: '15 فني معتمد في مدينة نصر',
            icon: 'heroicons:users',
            color: 'blue'
          },
          {
            title: 'قطع غيار أصلية',
            description: 'نستخدم قطع غيار أصلية 100% مع ضمان 12 شهر',
            icon: 'heroicons:check-circle', 
            color: 'green'
          },
          {
            title: 'خدمة سريعة',
            description: 'نصل إليك في أقل من 3 ساعات',
            icon: 'heroicons:clock',
            color: 'yellow'
          }
        ]
      },
      {
        id: 'cairo-maadi',
        name: 'المعادي',
        fullName: 'فرع المعادي',
        address: 'شارع النصر، المعادي، القاهرة',
        phone: '+20 2 5678 9012',
        whatsapp: '201234567892',
        workingHours: 'من السبت إلى الخميس: 9 ص - 10 م',
        services: ['ثلاجات', 'غسالات', 'تكييفات'],
        features: [
          {
            title: 'فريق متخصص',
            description: '12 فني معتمد في المعادي',
            icon: 'heroicons:users',
            color: 'blue'
          },
          {
            title: 'قطع غيار أصلية',
            description: 'نستخدم قطع غيار أصلية 100% مع ضمان 12 شهر',
            icon: 'heroicons:check-circle', 
            color: 'green'
          },
          {
            title: 'خدمة سريعة',
            description: 'نصل إليك في أقل من 4 ساعات',
            icon: 'heroicons:clock',
            color: 'yellow'
          }
        ]
      },
      {
        id: 'cairo-heliopolis',
        name: 'مصر الجديدة',
        fullName: 'فرع مصر الجديدة',
        address: 'شارع الأهرام، مصر الجديدة، القاهرة',
        phone: '+20 2 6789 0123',
        whatsapp: '201234567893',
        workingHours: 'من السبت إلى الخميس: 9 ص - 10 م',
        services: ['ثلاجات', 'غسالات', 'تكييفات', 'ميكروويف'],
        features: [
          {
            title: 'فريق متخصص',
            description: '18 فني معتمد في مصر الجديدة',
            icon: 'heroicons:users',
            color: 'blue'
          },
          {
            title: 'قطع غيار أصلية',
            description: 'نستخدم قطع غيار أصلية 100% مع ضمان 12 شهر',
            icon: 'heroicons:check-circle', 
            color: 'green'
          },
          {
            title: 'خدمة سريعة',
            description: 'نصل إليك في أقل من 3 ساعات',
            icon: 'heroicons:clock',
            color: 'yellow'
          }
        ]
      }
    ]
  },
  {
    id: 'north-coast',
    name: 'الساحل الشمالي',
    emoji: '🏖️',
    branches: [
      {
        id: 'north-coast-marina',
        name: 'المارينا',
        fullName: 'فرع المارينا الساحل الشمالي',
        address: 'المارينا، الساحل الشمالي',
        phone: '+20 3 7890 1234',
        whatsapp: '201234567894',
        workingHours: 'من السبت إلى الخميس: 10 ص - 9 م (موسم الصيف)',
        services: ['ثلاجات', 'غسالات', 'تكييفات'],
        features: [
          {
            title: 'فريق متخصص',
            description: '10 فنيين معتمدين في الساحل الشمالي',
            icon: 'heroicons:users',
            color: 'blue'
          },
          {
            title: 'خدمة موسمية',
            description: 'خدمة مكثفة خلال موسم الصيف',
            icon: 'heroicons:sun',
            color: 'orange'
          },
          {
            title: 'خدمة سريعة',
            description: 'نصل إليك في أقل من 6 ساعات',
            icon: 'heroicons:clock',
            color: 'yellow'
          }
        ]
      },
      {
        id: 'north-coast-alamein',
        name: 'العلمين الجديدة',
        fullName: 'فرع العلمين الجديدة',
        address: 'العلمين الجديدة، الساحل الشمالي',
        phone: '+20 3 8901 2345',
        whatsapp: '201234567895',
        workingHours: 'من السبت إلى الخميس: 10 ص - 9 م',
        services: ['ثلاجات', 'غسالات', 'تكييفات', 'ميكروويف'],
        features: [
          {
            title: 'فريق متخصص',
            description: '8 فنيين معتمدين في العلمين',
            icon: 'heroicons:users',
            color: 'blue'
          },
          {
            title: 'قطع غيار أصلية',
            description: 'نستخدم قطع غيار أصلية 100% مع ضمان 12 شهر',
            icon: 'heroicons:check-circle', 
            color: 'green'
          },
          {
            title: 'خدمة سريعة',
            description: 'نصل إليك في أقل من 4 ساعات',
            icon: 'heroicons:clock',
            color: 'yellow'
          }
        ]
      },
      {
        id: 'north-coast-hacienda',
        name: 'هاسيندا باي',
        fullName: 'فرع هاسيندا باي',
        address: 'هاسيندا باي، الساحل الشمالي',
        phone: '+20 3 9012 3456',
        whatsapp: '201234567896',
        workingHours: 'من السبت إلى الخميس: 9 ص - 10 م',
        services: ['ثلاجات', 'غسالات', 'تكييفات'],
        features: [
          {
            title: 'فريق متخصص',
            description: '6 فنيين معتمدين في هاسيندا',
            icon: 'heroicons:users',
            color: 'blue'
          },
          {
            title: 'خدمة مميزة',
            description: 'خدمة VIP للمنتجعات السياحية',
            icon: 'heroicons:star',
            color: 'purple'
          },
          {
            title: 'خدمة سريعة',
            description: 'نصل إليك في أقل من 5 ساعات',
            icon: 'heroicons:clock',
            color: 'yellow'
          }
        ]
      }
    ]
  },
  {
    id: 'giza',
    name: 'الجيزة',
    emoji: '🏢',
    branches: [
      {
        id: 'giza-main',
        name: 'فرع الجيزة الرئيسي',
        fullName: 'فرع الجيزة الرئيسي',
        address: 'شارع الهرم، الجيزة',
        phone: '+20 2 3456 7890',
        whatsapp: '201234567897',
        workingHours: 'من السبت إلى الخميس: 9 ص - 10 م',
        services: ['ثلاجات', 'غسالات', 'تكييفات', 'ميكروويف', 'خلاطات'],
        features: [
          {
            title: 'فريق متخصص',
            description: '20 فني معتمد مع خبرة تزيد عن 12 سنة',
            icon: 'heroicons:users',
            color: 'blue'
          },
          {
            title: 'قطع غيار أصلية',
            description: 'نستخدم قطع غيار أصلية 100% مع ضمان 12 شهر',
            icon: 'heroicons:check-circle', 
            color: 'green'
          },
          {
            title: 'خدمة سريعة',
            description: 'نصل إليك في أقل من 3 ساعات',
            icon: 'heroicons:clock',
            color: 'yellow'
          }
        ]
      }
    ]
  },
  {
    id: 'alexandria',
    name: 'الإسكندرية',
    emoji: '🌊',
    branches: [
      {
        id: 'alexandria-main',
        name: 'فرع الإسكندرية الرئيسي',
        fullName: 'فرع الإسكندرية الرئيسي',
        address: 'شارع فؤاد، الإسكندرية',
        phone: '+20 3 4567 8901',
        whatsapp: '201234567898',
        workingHours: 'من السبت إلى الخميس: 9 ص - 10 م',
        services: ['ثلاجات', 'غسالات', 'تكييفات', 'ميكروويف'],
        features: [
          {
            title: 'فريق متخصص',
            description: '15 فني معتمد في الإسكندرية',
            icon: 'heroicons:users',
            color: 'blue'
          },
          {
            title: 'قطع غيار أصلية',
            description: 'نستخدم قطع غيار أصلية 100% مع ضمان 12 شهر',
            icon: 'heroicons:check-circle', 
            color: 'green'
          },
          {
            title: 'خدمة ساحلية',
            description: 'خدمة متخصصة للمناطق الساحلية',
            icon: 'heroicons:map',
            color: 'cyan'
          }
        ]
      }
    ]
  },
  {
    id: 'sharm',
    name: 'شرم الشيخ',
    emoji: '🏝️',
    branches: [
      {
        id: 'sharm-main',
        name: 'فرع شرم الشيخ',
        fullName: 'فرع شرم الشيخ السياحي',
        address: 'خليج نعمة، شرم الشيخ، جنوب سيناء',
        phone: '+20 69 3601 234',
        whatsapp: '201234567899',
        workingHours: 'من السبت إلى الخميس: 9 ص - 11 م',
        services: ['ثلاجات', 'غسالات', 'تكييفات'],
        features: [
          {
            title: 'خدمة سياحية',
            description: '8 فنيين متخصصين في المنتجعات السياحية',
            icon: 'heroicons:building-office',
            color: 'blue'
          },
          {
            title: 'خدمة طوارئ',
            description: 'خدمة طوارئ 24/7 للفنادق والمنتجعات',
            icon: 'heroicons:exclamation-triangle',
            color: 'red'
          },
          {
            title: 'خدمة سريعة',
            description: 'نصل إليك في أقل من ساعة واحدة',
            icon: 'heroicons:clock',
            color: 'yellow'
          }
        ]
      }
    ]
  },
  {
    id: 'hurghada',
    name: 'الغردقة',
    emoji: '🐠',
    branches: [
      {
        id: 'hurghada-main',
        name: 'فرع الغردقة',
        fullName: 'فرع الغردقة السياحي',
        address: 'السقالة، الغردقة، البحر الأحمر',
        phone: '+20 65 3444 567',
        whatsapp: '201234567900',
        workingHours: 'من السبت إلى الخميس: 9 ص - 11 م',
        services: ['ثلاجات', 'غسالات', 'تكييفات', 'ميكروويف'],
        features: [
          {
            title: 'خدمة سياحية',
            description: '10 فنيين متخصصين في المنتجعات السياحية',
            icon: 'heroicons:building-office',
            color: 'blue'
          },
          {
            title: 'قطع غيار بحرية',
            description: 'قطع غيار مقاومة للرطوبة والأملاح',
            icon: 'heroicons:shield-check',
            color: 'green'
          },
          {
            title: 'خدمة سريعة',
            description: 'نصل إليك في أقل من 2 ساعة',
            icon: 'heroicons:clock',
            color: 'yellow'
          }
        ]
      }
    ]
  },
  {
    id: 'mansoura',
    name: 'المنصورة',
    emoji: '🌾',
    branches: [
      {
        id: 'mansoura-main',
        name: 'فرع المنصورة',
        fullName: 'فرع المنصورة - الدقهلية',
        address: 'شارع الجمهورية، المنصورة، الدقهلية',
        phone: '+20 50 2234 567',
        whatsapp: '201234567901',
        workingHours: 'من السبت إلى الخميس: 9 ص - 10 م',
        services: ['ثلاجات', 'غسالات', 'تكييفات', 'خلاطات'],
        features: [
          {
            title: 'فريق متخصص',
            description: '12 فني معتمد في منطقة الدلتا',
            icon: 'heroicons:users',
            color: 'blue'
          },
          {
            title: 'تغطية واسعة',
            description: 'نخدم جميع قرى ومراكز الدقهلية',
            icon: 'heroicons:map',
            color: 'green'
          },
          {
            title: 'خدمة ريفية',
            description: 'خدمة متخصصة للمناطق الريفية',
            icon: 'heroicons:home',
            color: 'yellow'
          }
        ]
      }
    ]
  },
  {
    id: 'tanta',
    name: 'طنطا',
    emoji: '🌱',
    branches: [
      {
        id: 'tanta-main',
        name: 'فرع طنطا',
        fullName: 'فرع طنطا - الغربية',
        address: 'شارع الجلاء، طنطا، الغربية',
        phone: '+20 40 3345 678',
        whatsapp: '201234567902',
        workingHours: 'من السبت إلى الخميس: 9 ص - 10 م',
        services: ['ثلاجات', 'غسالات', 'تكييفات'],
        features: [
          {
            title: 'فريق متخصص',
            description: '10 فنيين معتمدين في الغربية',
            icon: 'heroicons:users',
            color: 'blue'
          },
          {
            title: 'قطع غيار أصلية',
            description: 'نستخدم قطع غيار أصلية 100% مع ضمان 12 شهر',
            icon: 'heroicons:check-circle', 
            color: 'green'
          },
          {
            title: 'خدمة سريعة',
            description: 'نصل إليك في أقل من 4 ساعات',
            icon: 'heroicons:clock',
            color: 'yellow'
          }
        ]
      }
    ]
  }
]

// Warranty options data
const warrantyOptions = [
  {
    id: 1,
    period: '6 شهور',
    type: 'ضمان شامل',
    description: 'يشمل جميع الأعطال مع قطع غيار أصلية',
    icon: 'heroicons:shield-check',
    features: [
      'تغطية كاملة لجميع الأعطال',
      'قطع غيار أصلية 100%',
      'خدمة عملاء على مدار الساعة'
    ]
  },
  {
    id: 2,
    period: '12 شهر',
    type: 'ضمان ممتد',
    description: 'تمديد الضمان ليشمل عام كامل من الخدمة',
    icon: 'heroicons:shield-exclamation',
    features: [
      'تغطية شاملة لمدة عام كامل',
      'قطع غيار أصلية وضمان جودة العمل',
      'خدمة عملاء متميزة'
    ]
  },
  {
    id: 3,
    period: '24 شهر',
    type: 'ضمان مطول',
    description: 'أفضل ضمان في السوق مع تغطية شاملة لمدة عامين',
    icon: 'heroicons:star',
    features: [
      'تغطية شاملة لمدة عامين كاملين',
      'قطع غيار أصلية وضمان جودة العمل',
      'خدمة عملاء متميزة على مدار الساعة'
    ]
  }
]

// Warranty process steps data
const warrantyProcess = [
  {
    id: 1,
    title: 'الاتصال بنا',
    description: 'اتصل بنا على الرقم الموحد أو عبر الواتساب لطلب الخدمة'
  },
  {
    id: 2,
    title: 'تحديد موعد',
    description: 'حدد موعداً يناسبك لزيارة الفني المختص'
  },
  {
    id: 3,
    title: 'زيارة الفني',
    description: 'سيقوم الفني بزيارة منزلك لتشخيص المشكلة وإصلاحها'
  },
  {
    id: 4,
    title: 'تأكيد الضمان',
    description: 'بعد الإصلاح، ستحصل على ضمان شامل للخدمة المقدمة'
  }
]

// Computed properties
const selectedGovernorateData = computed(() => {
  return governoratesData.find(gov => gov.id === selectedGovernorate.value)
})

const selectedBranchData = computed(() => {
  if (!selectedGovernorateData.value || !selectedBranchId.value) return null
  return selectedGovernorateData.value.branches.find(branch => branch.id === selectedBranchId.value)
})

const totalBranchesCount = computed(() => {
  return governoratesData.reduce((total, gov) => total + gov.branches.length, 0)
})

// Methods
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

const selectGovernorate = (governorateId) => {
  selectedGovernorate.value = governorateId
  // Auto-select the first branch of the selected governorate
  const govData = governoratesData.find(gov => gov.id === governorateId)
  if (govData && govData.branches.length > 0) {
    selectedBranchId.value = govData.branches[0].id
  }
}

const selectBranch = (branchId) => {
  selectedBranchId.value = branchId
}

// Initialize on mount
onMounted(() => {
  // Set default governorate and branch
  selectedGovernorate.value = 'cairo'
  selectedBranchId.value = 'cairo-downtown'
})
</script>

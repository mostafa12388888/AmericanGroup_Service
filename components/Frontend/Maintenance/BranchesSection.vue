<template>
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
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Reactive data
const selectedGovernorate = ref('cairo')
const selectedBranchId = ref(null)

// Governorates data with branches (shortened for brevity)
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
            description: 'نصل إليك في أقل من 2 ساعة',   
            icon: 'heroicons:clock',
            color: 'yellow'
            },
            {
              title: 'خدمة منزلية',
              description: 'زيارة منزلية مجانية للكشف والصيانة',
              icon: 'heroicons:home',
              color: 'indigo'
            }
        ]
        }]
        }
    ]

// Computed properties
const selectedGovernorateData = computed(() => {
    return governoratesData.find(gov => gov.id === selectedGovernorate.value)
    })
const selectedBranchData = computed(() => {
    if (!selectedGovernorateData.value) return null
    return selectedGovernorateData.value.branches.find(branch => branch.id === selectedBranchId.value)
})
// Total branches count
const totalBranchesCount = computed(() => {
  return governoratesData.reduce((total, gov) => total + gov.branches.length, 0)
})
// Methods
const selectGovernorate = (id) => {
  selectedGovernorate.value = id
  selectedBranchId.value = null // Reset branch selection when governorate changes
}
const selectBranch = (id) => {
  selectedBranchId.value = id
}
// Lifecycle hooks
onMounted(() => {
  if (governoratesData.length > 0) {
    selectedGovernorate.value = governoratesData[0].id // Default to first governorate
    if (governoratesData[0].branches.length > 0) {
      selectedBranchId.value = governoratesData[0].branches[0].id // Default to first branch
    }
  }
})
</script>
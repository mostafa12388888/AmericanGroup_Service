<template>
  <!-- Contact Section -->
  <section id="contact" class="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
    <!-- Floating Shapes Background -->
    <div class="floating-shapes">
      <div class="floating-shape bg-gradient-to-r from-orange-400/20 to-yellow-400/20"></div>
      <div class="floating-shape bg-gradient-to-r from-blue-400/20 to-purple-400/20"></div>
      <div class="floating-shape bg-gradient-to-r from-green-400/20 to-teal-400/20"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Title -->
      <div class="text-center mb-16">
        <h1 class="text-6xl md:text-7xl font-bold mb-6">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500">
            شركة الامريكيه
          </span>
        </h1>
        <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg">
          إصلاح جميع الأدوات المنزلية
        </h2>
        <div class="service-highlight">
          <div class="grid md:grid-cols-2 gap-4 text-lg">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <span class="text-2xl">🔧</span>
              <span class="text-blue-300">خبرة أكثر من 15 عام</span>
            </div>
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <span class="text-2xl">⚡</span>
              <span class="text-green-300">خدمة سريعة وموثوقة</span>
            </div>
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <span class="text-2xl">🛠️</span>
              <span class="text-purple-300">فنيون مدربون ومعتمدون</span>
            </div>
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <span class="text-2xl">💰</span>
              <span class="text-yellow-300">أسعار منافسة وعادلة</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-5 gap-8">
        <!-- Contact Information -->
        <div class="lg:col-span-2">
          <h3 class="text-3xl font-bold mb-8 text-center">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              معلومات التواصل
            </span>
          </h3>
          
          <div class="space-y-6">
            <div 
              v-for="info in contactInfo" 
              :key="info.title" 
              class="contact-card"
              @click="goToLink(info.link)"
            >
              <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div :class="[info.iconBg, 'w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg']">
                  {{ info.icon }}
                </div>
                <div class="flex-1">
                  <h4 class="text-xl font-bold mb-2 text-white">{{ info.title }}</h4>
                  <div 
                    v-for="detail in info.details" 
                    :key="detail" 
                    :class="info.textColor || 'text-gray-300'"
                    class="text-lg font-medium"
                  >
                    {{ detail }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Services We Repair -->
          <div class="mt-8 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-2xl p-6 border border-indigo-500/50 shadow-xl">
            <h4 class="text-2xl font-bold mb-6 text-center">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                الأجهزة التي نقوم بإصلاحها
              </span>
            </h4>
            <div class="device-grid">
              <div 
                v-for="device in devices" 
                :key="device.name"
                class="device-item"
                :style="{ backgroundColor: device.bgColor }"
              >
                <span class="text-2xl mb-2 block">{{ device.icon }}</span>
                <span class="text-sm font-medium text-white">{{ device.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-3">
          <div class="bg-gradient-to-br from-slate-800/80 to-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gradient shadow-2xl">
            <h3 class="text-3xl font-bold mb-8 text-center">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                📞 طلب خدمة إصلاح فوري
              </span>
            </h3>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- الاسم بالكامل -->
              <div class="form-group">
                <label class="form-label text-emerald-300">
                  <span class="text-xl">👤</span> الاسم بالكامل *
                </label>
                <input
                  v-model="form.fullName"
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                  required
                  class="input-field border-emerald-500/30 focus:border-emerald-400"
                />
              </div>

              <!-- رقم الهاتف -->
              <div class="form-group">
                <label class="form-label text-blue-300">
                  <span class="text-xl">📱</span> رقم الهاتف (واتساب) *
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="01xxxxxxxxx"
                  required
                  class="input-field border-blue-500/30 focus:border-blue-400"
                />
              </div>

              <!-- البريد الإلكتروني -->
              <div class="form-group">
                <label class="form-label text-purple-300">
                  <span class="text-xl">✉️</span> البريد الإلكتروني (اختياري)
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="example@email.com"
                  class="input-field border-purple-500/30 focus:border-purple-400"
                />
              </div>

              <!-- نوع الجهاز -->
              <div class="form-group">
                <label class="form-label text-orange-300">
                  <span class="text-xl">🔧</span> نوع الجهاز المراد إصلاحه *
                </label>
                <select 
                  v-model="form.deviceType" 
                  required 
                  class="input-field border-orange-500/30 focus:border-orange-400"
                >
                  <option value="">اختر نوع الجهاز</option>
                  <optgroup label="🏠 أجهزة كبيرة">
                    <option value="غسالة ملابس">غسالة ملابس</option>
                    <option value="ثلاجة">ثلاجة</option>
                    <option value="مجمد">مجمد (فريزر)</option>
                    <option value="مكيف">مكيف هواء</option>
                    <option value="غسالة أطباق">غسالة أطباق</option>
                    <option value="نشافة">نشافة ملابس</option>
                    <option value="فرن">فرن</option>
                    <option value="شواية">شواية</option>
                  </optgroup>
                  <optgroup label="🚿 أجهزة التسخين والمياه">
                    <option value="سخان كهربائي">سخان مياه كهربائي</option>
                    <option value="سخان غاز">سخان مياه غاز</option>
                    <option value="كولدير">كولدير/مبرد مياه</option>
                  </optgroup>
                  <optgroup label="🍳 أجهزة المطبخ الصغيرة">
                    <option value="ميكروويف">ميكروويف</option>
                    <option value="قلاية هوائية">قلاية هوائية</option>
                    <option value="آلة قهوة">آلة قهوة</option>
                    <option value="محمصة">محمصة خبز</option>
                    <option value="خلاط">خلاط كهربائي</option>
                    <option value="عصارة">عصارة فواكه</option>
                  </optgroup>
                  <optgroup label="🧹 أخرى">
                    <option value="مكنسة كهربائية">مكنسة كهربائية</option>
                    <option value="مكواة">مكواة</option>
                    <option value="أخرى">جهاز آخر</option>
                  </optgroup>
                </select>
              </div>

              <!-- ماركة الجهاز -->
              <div class="form-group">
                <label class="form-label text-indigo-300">
                  <span class="text-xl">🏷️</span> ماركة الجهاز (اختياري)
                </label>
                <input
                  v-model="form.brand"
                  type="text"
                  placeholder="مثل: سامسونج، إل جي، توشيبا، الخ..."
                  class="input-field border-indigo-500/30 focus:border-indigo-400"
                />
              </div>

              <!-- حالة الضمان -->
              <div class="form-group">
                <label class="form-label text-teal-300">
                  <span class="text-xl">🛡️</span> حالة الضمان
                </label>
                <select 
                  v-model="form.warrantyStatus" 
                  class="input-field border-teal-500/30 focus:border-teal-400"
                >
                  <option value="">اختر حالة الضمان</option>
                  <option value="ساري">✅ الضمان ساري المفعول</option>
                  <option value="منتهي">❌ الضمان منتهي الصلاحية</option>
                  <option value="غير متأكد">❓ غير متأكد</option>
                </select>
              </div>

              <!-- العطل -->
              <div class="form-group">
                <label class="form-label text-red-300">
                  <span class="text-xl">⚠️</span> وصف المشكلة *
                </label>
                <select 
                  v-model="form.problemType" 
                  required 
                  class="input-field border-red-500/30 focus:border-red-400"
                >
                  <option value="">اختر نوع المشكلة</option>
                  <option value="لا يعمل نهائيا">🔴 الجهاز لا يعمل نهائياً</option>
                  <option value="يعمل ولا يعمل">🟡 الجهاز يعمل أحياناً ولا يعمل أحياناً</option>
                  <option value="صوت غريب">🔊 يصدر أصوات غريبة</option>
                  <option value="تسرب ماء">💧 تسرب مياه</option>
                  <option value="لا يبرد">🧊 لا يبرد (للثلاجات والمكيفات)</option>
                  <option value="لا يسخن">🔥 لا يسخن (للأفران والسخانات)</option>
                  <option value="رائحة كريهة">👃 رائحة كريهة</option>
                  <option value="مشكلة في الكهرباء">⚡ مشكلة في التيار الكهربائي</option>
                  <option value="أخرى">❓ مشكلة أخرى</option>
                </select>
              </div>

              <!-- المحافظة والمدينة -->
              <div class="grid md:grid-cols-2 gap-4">
                <div class="form-group">
                  <label class="form-label text-cyan-300">
                    <span class="text-xl">🏛️</span> المحافظة *
                  </label>
                  <select 
                    v-model="form.governorate" 
                    required 
                    class="input-field border-cyan-500/30 focus:border-cyan-400"
                  >
                    <option value="">اختر المحافظة</option>
                    <option v-for="gov in governorates" :key="gov" :value="gov">
                      {{ gov }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label text-cyan-300">
                    <span class="text-xl">🏙️</span> المدينة/المنطقة *
                  </label>
                  <input 
                    v-model="form.city" 
                    type="text" 
                    placeholder="أدخل المدينة أو المنطقة" 
                    required 
                    class="input-field border-cyan-500/30 focus:border-cyan-400" 
                  />
                </div>
              </div>

              <!-- العنوان بالتفصيل -->
              <div class="form-group">
                <label class="form-label text-lime-300">
                  <span class="text-xl">🏠</span> العنوان بالتفصيل *
                </label>
                <input 
                  v-model="form.address" 
                  type="text" 
                  placeholder="الشارع، رقم العمارة، الدور، الشقة" 
                  required 
                  class="input-field border-lime-500/30 focus:border-lime-400" 
                />
              </div>

              <!-- الوقت المفضل -->
              <div class="form-group">
                <label class="form-label text-amber-300">
                  <span class="text-xl">⏰</span> الوقت المفضل للزيارة
                </label>
                <select 
                  v-model="form.preferredTime" 
                  class="input-field border-amber-500/30 focus:border-amber-400"
                >
                  <option value="">اختر الوقت المناسب</option>
                  <option value="صباحاً (9-12)">🌅 صباحاً (9:00 - 12:00)</option>
                  <option value="ظهراً (12-3)">☀️ ظهراً (12:00 - 3:00)</option>
                  <option value="عصراً (3-6)">🌤️ عصراً (3:00 - 6:00)</option>
                  <option value="مساءً (6-9)">🌆 مساءً (6:00 - 9:00)</option>
                  <option value="أي وقت">🔄 أي وقت مناسب</option>
                </select>
              </div>

              <!-- ملاحظات إضافية -->
              <div class="form-group">
                <label class="form-label text-pink-300">
                  <span class="text-xl">📝</span> ملاحظات إضافية
                </label>
                <textarea
                  v-model="form.notes"
                  placeholder="أي تفاصيل أخرى تريد إخبارنا بها (اختياري)"
                  rows="4"
                  class="input-field resize-none border-pink-500/30 focus:border-pink-400"
                ></textarea>
              </div>

              <!-- زر الإرسال -->
              <button 
                type="submit" 
                :disabled="isSubmitting" 
                class="btn-submit"
                :class="{ 'opacity-60 cursor-not-allowed': isSubmitting }"
              >
                <span v-if="!isSubmitting" class="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                  <span class="text-xl">🔧</span>
                  <span>إرسال طلب الإصلاح الآن</span>
                </span>
                <span v-else class="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                  <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>جاري إرسال الطلب...</span>
                </span>
              </button>
            </form>

            <!-- رسالة التأكيد -->
            <div class="mt-6 text-center">
              <div class="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-4">
                <p class="text-green-300 font-medium mb-2">⚡ سيتم التواصل معك خلال 15 دقيقة من إرسال الطلب</p>
                <p class="text-emerald-300 font-medium">🛠️ خدمة عملاء متاحة 24/7 لاستقبال طلباتكم</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// استيراد الدوال المطلوبة من Vue
import { ref } from 'vue'

// SEO Meta Tags
useSeoMeta({
  title: 'شركة الخبراء - إصلاح الأدوات المنزلية',
  ogTitle: 'شركة الخبراء - إصلاح الأدوات المنزلية',
  description: 'خدمة إصلاح وصيانة جميع الأدوات المنزلية. خبرة أكثر من 15 عام - خدمة 24/7',
  ogDescription: 'خدمة إصلاح وصيانة جميع الأدوات المنزلية. خبرة أكثر من 15 عام - خدمة 24/7',
  ogImage: '/images/repair-service-og.jpg',
  twitterCard: 'summary_large_image',
})

// بيانات الاتصال مع الألوان
const contactInfo = [
  {
    title: "العنوان",
    icon: "🏢",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    textColor: "text-blue-200",
    details: ["القاهرة، مصر", "منطقة وسط البلد"],
    link: "https://goo.gl/maps/example",
  },
  {
    title: "خدمة العملاء",
    icon: "☎️",
    iconBg: "bg-gradient-to-br from-green-500 to-green-600",
    textColor: "text-green-200",
    details: ["+20 114 684 8300", "مجاني من أي خط"],
    link: "tel:+20 114 684 8300",
  },
  {
    title: "واتساب فوري",
    icon: "💬",
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    textColor: "text-emerald-200",
    details: ["+20 114 684 8300", "رد فوري 24/7"],
    link: "https://wa.me/201001234567",
  },
  {
    title: "الطوارئ",
    icon: "🚨",
    iconBg: "bg-gradient-to-br from-red-500 to-red-600",
    textColor: "text-red-200",
    details: ["+20 114 684 8300", "إصلاح طارئ"],
    link: "tel:+20 114 684 8300",
  },
  {
    title: "مواعيد العمل",
    icon: "⏰",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-500",
    textColor: "text-yellow-200",
    details: ["24 ساعة / 7 أيام", "خدمة على مدار الساعة"],
    link: "#",
  },
]

// الأجهزة مع الألوان والأيقونات
const devices = [
  { name: "غسالات ملابس", icon: "🌀", bgColor: "rgba(59, 130, 246, 0.2)" },
  { name: "ثلاجات ومجمدات", icon: "❄️", bgColor: "rgba(139, 92, 246, 0.2)" },
  { name: "مكيفات هواء", icon: "🌪️", bgColor: "rgba(34, 197, 94, 0.2)" },
  { name: "غسالات أطباق", icon: "🍽️", bgColor: "rgba(236, 72, 153, 0.2)" },
  { name: "أفران وشوايات", icon: "🔥", bgColor: "rgba(245, 158, 11, 0.2)" },
  { name: "سخانات مياه", icon: "🚿", bgColor: "rgba(20, 184, 166, 0.2)" },
  { name: "نشافات ملابس", icon: "🧽", bgColor: "rgba(168, 85, 247, 0.2)" },
  { name: "كولدير ومبردات", icon: "🥤", bgColor: "rgba(6, 182, 212, 0.2)" },
  { name: "آلات قهوة", icon: "☕", bgColor: "rgba(180, 83, 9, 0.2)" },
  { name: "محمصات خبز", icon: "🍞", bgColor: "rgba(217, 119, 6, 0.2)" },
  { name: "قلايات هوائية", icon: "🥘", bgColor: "rgba(220, 38, 127, 0.2)" },
  { name: "أجهزة صغيرة", icon: "🔌", bgColor: "rgba(107, 114, 128, 0.2)" },
]

// المحافظات
const governorates = [
  "القاهرة", "الجيزة", "القليوبية", "الإسكندرية", "الشرقية", "المنوفية", 
  "الغربية", "كفر الشيخ", "الدقهلية", "دمياط", "بورسعيد", "الإسماعيلية", 
  "السويس", "شمال سيناء", "جنوب سيناء", "البحر الأحمر", "الفيوم", 
  "بني سويف", "المنيا", "أسيوط", "سوهاج", "قنا", "الأقصر", "أسوان"
]

// بيانات الفورم
const form = ref({
  fullName: "",
  phone: "",
  email: "",
  deviceType: "",
  brand: "",
  warrantyStatus: "",
  problemType: "",
  governorate: "",
  city: "",
  address: "",
  preferredTime: "",
  notes: "",
})

const isSubmitting = ref(false)

// وظيفة إرسال النموذج
const submitForm = async () => {
  try {
    isSubmitting.value = true
    
    // محاكاة API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    // إشعار النجاح
    await $fetch('/api/repair-request', {
      method: 'POST',
      body: form.value
    })
    
    // رسالة نجاح
    alert(`✅ تم إرسال طلب الإصلاح بنجاح!
    
📋 تفاصيل الطلب:
👤 الاسم: ${form.value.fullName}
📱 الهاتف: ${form.value.phone}
🔧 الجهاز: ${form.value.deviceType}
🏠 المنطقة: ${form.value.city}, ${form.value.governorate}

⚡ سيتم التواصل معك خلال 15 دقيقة لتأكيد الموعد!`)
    
    // إعادة تعيين النموذج
    Object.keys(form.value).forEach(key => {
      form.value[key] = ""
    })
    
  } catch (error) {
    console.error('خطأ في إرسال النموذج:', error)
    alert("❌ حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.")
  } finally {
    isSubmitting.value = false
  }
}

// فتح الروابط
const goToLink = (url) => {
  if (url && url !== "#") {
    window.open(url, "_blank")
  }
}
</script>

<style scoped>
.input-field {
  @apply w-full p-4 border-2 rounded-xl bg-white/10 backdrop-blur-sm text-white text-lg transition-all duration-300 placeholder:text-white/60;
}

.input-field:focus {
  @apply outline-none shadow-lg transform -translate-y-1;
}

.input-field option {
  @apply bg-gray-800 text-white p-2;
}

.btn-submit {
  @apply w-full p-4 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-bold text-xl rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105;
}

.contact-card {
  @apply bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-white/15 hover:shadow-2xl;
}

.floating-shapes {
  @apply absolute inset-0 overflow-hidden pointer-events-none;
}

.floating-shape {
  @apply absolute rounded-full;
  animation: float 6s ease-in-out infinite;
}

.floating-shape:nth-child(1) {
  @apply w-20 h-20 top-[10%] left-[10%];
  animation-delay: 0s;
}

.floating-shape:nth-child(2) {
  @apply w-32 h-32 top-[20%] right-[15%];
  animation-delay: 2s;
}

.floating-shape:nth-child(3) {
  @apply w-16 h-16 bottom-[20%] left-[20%];
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(180deg); 
  }
}

.service-highlight {
  @apply bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 border-2 border-purple-500/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl;
}

.device-grid {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4;
}

.device-item {
  @apply border border-white/20 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:border-white/40 backdrop-blur-sm;
}


</style>
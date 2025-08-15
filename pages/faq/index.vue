
<!-- pages/faq.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <!-- Header -->
    <FrontendFaqHeader 
      :company-name="companyInfo.name"
      :description="companyInfo.description"
      :sub-description="companyInfo.subDescription"
    />

    <!-- Main Content -->
    <section class="py-16 text-right" aria-labelledby="faq-heading">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- FAQ List -->
        <FrontendFaqList 
          :items="faqItems"
          @item-toggle="handleFaqToggle"
        />

        <!-- Contact Form -->
        <FrontendFAQContactForm 
          @submit="handleFormSubmit"
          :device-options="deviceOptions"
        />

        <!-- Contact Info -->
        <FrontendFAQContactInfo 
          :phone="contactInfo.phone"
          :email="contactInfo.email"
          :working-hours="contactInfo.workingHours"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO and Meta
useHead({
  title: 'الأسئلة الشائعة - الأمريكية جروب لصيانة الأدوات الكهربائية',
  meta: [
    { name: 'description', content: 'أسئلة شائعة حول خدمات صيانة الأدوات الكهربائية المنزلية من الأمريكية جروب. خدمة موثوقة وسريعة في جميع أنحاء مصر.' },
    { name: 'keywords', content: 'صيانة أدوات كهربائية, إصلاح أفران, صيانة غسالات, الأمريكية جروب, خدمة منزلية' }
  ]
})

// Company Information
const companyInfo = {
  name: 'الأمريكية جروب',
  description: 'متخصصون في صيانة وإصلاح الأدوات الكهربائية المنزلية',
  subDescription: 'خدمة موثوقة وسريعة في جميع أنحاء مصر'
}

// Contact Information
const contactInfo = {
  phone: '+20 114 684 8300',
  email: 'info@alamerikya.com',
  workingHours: '24/7 طوال أيام الأسبوع'
}

// Device Options
const deviceOptions = [
  { value: 'oven', label: 'فرن كهربائي' },
  { value: 'washing-machine', label: 'غسالة' },
  { value: 'refrigerator', label: 'ثلاجة' },
  { value: 'dishwasher', label: 'غسالة أطباق' },
  { value: 'microwave', label: 'ميكروويف' },
  { value: 'other', label: 'أخرى' }
]

// FAQ Data
const faqItems = [
  {
    question: "كيف تقوم بتنظيف فرن التحليل الحراري (Pyrolytic Oven) من شركة وستنجهاوس؟",
    answer: "فرن التحليل الحراري ينظف نفسه تلقائيًا عند تفعيل الوضع، حيث ترتفع درجة الحرارة لحرق الدهون والرواسب. يُنصح بمسح الرماد بعد الانتهاء."
  },
  {
    question: "ما أهمية صيانة أفران وستنجهاوس بشكل دوري؟",
    answer: "الصيانة الدورية تساعد في الحفاظ على كفاءة الجهاز وتجنب الأعطال المفاجئة، مما يُطيل عمر الجهاز ويوفر تكاليف الإصلاح."
  },
  {
    question: "ما هي أشهر الأعطال التي تتطلب صيانة فورية في أفران وستنجهاوس؟",
    answer: "الأعطال تشمل: توقف التسخين، خلل في لوحة التحكم، أو عدم غلق باب الفرن بشكل جيد."
  },
  {
    question: "هل يتم استخدام قطع غيار أصلية عند صيانة أفران وستنجهاوس؟",
    answer: "نعم، نحرص دائمًا على استخدام قطع الغيار الأصلية لضمان الكفاءة والجودة والعمر الطويل للجهاز."
  },
  {
    question: "كيف يمكنني التواصل مع مركز صيانة أفران وستنجهاوس؟",
    answer: "يمكنك الاتصال على الرقم المباشر أو عبر النموذج الموجود في موقعنا الإلكتروني وسنقوم بالتواصل معك فورًا."
  },
  {
    question: "من هو وكيل وايت وستنجهاوس في مصر؟",
    answer: "نحن الوكيل المعتمد الرسمي لخدمة وصيانة منتجات وستنجهاوس في مختلف المحافظات."
  },
  {
    question: "ما أنواع أفران وستنجهاوس المتوفرة بالسوق؟",
    answer: "تتوفر أفران كهربائية، غاز، مدمجة، وأخرى مزودة بخصائص ذكية مثل الطهي بالبخار والتحكم الرقمي."
  },
  {
    question: "كيف يمكنني تقليل الأعطال والحفاظ على كفاءة الفرن؟",
    answer: "من خلال تنظيف الفرن بانتظام، وفحص الأجزاء الحساسة بشكل دوري، والابتعاد عن استخدام أدوات قد تؤذي السطح الداخلي."
  },
  {
    question: "ما طرق الدفع المتاحة عند طلب خدمة الصيانة؟",
    answer: "يمكن الدفع نقدًا أو عبر التحويل البنكي أو وسائل الدفع الإلكتروني المعتمدة."
  },
  {
    question: "هل تقدمون ضمان على خدمات ما بعد الصيانة؟",
    answer: "نعم، جميع خدماتنا تشمل ضمان لفترة محددة ضد الأعطال الناتجة عن الصيانة."
  }
]

// Event Handlers
const handleFaqToggle = ({ index, isOpen }) => {
  console.log(`FAQ item ${index} is now ${isOpen ? 'open' : 'closed'}`)
}

const handleFormSubmit = async (formData) => {
  console.log('Form submitted with data:', formData)
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Here you would send the data to your backend API
  // Example: await $fetch('/api/contact', { method: 'POST', body: formData })
}
</script>

<style>
[dir="rtl"] .ml-2 {
  margin-left: 0;
  margin-right: 0.5rem;
}

[dir="rtl"] .ml-3 {
  margin-left: 0;
  margin-right: 0.75rem;
}

[dir="rtl"] .ml-4 {
  margin-left: 0;
  margin-right: 1rem;
}
</style>

<template>
  <section class="bg-white py-12">
    <div class="container mx-auto grid md:grid-cols-3 gap-6 px-4">
      <FrontendHomeServiceCard
        title="خدمة صيانة ما بعد البيع"
        :description="`صيانة ثلاجات وايت وستنجهاوس<br>تصليح غسالات وايت وستنجهاوس<br>صيانة ميكروويف وايت وستنجهاوس<br>صيانة فريزر وايت وستنجهاوس`"
        button-text="الخط الساخن"
        button-link="#contact"
      />

      <FrontendHomeServiceCard
        title="قطع غيار أصلية"
        :description="`كونا الوكيل المعتمد نضمن استخدام قطع غيار أصلية 100٪ في جميع عمليات الصيانة والتصليح`"
        button-text="خدمة العملاء"
        button-link="#contact"
      />

      <FrontendHomeServiceCard
        title="رقم صيانة وايت وستنجهاوس"
        :description="`متاح على مدار الساعة لتلبية احتياجاتكم الطارئة واليومية على حد سواء`"
        button-text="مزيد من المعلومات"
        button-link="#more"
      />
    </div>
  </section>
</template>



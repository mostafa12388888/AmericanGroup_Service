<!-- File: components/FrontendLayoutSidebarMenu.vue -->
<template>
  <ul class="flex flex-col mt-4">
    <FrontendLayoutSidebarMenuItem label="الصفحة الرئيسية" icon="fas fa-home" to="/" />

    <FrontendLayoutSidebarMenuItem label="الخدمات" icon="fas fa-concierge-bell" hasChildren id="services">
      <FrontendLayoutSidebarMenuItem label="خدمة التلاجات" icon="fas fa-snowflake" to="/services/fridges" />
      <FrontendLayoutSidebarMenuItem label="خدمة الغسالات" icon="fas fa-water" to="/services/washing-machines" />
    </FrontendLayoutSidebarMenuItem>

    <FrontendLayoutSidebarMenuItem label="الحساب" icon="fas fa-user" to="/account" />
  </ul>
</template>

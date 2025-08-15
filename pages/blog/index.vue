/ pages/team.vue or components/TeamSection.vue
<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FrontendContactTeamMemberTeamHeader
        title="Our Experience Work<br>Experts"
        subtitle="OUR TEAM"
      />

      <FrontendContactTeamMemberTeamGrid :members="teamMembers" />
    </div>
    <FrontendContactAboutSection />

    <FrontendContactServicesSection />
  </div>
</template>

<script setup>
const teamMembers = ref([
  {
    id: 1,
    name: "Michal Hansen",
    role: "Construction Manager",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    socialLinks: [
      { type: "facebook", url: "#", active: false },
      { type: "twitter", url: "#", active: false },
      { type: "email", url: "mailto:michal@example.com", active: false },
    ],
  },
  {
    id: 2,
    name: "Brooklyn Simmy",
    role: "Office Cleaner",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    socialLinks: [
      { type: "facebook", url: "#", active: false },
      { type: "twitter", url: "#", active: true },
      { type: "email", url: "mailto:brooklyn@example.com", active: false },
    ],
  },
  {
    id: 3,
    name: "Mark Donald",
    role: "House Cleaner",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    socialLinks: [
      { type: "facebook", url: "#", active: false },
      { type: "linkedin", url: "#", active: false },
      { type: "email", url: "mailto:mark@example.com", active: false },
    ],
  },
  {
    id: 4,
    name: "Aria Paisley",
    role: "Construction Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    socialLinks: [
      { type: "facebook", url: "#", active: false },
      { type: "linkedin", url: "#", active: false },
      { type: "email", url: "mailto:aria@example.com", active: false },
    ],
  },
  {
    id: 5,
    name: "Liam Noah",
    role: "Constructor",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    socialLinks: [
      { type: "facebook", url: "#", active: false },
      { type: "linkedin", url: "#", active: false },
      { type: "email", url: "mailto:liam@example.com", active: false },
    ],
  },
  {
    id: 6,
    name: "Theodore",
    role: "Office Cleaner",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=150&h=150&fit=crop&crop=face",
    socialLinks: [
      { type: "facebook", url: "#", active: false },
      { type: "linkedin", url: "#", active: false },
      { type: "email", url: "mailto:theodore@example.com", active: false },
    ],
  },
  {
    id: 7,
    name: "Elijah Lucas",
    role: "House Cleaner",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face",
    socialLinks: [
      { type: "facebook", url: "#", active: false },
      { type: "twitter", url: "#", active: false },
      { type: "email", url: "mailto:elijah@example.com", active: false },
    ],
  },
  {
    id: 8,
    name: "Ava Sofia",
    role: "Co-Coordinator",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b1fd?w=150&h=150&fit=crop&crop=face",
    socialLinks: [
      { type: "facebook", url: "#", active: false },
      { type: "linkedin", url: "#", active: false },
      { type: "email", url: "mailto:ava@example.com", active: false },
    ],
  },
]);

// SEO Meta for Nuxt
useHead({
  title: "Our Team - Experience Work Experts",
  meta: [
    {
      name: "description",
      content:
        "Meet our experienced team of construction managers, cleaners, and coordinators.",
    },
  ],
});
</script>

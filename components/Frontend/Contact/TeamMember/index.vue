// components/TeamMember.vue
<template>
  <div class="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div class="relative mb-6">
      <div class="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200">
        <img 
          :src="member.image"
          :alt="member.name"
          class="w-full h-full object-cover"
        >
      </div>
    </div>
    
    <div class="text-center mb-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ member.name }}</h3>
      <p class="text-amber-500 text-sm font-medium">{{ member.role }}</p>
    </div>

    <FrontendContactTeamMemberSocialLinks :links="member.socialLinks" />
  </div>
</template>

<script setup>
defineProps({
  member: {
    type: Object,
    required: true,
    validator: (member) => {
      return member.name && member.role && member.image && member.socialLinks
    }
  }
})
</script>
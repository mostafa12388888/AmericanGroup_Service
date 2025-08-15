// components/TeamGrid.vue
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <FrontendContactTeamMember 
      v-for="member in members" 
      :key="member.id"
      :member="member"
    />
  </div>
</template>

<script setup>
defineProps({
  members: {
    type: Array,
    required: true
  }
})
</script>

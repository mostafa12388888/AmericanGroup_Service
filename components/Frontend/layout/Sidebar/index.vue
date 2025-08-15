<!-- File: components/EnhancedFrontendLayoutSidebar.vue -->
<template>
  <!-- Backdrop/Overlay -->
  <transition name="backdrop">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      @click="$emit('close')"
      aria-label="Close sidebar"
    ></div>
  </transition>

  <!-- Sidebar -->
  <transition name="slide">
    <aside
      v-if="isOpen"
      class="fixed top-0 left-0 h-full bg-black border-r border-gray-800 text-white z-50 overflow-hidden transition-all duration-300 ease-in-out"
      :class="sidebarClasses"
      role="navigation"
      aria-label="Navigation sidebar"
    >
      <!-- Header Section -->
      <div class="flex items-center justify-between p-4 border-b border-gray-800">
        <!-- Logo (always visible) -->
        <div class="flex items-center space-x-3 min-w-0">
          <div class="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <span class="text-white font-bold text-sm">H</span>
          </div>
          <span 
            class="font-bold text-lg text-white truncate transition-opacity duration-300"
            :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': !isExpanded }"
          >
            Helper
          </span>
        </div>
        
        <!-- Close Button (Mobile only) -->
        <button
          @click="$emit('close')"
          class="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          aria-label="Close sidebar"
        >
          <Icon name="uil:times" class="text-white text-xl" />
        </button>
      </div>

      <!-- Profile Section -->
      <div class="p-4 border-b border-gray-800">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="uil:user" class="text-white text-lg" />
          </div>
          <div 
            class="min-w-0 transition-opacity duration-300"
            :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': !isExpanded }"
          >
            <h3 class="text-white font-medium text-sm truncate">Welcome</h3>
            <p class="text-gray-400 text-xs truncate">Service User</p>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
        <!-- Home -->
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
          :class="{ 'justify-center lg:px-2': !isExpanded }"
        >
          <Icon name="uil:home" class="text-white text-xl flex-shrink-0" />
          <span 
            class="text-white font-medium transition-opacity duration-300"
            :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': !isExpanded }"
          >
            Home
          </span>
        </NuxtLink>

        <!-- Appliance Maintenance with Submenu -->
        <div>
          <button
            @click="toggleSubmenu"
            class="w-full flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
            :class="{ 'justify-center lg:px-2': !isExpanded }"
          >
            <Icon name="uil:wrench" class="text-white text-xl flex-shrink-0" />
            <span 
              class="text-white font-medium flex-1 text-left transition-opacity duration-300"
              :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': !isExpanded }"
            >
              Appliances
            </span>
            <Icon 
              name="uil:angle-down" 
              class="text-white text-sm transition-transform duration-200"
              :class="{ 
                'rotate-180': submenuOpen,
                'lg:opacity-0 lg:w-0 lg:overflow-hidden': !isExpanded 
              }"
            />
          </button>
          
          <!-- Submenu -->
          <div 
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :class="{ 
              'max-h-0': !submenuOpen,
              'max-h-96': submenuOpen,
              'lg:opacity-0 lg:max-h-0': !isExpanded
            }"
          >
            <div class="ml-6 mt-2 space-y-1 max-h-60 overflow-y-auto border-l border-gray-700 pl-4">
              <NuxtLink
                v-for="agency in agencies.slice(0, 10)"
                :key="agency.slug"
                :to="`/agencies/${agency.slug}`"
                class="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg text-sm transition-colors"
              >
                {{ agency.name }}
              </NuxtLink>
              <button class="block px-3 py-2 text-red-400 hover:text-red-300 rounded-lg text-sm transition-colors w-full text-left">
                View All ({{ agencies.length }}) →
              </button>
            </div>
          </div>
        </div>

        <!-- Maintenance Branches -->
        <NuxtLink
          to="/maintenance-branches"
          class="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
          :class="{ 'justify-center lg:px-2': !isExpanded }"
        >
          <Icon name="uil:map-marker" class="text-white text-xl flex-shrink-0" />
          <span 
            class="text-white font-medium transition-opacity duration-300"
            :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': !isExpanded }"
          >
            Branches
          </span>
        </NuxtLink>

        <!-- Blog -->
        <NuxtLink
          to="/blog"
          class="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
          :class="{ 'justify-center lg:px-2': !isExpanded }"
        >
          <Icon name="uil:newspaper" class="text-white text-xl flex-shrink-0" />
          <span 
            class="text-white font-medium transition-opacity duration-300"
            :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': !isExpanded }"
          >
            Blog
          </span>
        </NuxtLink>

        <!-- About Us -->
        <NuxtLink
          to="/about"
          class="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
          :class="{ 'justify-center lg:px-2': !isExpanded }"
        >
          <Icon name="uil:info-circle" class="text-white text-xl flex-shrink-0" />
          <span 
            class="text-white font-medium transition-opacity duration-300"
            :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': !isExpanded }"
          >
            About Us
          </span>
        </NuxtLink>

        <!-- Contact -->
        <NuxtLink
          to="/contact"
          class="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
          :class="{ 'justify-center lg:px-2': !isExpanded }"
        >
          <Icon name="uil:phone" class="text-white text-xl flex-shrink-0" />
          <span 
            class="text-white font-medium transition-opacity duration-300"
            :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': !isExpanded }"
          >
            Contact
          </span>
        </NuxtLink>
        <!-- Language Switcher -->
        <div class="mt-4">
          <FrontendLanguageSwitcher />
        </div>
      </nav>

      <!-- Footer Section -->
      <div class="p-4 border-t border-gray-800">
        <!-- Get Quote Button -->
        <NuxtLink
          to="/quote"
          class="flex items-center justify-center space-x-2 w-full bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
          :class="{ 'lg:px-2': !isExpanded }"
        >
          <Icon name="uil:clipboard-notes" class="text-xl flex-shrink-0" />
          <span 
            class="transition-opacity duration-300"
            :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': !isExpanded }"
          >
            Get Quote
          </span>
        </NuxtLink>

        <!-- Contact Info -->
        <div 
          class="mt-4 space-y-2 text-xs transition-opacity duration-300"
          :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': !isExpanded }"
        >
          <a href="tel:+1123456789" class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <Icon name="uil:phone" class="text-sm" />
            <span>(+1) 123 456 789</span>
          </a>
          <a href="mailto:info@example.com" class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <Icon name="uil:envelope" class="text-sm" />
            <span>info@example.com</span>
          </a>
        </div>

        <!-- Social Links -->
        <div 
          class="mt-4 flex justify-center space-x-3 transition-opacity duration-300"
          :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': !isExpanded }"
        >
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <Icon name="uil:facebook-f" class="text-lg" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <Icon name="uil:twitter" class="text-lg" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <Icon name="uil:instagram" class="text-lg" />
          </a>
        </div>
      </div>

      <!-- Expand/Collapse Button (Desktop) -->
      <button
        @click="toggleExpansion"
        class="hidden lg:block absolute -right-3 top-20 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors shadow-lg"
        aria-label="Toggle sidebar"
      >
        <Icon 
          name="uil:angle-left" 
          class="text-white text-sm transition-transform duration-300"
          :class="{ 'rotate-180': !isExpanded }"
        />
      </button>
    </aside>
  </transition>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Props and Emits
const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

// State
const submenuOpen = ref(false)
const isExpanded = ref(true)

// Data
const agencies = [
  { name: "Samsung", slug: "samsung" },
  { name: "LG", slug: "lg" },
  { name: "Toshiba", slug: "toshiba" },
  { name: "Whirlpool", slug: "whirlpool" },
  { name: "Sony", slug: "sony" },
  { name: "Sharp", slug: "sharp" },
  { name: "Hitachi", slug: "hitachi" },
  { name: "Panasonic", slug: "panasonic" },
  { name: "Bosch", slug: "bosch" },
  { name: "Electrolux", slug: "electrolux" },
  { name: "Miele", slug: "miele" },
  { name: "Kenwood", slug: "kenwood" },
  { name: "Philips", slug: "philips" },
  { name: "Haier", slug: "haier" },
  { name: "Daewoo", slug: "daewoo" }
]

// Computed
const sidebarClasses = computed(() => {
  return {
    'w-64': isExpanded.value || window.innerWidth < 1024,
    'w-20': !isExpanded.value && window.innerWidth >= 1024,
    'lg:hover:w-64': !isExpanded.value
  }
})

// Methods
const toggleSubmenu = () => {
  submenuOpen.value = !submenuOpen.value
}

const toggleExpansion = () => {
  isExpanded.value = !isExpanded.value
  if (!isExpanded.value) {
    submenuOpen.value = false
  }
}

// Auto-expand on hover (desktop only)
const handleMouseEnter = () => {
  if (window.innerWidth >= 1024 && !isExpanded.value) {
    // Temporarily show content on hover
  }
}

// Initialize
onMounted(() => {
  // Set initial state based on screen size
  if (window.innerWidth >= 1024) {
    isExpanded.value = true
  }
})
</script>

<style scoped>
/* Backdrop transitions */
.backdrop-enter-active, .backdrop-leave-active {
  transition: opacity 0.3s ease;
}
.backdrop-enter-from, .backdrop-leave-to {
  opacity: 0;
}

/* Sidebar slide transitions */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}

/* Custom scrollbar for submenu */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #374151;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #6B7280;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #9CA3AF;
}

/* Smooth transitions for all elements */
* {
  transition-property: opacity, width, max-height, transform;
}

/* Active link styles */
.router-link-active {
  @apply bg-gray-800 text-red-400;
}

/* Hover effects */
.group:hover .group-hover\:text-red-400 {
  color: #f87171;
}
</style>
<template>
  <div class="relative" ref="dropdownRef">
    <!-- Language Switcher Button -->
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 group w-full"
      :class="{ 'justify-center lg:px-2': isCollapsed }"
      aria-label="Change language"
    >
      <Icon name="uil:globe" class="text-white text-xl flex-shrink-0" />
      <span
        class="text-white font-medium transition-opacity duration-300"
        :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': isCollapsed }"
      >
        {{ currentLanguage.name }}
      </span>
      <Icon
        name="uil:angle-down"
        class="text-white text-sm transition-transform duration-200 ml-auto"
        :class="{
          'rotate-180': isDropdownOpen,
          'lg:opacity-0 lg:w-0 lg:overflow-hidden': isCollapsed
        }"
      />
    </button>

    <!-- Dropdown Menu -->
    <transition name="dropdown">
      <div
        v-if="isDropdownOpen"
        class="absolute bottom-full left-0 mb-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50"
        :class="{ 'w-48': !isCollapsed, 'w-full': isCollapsed }"
      >
        <div class="py-2">
          <button
            v-for="language in locales"
            :key="language.code"
            @click="changeLanguage(language.code)"
            class="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-800 transition-colors"
            :class="{
              'bg-gray-800 text-red-400': locale.value === language.code,
              'text-gray-300': locale.value !== language.code,
              'justify-center px-2': isCollapsed
            }"
          >
            <Icon :name="language.flag" class="text-lg flex-shrink-0" />
            <span
              class="text-sm font-medium transition-opacity duration-300"
              :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': isCollapsed }"
            >
              {{ language.name }}
            </span>
            <Icon
              v-if="locale.value === language.code"
              name="uil:check"
              class="text-red-400 text-sm ml-auto"
              :class="{ 'lg:opacity-0 lg:w-0 lg:overflow-hidden': isCollapsed }"
            />
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCookie } from '#app'
import { useRouter } from 'vue-router'
import { useSwitchLocalePath } from '#i18n'

// Props
const props = defineProps({
  isCollapsed: {
    type: Boolean,
    default: false
  }
})

// i18n instance
const { locale } = useI18n()
const router = useRouter()
const switchLocalePath = useSwitchLocalePath()

// Reactive state
const isDropdownOpen = ref(false)
const dropdownRef = ref(null)

// Cookie to save selected language
const langCookie = useCookie('site_language')

// Available languages
const locales = [
  { code: 'en', name: 'English', flag: 'twemoji:flag-united-states', dir: 'ltr' },
  { code: 'ar', name: 'العربية', flag: 'twemoji:flag-egypt', dir: 'rtl' }
]

// Computed
const currentLanguage = computed(() => {
  return locales.find(lang => lang.code === locale.value) || locales[0]
})

// Methods
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const emit = defineEmits(['languageChanged'])

const changeLanguage = async (languageCode) => {
  isDropdownOpen.value = false

  // حفظ اللغة في i18n
  locale.value = languageCode

  // حفظ في الكوكي
  langCookie.value = languageCode

  // ضبط الاتجاه
  const selectedLanguage = locales.find(lang => lang.code === languageCode)
  if (selectedLanguage) {
    document.documentElement.dir = selectedLanguage.dir
    document.documentElement.lang = languageCode
  }

  // تغيير الرابط الحالي للغة المختارة
  const path = switchLocalePath(languageCode)
  router.push(path)

  // Emit events
  emit('languageChanged', languageCode)
  window.dispatchEvent(new CustomEvent('language-change', { detail: { language: languageCode } }))
}

// Close dropdown on outside click
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDropdownOpen.value = false
  }
}

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('click', handleClickOutside)

  // Load language from cookie if exists
  if (langCookie.value && langCookie.value !== locale.value) {
    changeLanguage(langCookie.value)
  } else {
    // Ensure direction is set for current locale
    const currentLang = locales.find(lang => lang.code === locale.value)
    if (currentLang) {
      document.documentElement.dir = currentLang.dir
      document.documentElement.lang = locale.value
    }
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Dropdown animations */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
  transform-origin: bottom center;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>

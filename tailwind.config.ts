// / tailwind.config.js
import { colors } from './assets/js/colors.js'

export default {
  theme: {
    extend: {
      colors,
    },
  },
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './assets/css/*.{css,ts}',
    './locales/*.{css,ts,json,js}',
  ],
  plugins: [],
}
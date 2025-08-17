<!-- File: components/FrontendLayoutHeader.vue -->
<template>
  <header class="w-full relative" role="banner">
    <div class="flex w-full">
      <!-- Logo -->
      <div
        class="flex-none flex items-center justify-center bg-white border-r border-gray-200"
      >
        <NuxtLink to="/" aria-label="Go to homepage" class="flex items-center">
          <img
            src="../../../public/images/logo/logog.png"
            alt="AMERICAN GROUP"
            class="h-20 w-full text"
          />
          <span class="font-bold text-lg text-gray-800 hidden md:inline">
            AMERICAN GROUP
          </span>
        </NuxtLink>
      </div>

      <!-- Right Section -->
      <div class="flex-1 flex flex-col">
        <!-- Top Bar -->
        <div class="bg-black text-white text-sm hidden lg:block">
          <div
            class="container mx-auto flex justify-between items-center py-2 px-4"
          >
            <div class="flex space-x-6">
              <a
                href="tel:+1123456789"
                class="flex items-center space-x-1 hover:text-red-500"
              >
                <Icon name="uil:phone" class="text-white" />
                <span>(+1) 123 456 789</span>
              </a>
              <a
                href="mailto:info@example.com"
                class="flex items-center space-x-1 hover:text-red-500"
              >
                <Icon name="uil:envelope" class="text-white" />
                <span>info@example.com</span>
              </a>
            </div>
            <nav>
              <ul class="flex space-x-4">
                <li>
                  <a href="#" class="hover:text-red-500"
                    ><Icon name="uil:facebook-f"
                  /></a>
                </li>
                <li>
                  <a href="#" class="hover:text-red-500"
                    ><Icon name="uil:twitter"
                  /></a>
                </li>
                <li>
                  <a href="#" class="hover:text-red-500"
                    ><Icon name="uil:instagram"
                  /></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <!-- Main Navbar -->
        <div class="bg-white shadow-sm hidden lg:block">
          <div
            class="container mx-auto flex justify-between items-center py-4 px-4"
          >
            <nav>
              <ul class="flex space-x-8 font-medium text-gray-700">
                <li>
                  <NuxtLink to="/" class="hover:text-red-500">Home</NuxtLink>
                </li>

                <!-- Dropdown Menu -->
                <li class="relative group">
                  <button class="hover:text-red-500 focus:outline-none">
                    Appliance Maintenance
                  </button>
                  <ul
                    class="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-200 z-50 max-h-64 overflow-y-auto"
                  >
                    <li v-for="agency in agencies" :key="agency.slug">
                      <NuxtLink
                        :to="`/agencies/${agency.slug}`"
                        class="block px-4 py-2 hover:bg-gray-100"
                      >
                        {{ agency.name }}
                      </NuxtLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <NuxtLink
                    to="/maintenance-branches"
                    class="hover:text-red-500"
                    >Maintenance Branches</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/blog" class="hover:text-red-500"
                    >Blog</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/about" class="hover:text-red-500"
                    >About Us</NuxtLink
                  >
                </li>

                <li>
                  <NuxtLink to="/contact" class="hover:text-red-500"
                    >Contact</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/faq" class="hover:text-red-500"
                    >Frequently Asked Questions</NuxtLink
                  >
                </li>
              </ul>
            </nav>

            <!-- Get a Quote Button -->
            <NuxtLink
              to="/quote"
              class="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Get a Quote
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Icon -->
    <div class="absolute top-4 right-4 lg:hidden">
      <button
        @click="$emit('toggleSidebar')"
        class="p-2 rounded bg-white shadow"
      >
        <Icon name="uil:bars" class="text-black text-2xl" />
      </button>
    </div>
  </header>
</template>

<script setup>
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
  { name: "Daewoo", slug: "daewoo" },
];
</script>

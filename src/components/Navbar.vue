<template>
  <nav class="bg-gray-900 shadow-md rounded-b-sm">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Logo (Visible only on desktop) -->
        <div class="flex-shrink-0 hidden sm:block">
          <a href="#" class="text-4xl font-bold text-gray-100 p-8">
            Luana
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <button @click="toggleMenu" type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Navbar Links (Desktop) -->
        <div class="hidden sm:flex sm:items-center sm:justify-end sm:ml-6 w-full">
          <template v-for="(link, index) in navLinks" :key="index">
            <a v-if="link.content || link.download"
              :href="link.content || link.download"
              :download="link.download || undefined"
              class="px-3 py-2 mr-6 rounded-md text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
              {{ link.name }}
            </a>
          </template>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <template v-for="(link, index) in navLinks" :key="index">
            <a v-if="link.content || link.download"
              :href="link.content || link.download"
              :download="link.download || undefined"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
              {{ link.name }}
            </a>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const menuOpen = ref(false);
const navLinks = reactive([
  { 
    name: 'Resume', 
    content: "public/resume-luana.pdf",
    download: "resume-luana.pdf" 
  },
  { 
    name: 'Projects', 
    content: "https://github.com/luhyxi", 
    download: null 
  },
]);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>
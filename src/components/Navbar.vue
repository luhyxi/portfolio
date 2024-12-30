<template>
  <nav class="bg-gray-900 shadow-md rounded-b-sm">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Logo (Visible only on mobile) -->
        <div v-if="!isMobileView" class="absolute inset-y-0 flex items-center">
          <a href="#" class="flex-shrink-1 text-4xl font-bold text-gray-100 p-8">
            Luana
          </a>
        </div>

        <!-- Popup -->
        <teleport to="body">
          <div v-if="popupVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white rounded-lg p-6 w-1/3">
              <h2 class="text-lg font-bold mb-4">Popup Title</h2>
              <p>You clicked on: {{ popupContent }}</p>
              <!-- Close button -->
              <button @click="popupVisible = false" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                Close
              </button>
            </div>
          </div>
        </teleport>

        <!-- Mobile menu button -->
        <div class="absolute inset-y-0 flex items-center sm:hidden top-0 right-0">
          <button @click="toggleMenu" type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Navbar Links (Desktop) -->
        <div class="hidden sm:flex sm:items-left sm:justify-end sm:ml-6 w-full p-8">
        <button
          v-for="(link, index) in navLinks"
          :key="index"
          @click="$emit('open-popup')"
          class="px-3 py-2 mr-6 rounded-md text-base font-medium text-gray-200 hover:bg-gray-100 hover:text-gray-700"
        >
          {{ link.name }}
        </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a v-for="(link, index) in navLinks" :key="index" :href="link.content" :class="[
            'block px-3 py-2 rounded-md text-base font-medium',
            link.name === activeLink
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
          ]">
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// TODO: Add the same pop-up functionality to the mobile version 

import { ref, reactive, onMounted, onUnmounted } from 'vue';

// Reactive data for menu state and links
const menuOpen = ref(false);
const activeLink = ref('Contact');
const navLinks = reactive([
  { name: 'Resume', content: '1' },
  { name: 'Projects', content: '2' },
  { name: 'Contact', content: '3' },
]);

// State for tracking popup visibility and content
const popupVisible = ref(false);
const popupContent = ref('');

// State to track mobile view
const isMobileView = ref(window.innerWidth < 640);

// Function to toggle the menu
function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

// Listener to update mobile view on resize
function updateView() {
  isMobileView.value = window.innerWidth < 640;
}

onMounted(() => {
  window.addEventListener('resize', updateView);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateView);
});
</script>

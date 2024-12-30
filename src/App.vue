<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Resume from './components/Resume.vue';

const isNavbarVisible = ref(true);
let lastScrollPosition = 0;
const popupVisible = ref(false);

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;

  // If scrolling down, hide the navbar; if scrolling up, show it
  if (currentScrollPosition > lastScrollPosition) {
    isNavbarVisible.value = false; // Hide the navbar
  } else {
    isNavbarVisible.value = true; // Show the navbar
  }

  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Function to open the popup
const openPopup = () => {
  popupVisible.value = true;
};

// Function to close the popup
const closePopup = () => {
  popupVisible.value = false;
};
</script>

<template>
  <!-- Add a class to show/hide the navbar based on the scroll direction -->
  <header :class="[
    'bg-zinc-900 sticky top-0 z-10 transition-transform duration-300',
    isNavbarVisible ? 'translate-y-0' : '-translate-y-full',
    popupVisible ? 'blur-sm' : '' // Apply blur when popup is visible
  ]">
    <Navbar @open-popup="openPopup" />
  </header>

  <main :class="['min-h-screen bg-zinc-900', popupVisible ? 'blur-sm' : '']">
    <Hero />
    <About />
    <Resume />
  </main>

  <!-- Popup -->
  <teleport to="body">
    <div v-if="popupVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white rounded-lg p-6 w-1/3">
        <h2 class="text-lg font-bold mb-4">Popup Title</h2>
        <p>This popup affects both the header and the main content.</p>

        <!-- Close button -->
        <button @click="closePopup" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  </teleport>
</template>

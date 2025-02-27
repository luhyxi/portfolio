<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue';
import Resume from './components/Resume.vue';

const isNavbarVisible = ref(true);
let lastScrollPosition = 0;

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;
  
  // If scrolling down, hide the navbar; if scrolling up, show it
  if (currentScrollPosition > lastScrollPosition) {
    isNavbarVisible.value = false;  // Hide the navbar
  } else {
    isNavbarVisible.value = true;   // Show the navbar
  }

  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- Add a class to show/hide the navbar based on the scroll direction -->
  <header :class="['bg-zinc-900 sticky top-0 z-10 transition-transform duration-300', isNavbarVisible ? 'translate-y-0' : '-translate-y-full']">
    <Navbar />
  </header>
  
  <main class="min-h-screen bg-zinc-900">
    <Hero />
    <About />
    <Resume />
  </main>
</template>


<script setup lang="ts">

</script>
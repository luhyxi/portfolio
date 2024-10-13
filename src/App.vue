<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue';

</script>

<template>
  <header class="bg-zinc-900">
    <Navbar />
  </header>
  
  <main class="min-h-screen bg-zinc-900">
    <Hero />
    <About />
  </main>
</template>
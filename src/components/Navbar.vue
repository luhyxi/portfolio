<template>
  <nav class="bg-gray-900 shadow-md rounded-b-sm">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="absolute inset-y-0 flex items-center">
          <a href="#" class="flex-shrink-1 text-4xl font-bold text-gray-100 p-8">
            Luana
          </a>
        </div>
        <!-- Mobile menu button -->
        <div class="absolute inset-y-0 flex items-center sm:hidden">
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
          <a v-for="(link, index) in navLinks" :key="index" :href="link.url"
            :class="['px-3 py-2 rounded-md text-base font-medium mr-6', 
              link.name === activeLink ? 'border-2 text-gray-100 border-bluewood shadow-lg' : 'text-gray-200 hover:bg-gray-100 hover:text-gray-700']">
            {{ link.name }}
          </a>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a v-for="(link, index) in navLinks" :key="index" :href="link.url"
            :class="['block px-3 py-2 rounded-md text-base font-medium', 
              link.name === activeLink ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900']">
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      activeLink: 'Contact', // Set 'Contact' as the active link
      navLinks: [
        { name: 'Resume', url: '#' },
        { name: 'Projects', url: '#' },
        { name: 'Contact', url: '#' }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

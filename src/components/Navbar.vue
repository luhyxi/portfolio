<template>
  <nav class="bg-gray-800 shadow-md rounded-b-sm">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="absolute inset-y-0 flex items-center">
          <a href="#" class="font-cool flex-shrink-0 text-xl font-bold text-gray-100">
            Luhyxi
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
        <div class="hidden sm:flex sm:items-left sm:justify-end sm:ml-6 w-full">
          <a href="#"
            class="text-gray-200 hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#"
            class="text-gray-200 hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Resume</a>
          <a href="#"
            class="text-gray-200 hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
          <a href="#"
            class="text-gray-200 hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#"
          class="block text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Home</a>
        <a href="#"
          class="block text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Resume</a>
        <a href="#"
          class="block text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Projects</a>
        <a href="#"
          class="block text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style>
/* Optional custom styles */
</style>
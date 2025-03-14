import { createApp } from 'vue'
import './assets/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css' // Import AOS styles
import App from './App.vue'


createApp(App).mount('#app')
AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });
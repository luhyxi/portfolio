import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'


export default defineConfig({
  base: "/portfolio/",
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: 'public'
})

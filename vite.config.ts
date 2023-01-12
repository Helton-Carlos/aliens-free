import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueTypeImports(),
    vue(),
  ], 
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

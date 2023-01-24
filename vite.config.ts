import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueTypeImports(),
    vue(),
  ], 
  resolve: {
    alias: [
      { find: "@/", replacement: "/src" },
      { find: "@/assets", replacement: "/src/assets" },
      { find: "@/server", replacement: "/src/server" },
      { find: "@/types", replacement: "/src/types" },
      { find: "@/components", replacement: "/src/components" },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

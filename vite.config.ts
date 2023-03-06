import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueTypeImports(),
    VitePWA({ registerType: 'autoUpdate' })
  ], 
  resolve: {
    alias: [
      { find: "@/", replacement: "/src" },
      { find: "@/assets", replacement: "/src/assets" }, 
      { find: "@/server", replacement: "/src/server" },
      { find: "@/assets", replacement: "/src/assets" },
      { find: "@/store", replacement: "/src/store" },
      { find: "@/components", replacement: "/src/components" },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

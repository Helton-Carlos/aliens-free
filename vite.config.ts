import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    port: 4000
  },
  plugins: [
    vue(),
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

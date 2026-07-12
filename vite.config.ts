import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icon.svg'],
      manifest: {
        name: 'On',
        short_name: 'On',
        description: 'On - Premium Sportswear',
        theme_color: '#863bff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/en',
        icons: [
          {
            src: '/icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-dom')) {
            return 'vendor-react-dom'
          }

          if (id.includes('react')) {
            return 'vendor-react'
          }

          if (id.includes('react-router')) {
            return 'vendor-router'
          }

          if (id.includes('@tanstack/react-query')) {
            return 'vendor-query'
          }

          if (id.includes('framer-motion')) {
            return 'vendor-motion'
          }

          if (id.includes('swiper')) {
            return 'vendor-swiper'
          }

          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      },
    },
    target: "esnext",
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap: false,
  },
})

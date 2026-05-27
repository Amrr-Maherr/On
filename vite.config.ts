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
        start_url: '/',
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
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router'
          }
          if (id.includes('node_modules/@tanstack/react-query')) {
            return 'vendor-query'
          }
          if (id.includes('node_modules/i18next') || id.includes('node_modules/react-i18next')) {
            return 'vendor-i18n'
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion')) {
            return 'vendor-motion'
          }
          if (id.includes('node_modules/@reduxjs/toolkit') || id.includes('node_modules/react-redux')) {
            return 'vendor-state'
          }
          if (id.includes('node_modules/swiper')) {
            return 'vendor-swiper'
          }
          if (id.includes('node_modules/@base-ui') || id.includes('node_modules/@radix-ui')) {
            return 'vendor-ui'
          }
          if (id.includes('node_modules/axios')) {
            return 'vendor-http'
          }
          if (id.includes('node_modules/react-hook-form')) {
            return 'vendor-forms'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons'
          }
          if (id.includes('node_modules/react-helmet-async') || id.includes('node_modules/react-helmet')) {
            return 'vendor-seo'
          }
        },
      },
    },
  },
})

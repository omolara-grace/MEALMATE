import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module'
      },
      includeAssets: [
        'favicon.svg',
        'favicon.png',
        'apple-touch-icon.png',
        'offline-fallback.svg',
        'pwa-192x192.png',
        'pwa-512x512.png',
        'manifest.webmanifest'
      ],
      manifest: {
        name: 'MealMate',
        short_name: 'MealMate',
        description: 'A premium meal-planning and recipe discovery experience with smart calendars and student nutrition.',
        theme_color: '#C66B4E',
        background_color: '#FAF5EF',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        runtimeCaching: [
          {
            // Cache public recipe images from Unsplash or local assets
            urlPattern: ({ request, url }) =>
              request.destination === 'image' &&
              (url.origin.includes('unsplash.com') || url.origin === self.location.origin),
            handler: 'CacheFirst',
            options: {
              cacheName: 'mealmate-recipe-images-v1',
              expiration: {
                maxEntries: 80,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            // Core fonts and static styles
            urlPattern: ({ request }) =>
              request.destination === 'style' ||
              request.destination === 'script' ||
              request.destination === 'worker',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'mealmate-static-resources-v1'
            }
          }
        ]
      }
    })
  ]
});

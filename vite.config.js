import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    host: true,
    allowedHosts: [
      'localhost',
      '.ngrok-free.dev',
      '.ngrok.io'
    ]
  }
})

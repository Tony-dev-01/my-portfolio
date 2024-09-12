import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/introduction": {
        target: "http://localhost:3000",
        secure: false,
      },
      "/about": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
})

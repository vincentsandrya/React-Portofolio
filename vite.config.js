import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this is set correctly
  build: {
    assetsInlineLimit: 0, // Disable inlining small assets
  }
})

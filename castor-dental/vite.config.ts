import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 'spa' lets `vite preview` route any path to the closest index.html,
  // which matches Vercel's cleanUrls behavior with the prerendered folder
  // layout (dist/about/index.html → /about, etc.).
  appType: 'spa',
  build: {
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
  },
})

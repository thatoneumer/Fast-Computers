import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    // SPA fallback: serve index.html for every path the dev server can't find
    // so that History-API routes like /shop, /about don't return 404 on refresh
    middlewareMode: false,
  },

  preview: {
    // Same for `vite preview` (production preview)
  },

  // Vite's built-in way to redirect all 404s to index.html in SPA mode
  appType: 'spa',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const spaFallback = {
  name: 'spa-fallback',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (!req.url.includes('.') && !req.url.startsWith('/@') && req.url !== '/') {
        req.url = '/'
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), spaFallback],
  publicDir: 'public',
})

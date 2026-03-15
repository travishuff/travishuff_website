import { defineConfig, type Plugin, type ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import type { IncomingMessage, ServerResponse } from 'node:http'

const spaFallback: Plugin = {
  name: 'spa-fallback',
  configureServer(server: ViteDevServer) {
    server.middlewares.use((req: IncomingMessage, _res: ServerResponse, next: () => void) => {
      if (req.url && !req.url.includes('.') && !req.url.startsWith('/@') && req.url !== '/') {
        req.url = '/'
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), spaFallback],
  publicDir: 'public',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    exclude: ['e2e/**', 'node_modules/**'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
  },
})

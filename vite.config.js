import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Se fizerem deploy em phish-n-chips25.github.io (user/org page) -> base: '/'
// Se fizerem deploy em phish-n-chips25.github.io/Challange-3/ -> base: '/Challange-3/'
// Alterar conforme o vosso cenário antes de fazer `npm run build`.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
})

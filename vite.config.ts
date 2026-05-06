import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tanstackRouter from '@tanstack/router-plugin/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    tanstackRouter({ routesDirectory: './src/routes', generatedRouteTree: './src/routeTree.gen.ts', target: "react", autoCodeSplitting: true }),
    react(),
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  css: { preprocessorOptions: { scss: { additionalData: '@use "@/styles/tokens" as *;\n' } } },
  base: '/',
})

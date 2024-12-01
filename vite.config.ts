import { defineConfig } from 'vite'

export default defineConfig({
  base: '/aoc.viz/',
  plugins: [],
  build: {
    outDir: './build',
    rollupOptions: {},
  },
})
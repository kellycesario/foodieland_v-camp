import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/Atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/Molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/Organisms'),
      '@pages': path.resolve(__dirname, 'src/components/Pages'),
      '@icons': path.resolve(__dirname, 'public/assets/icons'),
      '@img': path.resolve(__dirname, 'public/assets/img'),
      '@temp': path.resolve(__dirname, 'src/components/Refactor'),
  },
  },	
})

import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import Checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
      react(),
      eslint(),
      Checker({
        typescript: true,
        overlay: true,
      }),
  ],
  server: {
    port: 3000
  }
})

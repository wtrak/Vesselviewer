import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-repo-name' with your actual repo name
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})

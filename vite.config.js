import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change `repo-name` to your GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Madhuri-0310/weather_app',  
})

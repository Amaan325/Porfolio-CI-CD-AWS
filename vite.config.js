import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base: '/',  // <-- set this to your repo name

  plugins: [
    tailwindcss(),
  ],
})
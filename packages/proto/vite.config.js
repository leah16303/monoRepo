import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        workout: resolve(__dirname, 'WorkoutCalendar.html'),
         login: resolve(__dirname, 'login.html'),
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})https://github.com/login?client_id=01ab8ac9400c4e429b23&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D01ab8ac9400c4e429b23%26prompt%3Dselect_account%26redirect_uri%3Dhttps%253A%252F%252Fvscode.dev%252Fredirect%26scope%3Duser%253Aemail%26state%3Dvscode%25253A%25252F%25252Fvscode.github-authentication%25252Fdid-authenticate%25253Fnonce%25253Dff9a126eea21eb0a%252526windowId%25253D2


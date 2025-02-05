import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This allows the server to be accessed externally, e.g. through your domain
    host: '0.0.0.0',  // Make the server listen on all network interfaces
    port: 4173,  // Ensure the port matches the port your app is running on
  },
  preview: {
    // Allow requests from your domain to avoid the "Blocked request" error
    allowedHosts: ['fees.busketbell.in'],  // Add your domain here
  },
})

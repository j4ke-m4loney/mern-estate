// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({

  server: { 
    proxy: {
      '/api': {
        target: "http://localhost:3000", // Load before when /api is used
        secure: false,
      },
    },
  },

  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ Alias for `src/`
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'client', // IMPORTANTE: le decimos a Vite que el proyecto está en client
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'), // ahora apunta bien
    },
  },
  build: {
    outDir: 'dist', // salida dentro de client/dist
  },
});

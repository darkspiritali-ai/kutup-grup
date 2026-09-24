import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(projectRoot, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion') || id.includes('/lenis/')) {
              return 'motion-vendor';
            }
            return 'vendor';
          }

          if (
            id.includes('/src/lib/blog/')
            || id.endsWith('/src/lib/blog-data.ts')
            || id.endsWith('/src/lib/services-data.ts')
            || id.endsWith('/src/lib/service-editorial-copy.ts')
          ) {
            return 'content-data';
          }

          return undefined;
        },
      },
    },
  },
});

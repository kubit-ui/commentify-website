import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: 'jsdom',

    coverage: {
      reporter: ['text', 'html', 'json', 'lcov'],
      reportsDirectory: '__reports__/test-coverage',
      all: true,
      thresholds: {
        statements: 0,
        branches: 0,
        functions: 0,
        lines: 0,
      },
    },
    reporters: ['default', 'html'],
    outputFile: {
      html: '__reports__/report.html',
    },
    css: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

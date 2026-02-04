import path from 'path'
import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'
import tsconfigPaths from 'vite-tsconfig-paths'
import { reactRouter } from '@react-router/dev/vite'

export default defineConfig({
  base: '/maxim-web/',
  css: { transformer: 'postcss' },
  build: { outDir: 'dist' },

  plugins: [
    reactRouter(),
    tsconfigPaths(),
    babel(),
  ],

  resolve: {
    alias: [
      // ✅ subpath’leri de yakalasın diye regex
      { find: /^@auth\/create(\/.*)?$/, replacement: path.resolve(__dirname, './src/__create/@auth/create') },
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  },
})

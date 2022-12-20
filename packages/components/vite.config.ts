import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';
import macrosPlugin from "vite-plugin-babel-macros";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    macrosPlugin(),
    typescript(),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'components',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react'],
    },
  }
})
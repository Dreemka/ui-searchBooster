/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import pkg from './package.json' assert { type: 'json' }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue() , dts({
    insertTypesEntry: true,
  })],
  test: {
    // ...
  },
  server: {
    port: 5319,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "esnext",
    lib: {
      entry: resolve(__dirname, "src/library/index.ts"),
      name: "SearchBoosterLib",
      fileName: (format) => `ui-searchbooster.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      ...Object.keys(pkg.dependencies),
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})

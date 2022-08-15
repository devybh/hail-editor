import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      insertTypesEntry: true
    })
  ],
  server: {},
  build: {
    lib: {
      entry: './src/HailEditor/index.ts',
      name: 'HailEditor'
    },
    rollupOptions: {
      external: ['lodash']
    }
  }
})

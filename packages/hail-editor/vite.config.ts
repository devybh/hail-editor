import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import * as path from 'path'

const isDevelopment = process.argv.includes('development')
const isProduction = process.argv.includes('production')

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }]
  },
  server: {},
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'HailEditor'
      // fileName: (format) => `hail-editor.${format}.js`
    },
    rollupOptions: {
      external: ['lodash'],
      output: {
        globals: {
          lodash: 'lodash'
        }
      }
    }
  }
})
// if (isProduction) config.publicDir = false
// config.publicDir = false

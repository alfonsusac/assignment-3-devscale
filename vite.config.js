import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

export default {
  root: "src",
  build: {
    outDir: "../dist"
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  }
}
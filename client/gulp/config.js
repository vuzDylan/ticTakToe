export default {
  build: {
    css: './dist/css',
    js: './dist/js',
    jsMain: './dist/js/main.js',
    dir: './dist',
  },
  source: {
    jsMain: './app/js/app.jsx',
    sass: './app/sass/**/**.sass',
    scripts: './app/js/**/*.@(js|jsx)',
    html: './app/index.html'
  },
}

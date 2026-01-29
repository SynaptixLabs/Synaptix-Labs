// Before (causing error)
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
  
  // After (fixed)
  module.exports = {
    plugins: {
      '@tailwindcss/postcss': {}, // Using the dedicated PostCSS plugin
      autoprefixer: {},
    }
  }
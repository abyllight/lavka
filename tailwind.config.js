module.exports = {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
  ],
  theme: {
      extend: {
          colors: {
              primary: '#ef4444'
          }
      },
  },
  plugins: [
      require('@tailwindcss/line-clamp')
  ],
}

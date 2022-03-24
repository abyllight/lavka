module.exports = {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
  ],
  theme: {
      extend: {
          colors: {
              primary: '#212121'
          }
      },
  },
  plugins: [
      require('@tailwindcss/line-clamp')
  ],
}

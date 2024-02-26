module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#b91c1c', // Replace with the primary color used in the webpage
        'secondary': '#1e40af', // Replace with the secondary color used in the webpage
        // Add other colors from the webpage as needed
      },
      fontFamily: {
        sans: [
          'Helvetica',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
}
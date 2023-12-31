/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'navbar-color':'rgba(8, 5, 2, 0.8)',
        'primary': 'rgba(8, 5, 2, 1)',
        'textPrimary': 'rgba(245, 235, 224, 1)',
        'buttonSecondary': 'rgba(217, 217, 217, 0.2)',
        'footer': 'rgba(39, 18, 58, 1)'
      },
      fontFamily: {
        primaryFont: ['Montserrat']
      },
      backgroundImage: {
        'images': "url('/assets/baliii.png')"
      }
    },
  },
  plugins: [],
}


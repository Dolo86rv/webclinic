/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'c-rose':'#8b2f8b',
        'c-fondo':'#f2eaf2',
        'c-malva':'#3b1a5e',
      },
      spacing:{
        '66px':'4.125rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

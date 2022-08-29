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
        '120px':'7.5rem',
        '10px':'0.625rem',
        '5px':'0.313rem',
      },
      backgroundImage: {
        'head-lienzo': "url('../img/Lienzo-top160.png')",
        'footer-lienzo': "url('../img/Lienzo-bot160.png')",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

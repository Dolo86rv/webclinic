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
        '104px':'6.5rem',
        '88px': '5.5rem'
      },
      backgroundImage: {
        'head-lienzo': "url('../img/Lienzo-top160.png')",
        'footer-lienzo': "url('../img/Lienzo-bot160.png')",
      },
      screens: {
        's': '330px',
        // => @media (min-width: 330px) { ... }
        '1s': '412px',
        // => @media (min-width: 412px) { ... }
        '2s': '325px',
        '3s': '298px',
        '4s':'258px',
        '1lg':'991px',
        
      },
      fontSize: {
        's': '0.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

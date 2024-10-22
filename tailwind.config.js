/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens:{
      'md':'730px',
      'lg':'950px',
      'xl':'1348px'
    },
 
    extend: {  
      fontFamily: {
      "playfairD":["Playfair Display","serif"],
      "inria":["Inria Serif","serif"],
      "khula":["Khula","sans-serif"],
      "jaldi":["Jaldi","sans-serif"],
     },
    },
  },
  plugins: [
  ],
}


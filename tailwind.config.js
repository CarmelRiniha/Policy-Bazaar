/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors:{
      'footer-bg' : '#091a38',
      'white' : 'white',
      'footer-gray' :  '#b3bac5',
      'help-head':'#253858',
      'help-line':'#0065ff',
      'help-box':'#5e6384',
    },

    extend: {
      fontFamily : {
        'roboto' :  ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


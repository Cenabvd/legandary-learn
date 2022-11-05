/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    colors:{
      'orange-900': '#ff5900',
      'orange-800': '#ff7c33',
      'orange-700': '#ff8c4d',
      'orange-600': '#ff9d66',
      'orange-500': '#ffad80',
      'orange-400': '#ffbd99',
      'orange-300': '#ffceb3',
      'orange-200': '#ffdecc',
      'orange-100': '#ffefe6',
      'orange-shadow': '#d14900',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}

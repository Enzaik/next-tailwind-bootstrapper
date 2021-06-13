const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./components/**/*.{js,jsx}', './pages/**/*.{js,jsx}'],
    options: {
      safelist: ['bg-green-400', 'bg-purple-600', 'bg-pink-600'],
    },
  },
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
};

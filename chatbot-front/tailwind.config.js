/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E3287A',
        'primary-light': '#FFE5EE',
        'primary-dark': '#C81E66'
      }
    },
  },
  plugins: [],
};
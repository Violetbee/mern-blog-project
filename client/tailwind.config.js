/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#16213E',
        secondary: '#0F3460',
        mor: '#533483',
        pink: '#E94560',
        background: '#EFEFEF',
        navbar: '#E9DAC1',
      },
      fontFamily: {
        'sans-pro': ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#776FFF',
        'secondary-color': '#C063FF',
        'primary-text': '#F9F1FF',
        'secondary-text': '#242352',
        'portfolio-1': '#1B1A3B',
        'portfolio-1a': '#1F1D42',
        'portfolio-2': '#300D1C',
        'portfolio-2a': '#380F21',
        'portfolio-3': '#1E2B45',
        'portfolio-3a': '#202e4a',
      },
      fontFamily: {
        'primary-font': ['Roboto', 'sans-serif'],
        'secondary-font': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#0d3253',
        colorSecondary: '#5cc5d5',
        colorGray: '#f2f4f7',
        colorBlack: '#101319',
      },
    },
  },
  plugins: [],
}
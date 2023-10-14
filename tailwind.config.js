/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        heroSection: "url('src/assets/book-library.png')"
      },
    },
  },
  plugins: [],
}


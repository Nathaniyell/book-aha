/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        heroSection: "url('/src/assets/library.png')",
        signUp: "url('/src/assets/book4.jpg')"
      },
    },
  },
  plugins: [],
}


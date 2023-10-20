/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['poppins', 'sans'],
        custom1: ['nunito', 'sans']
      },
      textShadow: {
        custom: '2px 2px 2px #fff', 
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],        // Paragraphs
        heading: ['Montserrat', 'sans-serif'] // Headings
      },
      colors: {
        primary: {
          DEFAULT: '#103057', 
        },
        Secondary: {
          DEFAULT: '#ecaa05', 
        },
      },
    },
  },
  plugins: [],
}

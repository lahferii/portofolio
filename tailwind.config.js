/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#3b82f6",
        "primary-dark": "#10b981",
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
      }
    },
  },
  plugins: [],
}
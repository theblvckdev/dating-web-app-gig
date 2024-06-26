/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ["#dd3535"],
        accent: ["#ee5c5c"],
        secondary: ["#343333"],
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      oswald: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};

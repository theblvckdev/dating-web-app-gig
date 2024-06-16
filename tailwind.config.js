/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ["#fff500"],
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
  },
  plugins: [],
};

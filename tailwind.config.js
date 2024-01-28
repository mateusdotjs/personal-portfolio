/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "Arial", "sans-serif"],
    },
    extend: {
      boxShadow: {
        form: "0 0 100px #210b47",
      },
    },
  },
  plugins: [],
};

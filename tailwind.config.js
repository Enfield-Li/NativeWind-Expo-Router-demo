/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "rgb(19, 22, 32)",
        navi: "rgb(10, 12, 25)",
      },
    },
  },
  plugins: [],
};

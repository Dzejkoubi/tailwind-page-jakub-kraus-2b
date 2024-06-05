/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-400": "#ABA8BF",
        "pink-100": "#F5E9F3",
      },
    },
  },
  plugins: [],
};

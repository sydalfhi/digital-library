/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4475F2",
      },
      fontFamily: {
        plusJakarta: ["Plus Jakarta Sans", "cursive"],
        jakarta: ["Jakarta", "cursive"],
      },
    },
  },

  plugins: [],
};

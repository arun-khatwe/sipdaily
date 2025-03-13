/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        bell: ["Bell MT", "serif"], 
      },
      rotate: {
        120: "120deg",
        240: "240deg",
      },
    },
  },
  plugins: [],
};

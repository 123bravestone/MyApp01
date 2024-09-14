/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./mapItems/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a7ea4",
        choco: "#853e3a",
      },
      fontFamily: {
        baloo: ["Baloo-Regular", "sans-serif"],
        algance: ["Algance-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};

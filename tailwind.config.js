/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      screens: {
        lg: "900px",
      },
      colors: {
        "app-primary": {
          900: "#021119",
          800: "#162025",
          700: "#16242B",
          600: "#0D1117",
          100: "#F3FBFF",
        },
        "app-neutral": {
          900: "#595D5F",
          800: "#535D63",
          700: "#CCCFD1",
          600: "#E8E9EA",
        },
      },
    },
  },
  plugins: [],
};
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "yesButton-from": "#02C5F5",
        "yesButton-to": "#92FE9E",
        "noButton-from": "#EF1EA0",
        "noButton-to": "#EF7A42",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

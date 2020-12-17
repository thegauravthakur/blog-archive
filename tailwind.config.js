module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        deepDarkGray: "#161B22",
        darkGray: "#21262D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        NotoSans: ["Noto Sans", "sans-serif"],
        Solway: ["Solway", "serif"],
      },
      colors: {
        secondary: "#DD2645",
        tertiary: "#FFE9F7",
        primary: "#FD779B",
      },
    },
  },
  plugins: [],
}

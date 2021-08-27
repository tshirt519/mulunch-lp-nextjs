module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mulunchOrange: "#ea9044",
        // default color => #de9044
      },
      screens: {
        sp: { max: "640px" },
        tablet: { max: "768px" },
        laptop: { max: "1024px" },
        desktop: { max: "1280px" },
        monitor: { max: "1536px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

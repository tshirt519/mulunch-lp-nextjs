module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      tsukuB: ["TsukuBRdGothic-Regular"],
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      overScreen: "115vh",
      spScreen: "1920px",

    },
    extend: {
      saturate: {
        400: "400%",
      },
      invert: {
        30: ".3",
        50: ".5",
        75: ".75",
      },
      colors: {
        mulunchBlue: "#CAD4E3",
        mulunchRed: "#F7EEE6",
        mulunchKhaki: "#F7F5F1",
        mulunchOrange: "#ea9044",
        // default color => #de9044
        mulunchGray: "#6e6d6e",
        mulunchYellow: "#f3e9bb",
        mulunchGreen: "#e1ddcb",
      },
      screens: {
        sp: { max: "640px" },
        tablet: { max: "768px" },
        laptop: { max: "1024px" },
        desktop: { max: "1280px" },
        monitor: { max: "1536px" },
      },
      backgroundImage: (theme) => ({
        topVisual: "url('/TV-6.jpg')",
        vlSection: "url('/village-lunch-section3.png')",
        gaSection: "url('/gallerysection-2.png')",
        gaBackground: "url('/gallerybg-3.png')",
        jfSection: "url('/jf-section3.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0px 2px 3px gray",
        },
        ".text-shadow-md": {
          textShadow: "0px 3px 3px gray",
        },
        ".text-shadow-lg": {
          textShadow: "0px 5px 3px gray",
        },
        ".text-shadow-xl": {
          textShadow: "0px 7px 3px gray",
        },
        ".text-shadow-2xl": {
          textShadow: "0px 10px 3px gray",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};

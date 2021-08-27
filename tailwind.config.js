module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'overScreen': '115vh',
     },
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
      backgroundImage: theme => ({
        'topVisual': "url('/TV-6.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sora: ["Sora"],
    },
    extend: {
      colors: {
        "purple-200": "#DAC7FC",
        "purple-300": "#CAACFF",
        "purple-500": "#6B49CD",
        "purple-700": "#5D0096",
        "purple-900": "#210035",
        "pirk-500": "#AD26FF",
      },
      fontSize: {
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        26: "26px",
        32: "32px",
        36: "36px",
        48: "48px",
        56: "56px",
      },

      boxShadow: {
        custom:
          "6px 6px 16px 0 rgba(0, 0, 0, 0.25), -4px -4px 12px 0 rgba(255, 255, 255, 0.3)",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};

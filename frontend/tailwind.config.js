/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: "320px",
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      keyframes: {
        fadeIn: {
          "0%": { display: "none", opacity: "0" },
          "1%": { display: "block", opacity: "0" },
          "100%": { display: "block", opacity: "0.7" },
        },
        fadeOut: {
          "0%": { display: "block", opacity: "0.7" },
          "99%": { display: "block", opacity: "0" },
          "100%": { display: "none", opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 800ms ease-in",
        fadeOut: "fadeOut 1500ms ease-in-out",
      },
    },
  },
  plugins: [],
  fontFamily: {
    sans: ["Helvetica", "sans-serif"],
  },
};

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
        shrinkIn: {
          "0%": { width: '100%', height: 'auto' },
          "100%": { width: '30%', height: 'auto' },
        },
        shrinkOut: {
          "0%": { width: '30%', height: 'auto' },
          "100%": { width: '100%', height: 'auto' },
        },
        tileExpand: {
          "0%": { width: '100%', height: '100%', overflow: 'hidden', position: 'absolute', zIndex: 50},
          "100%": { width: '400px', height: '400px', overflow: 'hidden', position: 'absolute', zIndex: 50 },
        },
        tileShrink: {
          "0%": { width: '400px', height: '400px', overflow: 'hidden', position: 'absolute', zIndex: 50},
          "99%": { width: '100%', height: '100%', overflow: 'hidden', position: 'absolute', zIndex: 50},
          "100%": { width: '100%', height: '100%', overflow: 'hidden', position: 'absolute', zIndex: 5},
        }
      },
      animation: {
        fadeIn: "fadeIn 800ms ease-in",
        fadeOut: "fadeOut 800ms ease-in-out",
        shrinkIn: "shrinkIn 600ms ease-in-out",
        shrinkOut: "shrinkOut 600ms ease-in-out",
        tileExpand: "tileExpand 800ms ease-in-out",
        tileShrink: "tileShrink 800ms ease-in-out"
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    ],
  fontFamily: {
    sans: ["Helvetica", "sans-serif"],
  },
};

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
      transitionTimingFunction: {
        'ease-out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'ease-in-out-circ': 'cubic-bezier(0.85, 0, 0.15, 1)',
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
          "100%": { width: '140%', height: 'fit-content', maxHeight:'140%', overflow: 'scroll', position: 'absolute', zIndex: 50, },
        },
        tileShrink: {
          "0%": {  width: '140%', height: 'fit-content', maxHeight:'140%', overflow: 'hidden', position: 'absolute', zIndex: 50},
          "99%": { width: '100%', height: '100%', overflow: 'hidden', position: 'absolute', zIndex: 50},
          "100%": { width: '100%', height: '100%', overflow: 'hidden', position: 'absolute', zIndex: 5},
        },
        tileSlideIn: {
          "0%": { position: 'absolute', top: '-50px', opacity: 0, position: 'absolute'},
          "100%": { position: 'absolute', top: '0px', opacity: 1, position: 'absolute'},
        },
      },
      animation: {
        fadeIn: "fadeIn 800ms ease-in",
        fadeOut: "fadeOut 800ms ease-in-out",
        shrinkIn: "shrinkIn 600ms ease-in-out",
        shrinkOut: "shrinkOut 600ms ease-in-out",
        tileExpand: "tileExpand 800ms cubic-bezier(0.65, 0, 0.35, 1)",
        tileShrink: "tileShrink 700ms cubic-bezier(0.65, 0, 0.35, 1)",
        tileSlideIn: "tileSlideIn 1200ms cubic-bezier(0.65, 0, 0.35, 1)",
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

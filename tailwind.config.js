import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    animation: {
      scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
    },
    extend: {
      grayscale: {
        62: "52%",
      },
      backgroundImage: {
        "footer-bg": "url(./assets/bgfoot.png)",
      },
      colors: {
        "custom-green": "#253B39",
      },
      zIndex: {
        8: "8",
      },
      backgroundPosition: {
        center: "center",
      },
      backgroundSize: {
        cover: "cover",
      },
      mixBlendMode: {
        difference: "difference",
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
    },
  },
  darkMode: "class",
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

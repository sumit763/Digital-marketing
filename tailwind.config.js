/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        santosi: ["Satoshi", "sans-serif"],
      },
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        zoomOut: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.5)" },
        },
      },
      animation: {
        zoomIn: "zoomIn 0.5s ease-in-out",
        zoomOut: "zoomOut 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

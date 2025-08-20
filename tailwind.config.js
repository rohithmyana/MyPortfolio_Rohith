/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "false",
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Poppins'", "sans-serif"],
      },
      colors: {
        primary: "#facc15", // yellow
        dark: "#0f0f0f",
        "background-light": "#ffffff",
        "background-dark": "#0f0f0f",
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        "color-first": "#F1F5F9",
        "color-secondary": "#3e0b42",
        "color-thirty": "#1B001E",
        "color-fourth": "#6CDAFB",
        "color-fifth": "#ff71d9",
      },
      fontFamily: {
        jaro: ["Jaro", "sans-serif"],
        museomoderno: ["MuseoModerno", "sans-serif"],
      },
    },
  },
  plugins: [],
};

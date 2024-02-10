/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          500: "#19142A",
          400: "#1D172F",
        },
        secondary: "#2A2344",
        accent: { 500: "#D6223B", 600: "#52182E" },
      },
    },
  },
  plugins: [],
};

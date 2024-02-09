/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
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

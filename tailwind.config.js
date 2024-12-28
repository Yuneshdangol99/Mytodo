/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        outfit: ["Outfit"],
        mylogo: ["mylogo"],
      },
      colors: {
        primary: "#D65F00",
        primary_dark: "#b35002",
        primary_light: "#f27a1b",
        secondary: {
          gray_50: "#f9fafb",
          gray_100: "#f3f4f6",
          gray_200: "#e5e7eb",
          gray_300: "#d1d5db",
          gray_400: "#9ca3af",
        },
      },
      fontSize: {
        li: "1rem",
      },
    },
  },
  plugins: [],
};

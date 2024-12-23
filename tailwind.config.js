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
        primary: "#198754",
        secondary: {
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

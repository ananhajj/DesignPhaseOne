/**  @type {import('tailwindcss').Config} */ 
import colors from "tailwindcss/colors";

export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/**",
    "./src/pages/**",
    "./src/pages/AboutPage.jsx"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        serifCustom: ["Georgia", "serif"],
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        //darkText: "#333",
        //customText: "rgb(186 412 290 / var(--tw-text-opacity, 1))",
        mainColor: colors.blue[500], //rgb(14, 118, 223)
      },
    },
  },
  plugins: [],
};

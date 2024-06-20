/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode:"class",
  theme: {
    screens: {
      mobile: "0",
      desktop: "1000px",
    },
 
    extend: {
      fontFamily: {
        'fontsans': "fontgol",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px)scale(1)",
          },
        }
      },
      animation: {
        blob: "blob 5s infinite",
      },
      
    
    },
  },
  plugins: [],
};

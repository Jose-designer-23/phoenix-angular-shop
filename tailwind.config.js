/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      "montserrat": ["Montserrat", "sans-serif"]
    },
    extend: {
       animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp'),

  ],

  daisyui: {
    themes: [ "light", "dark", "cupcake" ]
  }

}


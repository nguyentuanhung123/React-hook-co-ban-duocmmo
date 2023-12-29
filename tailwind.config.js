/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)"
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}


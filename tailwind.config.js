/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          500: "#26A69A",
        },
        purple: {
          500: "#A855F7", // Define purple-500
          600: "#9333EA", // Define purple-600 for hover
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-animate'), // Add tailwindcss-animate plugin
  ],
};
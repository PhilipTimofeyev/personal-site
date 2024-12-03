/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['"Orbitron"', "sans-serif"],
        tangerine: ["Tangerine", "sans-serif"]
      }, 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


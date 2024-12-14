/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'black': '#000',
        'almost-black': '#051819',
        'blue': '#2cf8ff',
        'green': '#18ffb0',
        'light': '#96a7a1',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a56db',
          dark: '#1e429f',
          light: '#3f83f8',
        },
        secondary: {
          DEFAULT: '#e02424',
          dark: '#9b1c1c',
          light: '#f98080',
        },
      },
    },
  },
  plugins: [],
}

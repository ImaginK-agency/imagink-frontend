/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'imagink-dark': '#212121',
        'imagink-blue': '#4A148C',
        'imagink-violet': '#7B1FA2',
        'imagink-green': '#689F38',
        'imagink-orange': '#FF9800',
      },
    },
  },
  plugins: [],
}

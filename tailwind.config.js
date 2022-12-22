/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'turquoise-green': '#1abc9c',
        'emerald-green': '#2ecc71',
        'green-sea': '#16a085',
        'wet-asp-black': '#34495e',
        'nephritis-green': '#27ae60',
        'peter-river-blue': '#3498db',
        'alizarin-red': '#e74c3c',
      },
    },
  },
  plugins: [],
}

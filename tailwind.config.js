/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': "#6B47ED",
        'disabled-purple': '#D4CCF7',
        'light-purple': '#D4CCF7',
        'remark': '#979797',
        'description': '#616161'
      }
    },
  },
  plugins: [],
}
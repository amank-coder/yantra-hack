/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/banner.png')",
        'banner2': "url('/banner2.png')",
        'logo': "url('/logo.png')",
        'loginbg': "url('/loginbg.png')"

      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5A3', // teal accent
        bg: '#F7F8FA',       // light neutral background
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 6px 18px rgba(15, 23, 42, 0.06)',
      }
    },
  },
  plugins: [],
}

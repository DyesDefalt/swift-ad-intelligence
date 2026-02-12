/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./entrypoints/**/*.{html,tsx,jsx}', './components/**/*.{tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#10B981',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

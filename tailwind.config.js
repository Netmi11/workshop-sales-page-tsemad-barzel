/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0d2137',
        'navy-light': '#1B3A5C',
        gold: '#D4AF37',
        offwhite: '#F8F6F1',
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

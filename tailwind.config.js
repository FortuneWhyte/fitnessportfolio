/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#FF3D00',
        ink: '#0B0B0C',
        charcoal: '#16171A',
        'soft-gray': '#A1A1AA',
      },
    },
  },
  plugins: [],
}

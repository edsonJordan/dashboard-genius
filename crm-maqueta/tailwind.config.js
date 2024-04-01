module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true, // or 'media' or 'className'
  theme: {
    extend: {},
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
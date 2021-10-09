module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
navCol:
{
  50: '#efeffa',
  100: '#d0d0e1',
  200: '#b1b1cb',
  300: '#9392b6',
  400: '#7473a1',
  500: '#5a5988',
  600: '#46456a',
  700: '#32324c',
  800: '#1e1e2f',
  900: '#090914',
  250: "#f84465",
  2:"#262626",
}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

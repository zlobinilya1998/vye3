module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        background: {
          light:'#1F2833',
          DEFAULT: '#0B0C10',
        },
        primary: {
          DEFAULT:'#66FCF1',
          dark:'#46A29E',
        },
        secondary: {
          DEFAULT:'#C5C6C7'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

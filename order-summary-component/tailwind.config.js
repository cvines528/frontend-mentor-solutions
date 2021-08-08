module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background-pattern-mobile': "url('imgages/pattern-background-mobile.svg')",
        'background-pattern-desktop': "url('images/pattern-background-desktop.svg')",

      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}

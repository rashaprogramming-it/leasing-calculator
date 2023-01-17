module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nb': 'var(--nb)',
        'gr': 'var(--gr)',
        'gb': 'var(--gb)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
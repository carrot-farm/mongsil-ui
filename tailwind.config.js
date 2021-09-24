module.exports = {
  mode: 'jit',
  darkMode: false,
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: 'var(--color-base)',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    content: ['./src/**/*.tsx', './src/**/*.ts'],
  },
};

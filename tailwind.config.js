module.exports = {
  mode: 'jit',
  darkMode: false,
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: 'var(--color-base)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
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

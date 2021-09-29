module.exports = {
  mode: 'jit',
  darkMode: false,
  theme: {
    extend: {
      // # color
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
      // # keyframes
      keyframes: {
        'dent-0-100': {
          '0%': {
            'box-shadow': 'var(--dent-0)',
          },
          '100%': {
            'box-shadow': `var(--dent-100)`,
          },
        },
        'press-300-0': {
          '0%': {
            'box-shadow': 'var(--emboss-300)',
          },
          '100%': {
            'box-shadow': `var(--emboss-0)`,
          },
        },
        'scale-1-09': {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(0.94)',
          },
        },
      },
      animation: {
        'press-300-0': 'press-300-0 200ms cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'dent-0-100': 'dent-0-100 200ms cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'scale-1-09': 'scale-1-09 200ms cubic-bezier(0.25, 1, 0.5, 1) forwards',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    content: ['./src/**/*.tsx', './src/**/*.ts'],
  },
};

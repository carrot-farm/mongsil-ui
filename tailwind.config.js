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
        'press-300-0': {
          '0%': {
            'box-shadow': `3px 3px 3px hsl(var(--color-base-deg) 3% 5% / 6%),
              5px 5px 12px hsl(var(--color-base-deg) 3% 5% / 10%),
              -3px -3px 3px hsl(var(--color-base-deg) 3% 100% / 80%),
              -5px -5px 12px hsl(var(--color-base-deg) 5% 100% / 80%);`,
          },
          '100%': {
            'box-shadow': `0px 0px 0px hsl(var(--color-base-deg) 3% 5% / 6%),
              0px 0px 0px hsl(var(--color-base-deg) 3% 5% / 10%),
              0px 0px 0px hsl(var(--color-base-deg) 3% 100% / 80%),
              0px 0px 0px hsl(var(--color-base-deg) 5% 100% / 80%);`,
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

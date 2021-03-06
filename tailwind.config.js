const utilities = require('./src/styles/utilities');
const components = require('./src/components/tailwind.config');

module.exports = {
  mode: 'jit',
  theme: {
    // # layout
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
        error: {
          DEFAULT: 'var(--color-error)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
        },
      },
      // # keyframes
      keyframes: {
        'visible-panel': {
          '0%': {
            visibility: 'hidden',
            opacity: 0,
            transform: 'scaleY(0)',
          },
          '10%': {
            visibility: 'visible',
          },
          '100%': {
            opacity: 1,
            transform: 'scaleY(1)',
          },
        },
      },
      animation: {
        'visible-panel':
          'visible-panel 200ms cubic-bezier(0.25, 1, 0.5, 1) forwards',
      },
    },
  },
  variants: {},
  content: ['./src/**/*.{ts,tsx,js,jsx,html}'],
  plugins: [utilities, components],
};

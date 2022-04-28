function components({ addUtilities, addComponents }) {
  addUtilities({
    '.bg-blur': {
      'backdrop-filter': 'blur(2px)',
      background: 'hsl(var(--color-base-deg) 22% 95% / 70%)',
    },
  });

  addComponents({
    '.t-comp': {
      border: '5px solid',
    },
  });
}

module.exports = require('tailwindcss/plugin')(components, {
  theme: {},
});

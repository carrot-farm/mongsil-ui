function utilities({ addUtilities }) {
  addUtilities({
    /** ===== emboss ===== */
    '.emboss-0': {
      'box-shadow': 'var(--emboss-0)',
    },
    '.emboss-100': {
      'box-shadow': 'var(--emboss-100)',
    },
    '.emboss-200': {
      'box-shadow': 'var(--emboss-200)',
    },
    '.emboss-300': {
      'box-shadow': 'var(--emboss-300)',
    },
    'emboss-400': {
      'box-shadow': 'var(--emboss-400)',
    },
    'emboss-500': {
      'box-shadow': 'var(--emboss-500)',
    },
    /** ===== dent ===== */
    '.dent-0': {
      'box-shadow': 'var(--dent-0)',
    },
    '.dent-100': {
      'box-shadow': 'var(--dent-100)',
    },
    '.dent-200': {
      'box-shadow': 'var(--dent-200)',
    },
    '.dent-300': {
      'box-shadow': 'var(--dent-300)',
    },
    '.dent-400': {
      'box-shadow': 'var(--dent-400)',
    },
    '.dent-500': {
      'box-shadow': 'var(--dent-500)',
    },
    /** ===== traisntion ===== */
    '.m-transition-shadow': {
      'transition-property': 'box-shadow',
      'transition-timing-function': 'ease-in-out',
      'transition-duration': '200ms',
    },
    '.m-transition-transform': {
      'transition-property': 'transform',
      'transition-timing-function': 'ease-in-out',
      'transition-duration': '200ms',
    },
    '.m-transition-border': {
      'transition-property': 'border',
      'transition-timing-function': 'ease-in-out',
      'transition-duration': '200ms',
    },
    '.m-transition-color': {
      'transition-property': 'color',
      'transition-timing-function': 'ease-in-out',
      'transition-duration': '200ms',
    },
    '.m-transition-bg': {
      'transition-property': 'background-color',
      'transition-timing-function': 'ease-in-out',
      'ransition-duration': '200ms',
    },
    /** ===== others ===== */
    '.bg-blur': {
      'backdrop-filter': 'blur(2px)',
      background: 'hsl(var(--color-base-deg) 22% 95% / 70%)',
    },
  });
}

module.exports = require('tailwindcss/plugin')(utilities);

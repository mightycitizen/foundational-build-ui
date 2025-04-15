/** @type {import('tailwindcss').Config} */
import palettes from './src/stories/global/base/colors.json';
import fonts from './src/stories/global/base/fonts.json';
import breakpoints from './src/stories/global/base/breakpoints.json';

let colors = {
  transparent: 'transparent',
  current: 'currentColor',
  inherit: 'inherit',
};

let brandPalette = {};


Object.keys(palettes).forEach(key => {
  const palette = palettes[key];
  const brandColors = palette.variants ? {
    DEFAULT: palette.default,
    ...palette.variants,
  } : {
    DEFAULT: palette,
  };
  brandPalette[key] = brandColors;
});





colors = {
  ...colors,
  ...brandPalette
};


module.exports = {
  content: ['./src/assets/js/**/*.js', './src/stories/{components,layout,pages}/**/*.{twig,js,css}','../templates/**/*.twig'],
  safelist: [
    'mb-1',
    'font-display',
    'font-body',
    'bg-secondary-100',
    'bg-primary-50',
    'aspect-video',
    'z-40',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
    extend: {
      border: {
        '6': '6px',
      }
    },
    screens: breakpoints,
    colors: colors,
    fontFamily: fonts,


  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles

    }),
    // require('@tailwindcss/typography'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '1362px',
          },
          '@screen xl': {
            maxWidth: '1362px',
          },
        }
      })
    }
  ]
}


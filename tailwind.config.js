/** @type {import('tailwindcss').Config} */
import { readFileSync } from 'node:fs';
import phosphorIcons from "phosphor-icons-tailwindcss";
import forms from "@tailwindcss/forms";

const readJson = (file) => JSON.parse(readFileSync(new URL(file, import.meta.url), 'utf8'));
const palettes = readJson('./src/stories/00-base/colors/colors.json');
const fonts = readJson('./src/stories/00-base/fonts/fonts.json');
const breakpoints = readJson('./src/stories/00-base/breakpoints.json');

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


export default {
  content: [
    './src/assets/js/**/*.js',
    './src/stories/{components,layout,pages}/**/*.{twig,js,css}',
    '../templates/**/*.twig',
    './src/stories/{00-base,01-atoms,02-molecules,03-organisms}/**/*.{twig,js,css}',
  ],
  safelist: [
    'mb-1',
    'font-display',
    'font-body',
    'text-tertiary-700',
    'text-tertiary-900',
    'bg-secondary-100',
    'bg-primary-50',
    'bg-tertiary-50',
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
    phosphorIcons(),
    forms({
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

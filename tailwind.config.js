const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/line-clamp')],
  purge: {
    enabled: false,
  },
  theme: {
    fontFamily: {
      sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        orange: {
          DEFAULT: '#e87a00', // 500
          50: '#f1af66',
          100: '#efa24d',
          200: '#ed9533',
          300: '#ea871a',
          400: '#e87a00',
          500: '#e87a00',
          600: '#d16e00',
          700: '#ba6200',
          800: '#a25500',
          900: '#8b4900',
        },
        navyblue: {
          DEFAULT: '#044968', // 500
          50: '#6897ac',
          100: '#367490',
          200: '#1d6282',
          300: '#045174',
          400: '#045174',
          500: '#044968',
          600: '#03415d',
          700: '#023146',
          800: '#02293a',
          900: '#02202e',
        },
        gray: {
          50: '#f9f9f6',
          100: '#F5F5F5',
          200: '#EBEBEB',
          300: '#c6c6c6',
          400: '#b5b5b3',
          500: '#959593',
          600: '#6d6d6b',
          700: '#595957',
          800: '#3b3b39',
          900: '#8E8E8E',
        },
      },
      container: (theme) => ({
        center: true,
        padding: {
          DEFAULT: theme('spacing.4'),
          sm: theme('spacing.5'),
          lg: theme('spacing.6'),
          xl: theme('spacing.8'),
        },
        screens: {
          sm: '640px',
          md: '960px',
          lg: '1280px',
          xl: '1600px',
        },
        animation: {
          appear: 'appear 500ms ease-in-out forwards',
          disappear: 'disappear 500ms ease-in-out forwards',
          'slide-down': 'slideY 250ms ease-out',
        },
        keyframes: {
          slideY: {
            '0%': { transform: 'translateY(-120%)' },
            '100%': { transform: 'translateY(0%)' },
          },
          appear: {
            to: { opacity: 'var(--appear-opacity)' },
          },
          disappear: {
            to: { opacity: 0 },
          },
        },
      }),
    },
  },
  plugins: [],
};

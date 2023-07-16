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
        neutral: {
          DEFAULT: '#2c2c2c', // 400
          50: '#a1a1a1',
          100: '#8a8a8a',
          200: '#737373',
          300: '#444444',
          400: '#2c2c2c',
          500: '#151515',
          600: '#131313',
          700: '#0f0f0f',
          800: '#0b0b0b',
          900: '#080808',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
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
};

import AnimatePlugin from 'tailwindcss-animate'
import { slate } from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  // Used in "/assets"
  safelist: [
    'fill-dark-blue-950',
    'fill-neutral-200',
    'fill-orange-300',
    'fill-orange-400',
    'fill-orange-500',
    'fill-white',
    'dark:fill-blue-950',
    'dark:fill-neutral-900',
    'dark:fill-slate-100',
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      slate,
      neutral: {
        '50': '#f7f7f7',
        '100': '#ededed',
        '200': '#e5e5e5',
        '300': '#c8c8c8',
        '400': '#adadad',
        '500': '#999999',
        '600': '#888888',
        '700': '#7b7b7b',
        '800': '#676767',
        '900': '#545454',
        '950': '#363636',
      },
      blue: {
        '50': '#f2f6fd',
        '100': '#e4ebfa',
        '200': '#c2d5f5',
        '300': '#8cb3ed',
        '400': '#4f8be1',
        '500': '#286ccf',
        '600': '#1a52af',
        '700': '#16418e',
        '800': '#163976',
        '900': '#183262',
        '950': '#081021',
      },
      orange: {
        '50': '#fffbea',
        '100': '#fff4c5',
        '200': '#ffe787',
        '300': '#ffd548',
        '400': '#ffc01e',
        '500': '#fca311',
        '600': '#df7500',
        '700': '#b95104',
        '800': '#963e0a',
        '900': '#7b330c',
        '950': '#471901',
      },
      'dark-blue': {
        '950': '#14213d',
      },
    },
    fontFamily: {
      sans: ['var(--font-outfit)', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'heading-1': ['2.5rem', '3.5rem'],
      'heading-2': [
        '2.125rem',
        {
          lineHeight: '2.75rem',
          letterSpacing: '0.01em',
        },
      ],
      'heading-3': [
        '1.75rem',
        {
          lineHeight: '2.5rem',
          letterSpacing: '0.01em',
        },
      ],
      'heading-4': ['1.5rem', '2.25rem'],
      'heading-5': ['1.25rem', '2rem'],
      'body-1': ['1.375rem', '2.25rem'],
      'body-2': ['1.25rem', '2rem'],
      'body-3': ['1.125rem', '1.875rem'],
      caption: ['1rem', '1.25rem'],
      menu: ['0.875rem', '1.25rem'],
    },
    screens: {
      xxs: '475px',
      xs: '568px',
      ...defaultTheme.screens,
    },
  },
  plugins: [AnimatePlugin],
} satisfies Config

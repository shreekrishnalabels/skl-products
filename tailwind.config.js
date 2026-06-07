/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9a96e',
          light: '#e8d5b0',
          dark: '#9a7a48',
        },
        ink: {
          DEFAULT: '#0f0d0a',
          light: '#1a1714',
        },
        cream: {
          DEFAULT: '#f7f3eb',
          dark: '#ede8dc',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease forwards',
        float: 'float 6s ease-in-out infinite',
        goldShimmer: 'goldShimmer 3s ease infinite',
        drawLine: 'drawLine 1.2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        goldShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        drawLine: {
          from: { height: '0%' },
          to: { height: '100%' },
        },
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0,0,0,0.08)',
        gold: '0 8px 32px rgba(201,169,110,0.35)',
        'gold-sm': '0 4px 16px rgba(201,169,110,0.25)',
      },
    },
  },
  plugins: [],
}

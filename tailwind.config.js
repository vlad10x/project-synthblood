/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F5DC',
        'neon-green': '#39FF14',
        'muted-red': '#8B0000',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'static': 'static 0.2s linear infinite',
        'fade-in': 'fade-in 1s ease-out',
        'marquee': 'marquee 30s linear infinite',
        'scroll-left': 'scroll-left 20s linear infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
        'film-scroll': 'film-scroll 15s linear infinite',
        'film-flicker': 'film-flicker 2s ease-in-out infinite',
        'scanner-sweep': 'scanner-sweep 8s ease-in-out infinite',
      },
      keyframes: {
        static: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '10%': { transform: 'translateX(-1px) translateY(1px)' },
          '20%': { transform: 'translateX(1px) translateY(-1px)' },
          '30%': { transform: 'translateX(-1px) translateY(-1px)' },
          '40%': { transform: 'translateX(1px) translateY(1px)' },
          '50%': { transform: 'translateX(0) translateY(-1px)' },
          '60%': { transform: 'translateX(-1px) translateY(0)' },
          '70%': { transform: 'translateX(1px) translateY(1px)' },
          '80%': { transform: 'translateX(0) translateY(1px)' },
          '90%': { transform: 'translateX(1px) translateY(0)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-100%)' },
        },
        'scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'film-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-33.33%)' },
        },
        'film-flicker': {
          '0%, 100%': { opacity: '0.6' },
          '25%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
          '75%': { opacity: '0.7' },
        },
        'scanner-sweep': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(400%)' },
        },
      },
      cursor: {
        crosshair: 'crosshair',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'static-noise': `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(255, 255, 255, 0.03) 2px,
          rgba(255, 255, 255, 0.03) 4px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 2px,
          rgba(255, 255, 255, 0.03) 2px,
          rgba(255, 255, 255, 0.03) 4px
        )`,
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};
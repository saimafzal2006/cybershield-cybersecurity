/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        accent: 'var(--accent)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out both',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 3s ease-out infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
      },
    },
  },
  plugins: [],
};

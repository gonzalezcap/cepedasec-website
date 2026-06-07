/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fef9f0',
          100: '#fef3e1',
          200: '#fce7c3',
          300: '#f9d5a0',
          400: '#f4c274',
          500: '#edb04d',
          600: '#d4af37',
          700: '#b0942f',
          800: '#8c7a28',
          900: '#6b5e20',
          950: '#4a4215',
        },
        dark: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e8e8e8',
          900: '#0f0f0f',
          950: '#000000',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
        '5xl': ['3rem', '1'],
        '6xl': ['3.75rem', '1'],
      },
      spacing: {
        'safe-inset-left': 'env(safe-area-inset-left)',
        'safe-inset-right': 'env(safe-area-inset-right)',
      },
      keyframes: {
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(30px)' },
        },
      },
      animation: {
        slideInUp: 'slideInUp 0.6s ease-out',
        fadeIn: 'fadeIn 0.6s ease-out',
        scaleIn: 'scaleIn 0.6s ease-out',
        float: 'float 20s ease-in-out infinite',
      },
      backdropFilter: {
        blur: 'blur(10px)',
      },
    },
  },
  plugins: [],
};

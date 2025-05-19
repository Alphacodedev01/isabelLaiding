/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out 0.5s',
        'bounce-slow': 'bounce 2s infinite'
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      colors: {
        primary: {
          50: '#fef4ed',
          100: '#fde6d4',
          200: '#fac7a9',
          300: '#f7a274',
          400: '#f47442',
          500: '#E67E51', // Color del volante
          600: '#d65d2b',
          700: '#b24522',
          800: '#8f3820',
          900: '#752f1f',
        },
        terracota: {
          50: '#fdf3f0',
          100: '#fbe5df',
          200: '#f7c6b9',
          300: '#f2a088',
          400: '#E67E51', // Color del volante como referencia
          500: '#e65f35',
          600: '#d44621',
          700: '#b0361c',
          800: '#8d2e1d',
          900: '#742a1e',
        },
        accent: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dae7',
          300: '#a7b9d3',
          400: '#7590b8',
          500: '#4f6fa1', // Color de acento
          600: '#3d567e',
          700: '#324467',
          800: '#2a3754',
          900: '#252f47',
        },
        neutral: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#a3a3a3',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 
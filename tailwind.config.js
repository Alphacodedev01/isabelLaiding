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
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f5f2',
          100: '#e8e1d9',
          200: '#d5c7b7',
          300: '#c2ad95',
          400: '#ab8f71',
          500: '#967555', // Color principal
          600: '#7d5e43',
          700: '#654a36',
          800: '#4d372a',
          900: '#362921',
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
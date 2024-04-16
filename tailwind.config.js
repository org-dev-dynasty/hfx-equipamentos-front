/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0063AE',
        'secondary': '#F2802E',
        'black': '#000000',
        'white': '#ffffff'
      },
      fontSize: {
        'xsmall': '0.75rem',
        'small': '1rem',
        'medium': '1.25rem',
        'large': '1.5rem',
        'xlarge': '2rem',
        '2xlarge': '3rem',
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


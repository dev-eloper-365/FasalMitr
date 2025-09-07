/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#107813',
          dark: '#0a4d0c',
        },
        secondary: {
          light: '#afcd2a',
          dark: '#8aa822',
        },
        background: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        text: {
          light: '#333333',
          dark: '#f5f5f5',
        },
      },
    },
  },
  plugins: [],
} 
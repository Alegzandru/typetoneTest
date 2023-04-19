/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './src/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ui: {
          grey: '#F5F5F5',
        },
        brand: {
          light: '#FDF2F1',
          medium: '#F8D5D4',
          normal: '#E77874',
          text: '#D26D6A',
        },
        font: {
          dark: '#101828',
          light: '#667085',
        },
      },
    },
  },
  plugins: [],
};

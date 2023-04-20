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
          lightGrey: '#FCFCFD',
          grey: '#F5F5F5',
          darkGrey: '#F2F4F7',
          border: '#D0D5DD',
          placeholder: '#667085',
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
      minWidth: {
        72: '18rem',
      },
    },
  },
  plugins: [],
};

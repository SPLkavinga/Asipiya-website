/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#6B46C1',
          600: '#553C9A',
          
        },
        indigo: {
          600: '#5A67D8',
          
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Add Poppins as the default sans-serif font
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        light: ['ui-sans-serif', 'Roboto Light'],
        regular: ['ui-sans-serif', 'Roboto Regular'],
        medium: ['ui-sans-serif', 'Roboto Medium'],
        bold: ['ui-sans-serif', 'Roboto Bold'],
      },
      screens: {
        xs: { max: '480px' },
        sm: { max: '576px' },
        md: { max: '768px' },
        lg: { max: '992px' },
        xl: { max: '1200px' },
        '2xl': { max: '1336px' },
        '3xl': { max: '1576px' },
      },
      colors: {
        base_primary: '#000000',
        base_secondary: '#7E7E7E',
        base_third: '#675DFE',
        base_fifth: '#ffffff',
        base_border: '#E5E7EB',
      },
      borderRadius: {
        sm: '0.6rem',
        md: '0.8rem',
        lg: '1.1rem',
        xl: '1.4rem',
        '2xl': '1.8rem',
      },
      borderWidth: {
        1: '1px',
      },
      fontSize: {
        sm: '1.2rem',
        base: '1.4rem',
        lg: '1.5rem',
        xl: '1.6rem',
        '2xl': '1.8rem',
        '3xl': '2rem',
        '4xl': '2.2rem',
      },
    },
    plugins: [],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    screens: {
      '3xl': { max: '1576px' },
      '2xl': { max: '1336px' },
      xl: { max: '1200px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '576px' },
      xs: { max: '480px' },
    },
    extend: {
      fontFamily: {
        light: ['ui-sans-serif', 'Roboto Light'],
        regular: ['ui-sans-serif', 'Roboto Regular'],
        medium: ['ui-sans-serif', 'Roboto Medium'],
        bold: ['ui-sans-serif', 'Roboto Bold'],
      },
      colors: {
        base_primary: '#000000',
        base_secondary: '#7E7E7E',
        base_third: '#675DFE',
        base_fifth: '#ffffff',
        base_border: '#E5E7EB',
        bg_primary: '#ffffff',
        bg_secondary: '#675DFE',
        bg_third: '#7E7E7E',
        bg_fifth: 'rgba(217, 217, 217, 0.22)',
        bg_sixth: '#010013',
      },
      borderRadius: {
        sm: '0.6rem',
        md: '0.8rem',
        lg: '1.1rem',
        xl: '1.4rem',
        '2xl': '1.8rem',
        '3xl': '2rem',
        '4xl': '2.2rem',
        '5xl': '3rem',
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

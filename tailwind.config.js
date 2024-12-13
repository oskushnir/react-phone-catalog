/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#4219D0',
        secondaryAccent: '#F4BA47',
        primary: '#0F0F11',
        secondary: '#89939A',
        'icons-color': '#B4BDC3',
        elements: '#E2E6E9',
        hover: '#FAFBFC',
        'white-color': '#FFF',
        'green-color': '#27AE60',
        'red-color': '#EB5757',
        'button-hover': '#17203166',
        'category-phones': '#6D6474',
        'category-tablets': '#8D8D92',
        'category-accessories': '#973D5F',
      },

      screens: {
        xl: '1200px',
      },

      fontFamily: {
        'mont-bold': ['Mont-Bold', 'sans-serif'],
        'mont-regular': ['Mont-Regular', 'sans-serif'],
        'mont-semi': ['Mont-SemiBold', 'sans-serif'],
      },

      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))',
      },
    },
  },
};

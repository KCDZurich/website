/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'Plus Jakarta Sans Fallback', ...defaultTheme.fontFamily.sans],
      'sans-cyber': ['Orbitron', 'Orbitron Fallback', ...defaultTheme.fontFamily.sans],
      mono: ['', ...defaultTheme.fontFamily.mono],
      'mono-cyber': ['Pixel Operator', 'Pixel Operator Fallback', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      xs: ['12px'],
      sm: ['14px'],
      base: ['16px'],
      lg: ['18px'],
      xl: ['20px'],
      '2xl': ['24px'],
      '3xl': ['28px'],
      '4xl': ['36px'],
      '5xl': ['40px'],
      '6xl': ['50px'],
      '7xl': ['56px'],
      '8xl': ['80px'],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      // TODO: Add colors
      // Make sure that they are prepared in the Figma and follow the naming primary/secondary/gray-${number}
      // Example of correctly prepared colors in Figma — https://user-images.githubusercontent.com/20713191/143586876-5e834233-9639-4166-9811-b00e63820d98.png
      // Example of incorrectly prepared colors in Figma — https://user-images.githubusercontent.com/20713191/143586974-6986149f-aee3-450c-a1dd-26e73e3aca02.png
      black: '#000000',
      white: '#ffffff',
      yellow: '#FFEA7D',
      red: '#FF5712',
      blue: { 1: '#3333FF', 2: '#2929FF' },
      'blue-light': '#DFEFF2',
      primary: {
        1: '#0A1133',
        2: 'rgba(38, 47, 89, 0.1)',
        3: 'rgba(38, 47, 89, 0.3)',
        4: 'rgba(38, 47, 89, 0.03)',
        5: 'rgba(38, 47, 89, 0.8)',
      },
      gray: {
        1: '#0D0D0D',
        2: '#1A1A1A',
        3: '#262626',
        4: '#333333',
        5: '#4D4D4D',
        6: '#666666',
        7: '#808080',
        8: '#999999',
        9: '#CCCCCC',
        10: '#E6E6E6',
        11: '#D1D1E0',
        12: '#F5F5F5',
      },
      lightYellow: 'rgba(255, 234, 125, 0.3)',
      lightGreen: 'rgba(125, 255, 208, 0.2)',
      lightOrange: 'rgba(255, 180, 125, 0.2)',
    }),
    backgroundImage: {
      'hero-gradient':
        'linear-gradient(to top, #dfeff2 0%, #dfeff2 45%, #0FE3EA 90.889%, #fff 90.889%, #fff 100%)',
      'hero-mobile-gradient':
        'linear-gradient(to top, #dfeff2 0%, #dfeff2 20%, #0FE5E8 33%, #058EB0 100%)',
      'header-gradient': 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
      'horizontal-dashed-line':
        "url(\"data:image/svg+xml,%3Csvg width='592' height='3' viewBox='0 0 592 3' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.2' d='M592 2L8.74244e-08 1' stroke='%230A1133' stroke-dasharray='15 5'/%3E%3C/svg%3E%0A\")",
      'vertical-dashed-line':
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='246' viewBox='0 0 2 246' fill='none'%3E%3Cpath opacity='0.2' d='M1.00001 246.001L0.999989 1.09673e-05' stroke='%230A1133' stroke-dasharray='15 5'/%3E%3C/svg%3E\")",
      ...defaultTheme.backgroundImage,
    },
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '660px' },
    },
    extend: {
      lineHeight: {
        denser: '1.125',
      },
      letterSpacing: {
        tight: '-0.02em',
        tighter: '-0.04em',
      },
      boxShadow: {
        sm: '0px 4px 8px rgba(38, 47, 89, 0.1)',
        lg: '0px 14px 20px rgba(38, 47, 89, 0.1)',
        xl: '0px 14px 40px #ccc',
      },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};

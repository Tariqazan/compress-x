/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontSize: {
      x64: '64px',
      x60: '60px',
      x55: '55px',
      x50: '50px',
      x40: '40px',
      x36: '36px',
      x30: '30px',
      x28: '28px',
      x24: '24px',
      x20: '20px',
      x18: '18px',
      x16: '16px',
      x15: '15px',
      x13: '13px',
      x14: '14px',
      x12: '12px'
    },
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'red': '#F02626',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'martinique': '#3B3561',
      'butterflyBush': '#5C5486',
      'lavender': '#DCB4F5',
      'lightLavender': '#FDF9FF',
      'minsk': '#3D318A',
      'lightMinsk': 'rgba(220, 180, 245, 0.15)',
      'christalle': '#38006B',
      'kimberly': '#827BA9',
      'pink': 'rgb(255, 200, 205)',
      'lightPink': 'rgb(255, 200, 205,0.3)',
      'solidAnakiwa': 'rgb(176, 216, 254)',
      'anakiwa': 'rgb(176, 216, 254,0.3)',
      'lightLavender': 'rgb( 220, 180, 245,0.4)',
      'gray': '#E2DFF0',
      'extraLightLavender': 'rgba(247, 235, 255, 0.3)'
    },
    fontFamily: {
      mulish: ['"Mulish"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      mukta: ['"Mukta"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [require('daisyui')],
}
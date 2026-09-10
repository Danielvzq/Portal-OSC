/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#12172B',
          light: '#1D2340',
        },
        brand: {
          orange: '#F2811D',
          orangeDark: '#D96A0C',
          pink: '#EC1E79',
          purple: '#8B7FE8',
          green: '#3EBD7E',
          blue: '#5FA8E0',
          yellow: '#F2BB3D',
          cream: '#FBF8F3',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}

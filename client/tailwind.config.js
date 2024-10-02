module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-color': '#285ef3',
        'secondary-color': '#f5cb21',
        'tertiary-color': '#122c75',
        'font-color': '#0f1113',
        'font-light': '#ffffff',
        'bg-color': '#ffffff',
        'border-color-light': '#eee',
        'nav-color': '#282a2d',
        'dropdown-color': '#fff',
        'bg-light': 'rgba(130, 115, 252, .05)',
        'bg-layer': 'rgb(0 0 0 / 55 %)',
        'bg-grey': '#bab8b8',
        'footer-bg': '#0f1113',
        'card-bg': 'rgb(245, 245, 245)',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
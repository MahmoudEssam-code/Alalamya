export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // We use custom dark mode design
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#64ffda',
        accent: '#ffcc33',
        'bg-dark': '#0a192f',
        'bg-light': '#112240',
        'text-primary': '#ccd6f6',
        'text-secondary': '#8892b0',
        'glass-border': 'rgba(100, 255, 218, 0.1)',
      },
      fontFamily: {
        en: ['Inter', 'sans-serif'],
        ar: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

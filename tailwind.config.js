/** @type {import('tailwindcss').Configuration} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-h': 'linear-gradient(to bottom, #222222, #111111)'
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'mono': ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'display': ['Oswald'],
        'body': ['Open Sans'],
      },
      boxShadow: {
        'custom-light': '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      },
      transitionDuration: {
        '300': '0.3s',
      },
      colors: {
        'c1': '#0f2027',
        'c2': '#203a43',
        'c3': '#2c5364',
      },
    },
  },
  plugins: [],
};

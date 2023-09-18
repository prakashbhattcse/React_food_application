// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,html}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: { fontFamily: {
    'sans': ['Helvetica', 'Arial', 'sans-serif'],
    'serif': ['Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
    'mono': ['Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
    'display': ['Oswald'],
    'body': ['"Open Sans"'],
  },
    extend: {},
  },
  plugins: [],
}
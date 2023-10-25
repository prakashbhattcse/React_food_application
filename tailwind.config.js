/** @type {import('tailwindcss').Configuration} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        'background': '#212121',
        'bg-secondary': '#303030',
        'primary': '#282828',
        'secondary': '#C19D60',
        'white': '#FFFFFF',
        'border-custom': 'rgba(255,255,255,0.08)',
        'red':'#E62B3D'
      },
      backgroundImage: {
        'bgimage': 'url("../src/utils/images/bgimg.png")',
        'foodbg': 'url("../src/utils/images/food.png)',
      },
      fontFamily: {

        'funky': ['Playpen Sans', 'cursive'],// Replace 'Roboto' with the actual font name
      },

    },

  },
  plugins: [],

};

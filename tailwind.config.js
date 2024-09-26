/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'Purple-100': 'hsl(254, 88%, 90%)',
        'Purple-500': 'hsl(256, 67%, 59%)',
        'Yellow-100': 'hsl(31, 66%, 93%)',
        'Yellow-500': 'hsl(39, 100%, 71%)',
        'White': 'hsl(0, 0%, 100%)',
        'Black': 'hsl(0, 0%, 7%)',
        'yell': '#FAEEE2'
        
      },
      fontFamily:{
        'Dans-Sans' : ["DM Sans", "sans-serif"]
      },
      lineHeight:{
        'pq-lose':'18px'
      },

      screens:{
        'pq':'375px'
      },


    },
  },
  plugins: [],
}

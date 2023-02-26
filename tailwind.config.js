/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor: theme => ({

      ...theme('colors'),

      'primary': '#0f0f0f',

      'secondary': '#2b2b2b',

      'orange': '#E38407',

      'yellow': '#FAD805',

      'green': '#47F224',

      "purple": "#6c63ff",
     }),

    textColor: theme => ({

      ...theme("colors"),

     'twitter': "#00acee",

     "linkedin": "#0e76a8",

     "spotify": "#1db954",

     'yellow': '#FAD805',

     'primary': '#181818',
     
     "purple": "#6c63ff",

     "black": "#181818"
    })
  },
  plugins: [],
}

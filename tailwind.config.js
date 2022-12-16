/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor: theme => ({

      ...theme('colors'),

      'primary': '#181818',

      'secondary': '#2b2b2b',

      'orange': '#E38407',

      'yellow': '#FAD805',

      "purple": "#6c63ff",
     }),

    textColor: theme => ({

      ...theme("colors"),

     'twitter': "#00acee",

     "linkedin": "#0e76a8",

     "spotify": "#1db954",

     'yellow': '#FAD805',

     'primary': '#181818',
    })
  },
  plugins: [],
}

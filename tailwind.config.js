const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './index.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          DEFAULT: 'hsl(246, 80%, 60%)',
          'very-dark': 'hsl(226, 43%, 10%)',
          dark: 'hsl(235, 46%, 20%)',
          desaturated: 'hsl(235, 45%, 61%)',
          pale: 'hsl(236, 100%, 87%)',
        },
        work: 'hsl(15, 100%, 70%)',
        play: 'hsl(195, 74%, 62%)',
        study: 'hsl(348, 100%, 68%)',
        exercise: 'hsl(145, 58%, 55%)',
        social: 'hsl(264, 64%, 52%)',
        'self-care': 'hsl(43, 84%, 65%)',
      },
      backgroundImage: {
        work: 'url(/images/icon-work.svg)',
        play: 'url(/images/icon-play.svg)',
        study: 'url(/images/icon-study.svg)',
        exercise: 'url(/images/icon-exercise.svg)',
        social: 'url(/images/icon-social.svg)',
        'self-care': 'url(/images/icon-self-care.svg)',
      },
      backgroundPosition: {
        topRight: '94% -10%',
      },
    },
  },
  plugins: [],
}

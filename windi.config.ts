import { defineConfig } from 'windicss/helpers'

import typography from 'windicss/plugin/typography'

import { colors } from './themes/ricky-morty/colors'

export default defineConfig({
  darkMode: 'class',
  attributify: false,
  

  plugins: [
    typography(),
  ],
  theme: {
    extend: {
      colors,
    },
  },
})
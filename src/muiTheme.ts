import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)
theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.only('xs')]: {
    fontSize: '2.2rem',
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.only('md')]: {
    fontSize: '5rem',
  },
}

export default theme

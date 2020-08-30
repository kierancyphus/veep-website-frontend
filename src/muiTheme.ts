import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core'

let theme: Theme = createMuiTheme()
theme = responsiveFontSizes(theme)
theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.only('xs')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.only('md')]: {
    fontSize: '5rem',
  },
}

theme.typography.h5 = {
  ...theme.typography.h5,
  [theme.breakpoints.only('xs')]: {
    fontSize: '1rem',
  },
}

theme.palette.primary = {
  main: '#71518A',
  light: '#A869F8',
  dark: '#5200BB',
  contrastText: '#000000',
}

export interface WithTheme {
  theme: Theme
}

export default theme

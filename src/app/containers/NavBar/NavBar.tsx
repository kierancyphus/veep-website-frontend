import React, { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Button, Box } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import LogoSmall from 'assets/logos/small.png'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'
// import Hidden from '@material-ui/core/Hidden'
// import Popper from '@material-ui/core/Popper'

// Could change breadcrumbs to a styled list, but I'm not sure what material ui offers

export const NavBar: FC = () => {
  const { t } = useTranslation('translation')
  const navMap: Record<string, string> = {
    'navBar.home': '/',
    'navBar.projects': '/projects',
    'navBar.events': '/events',
    'navBar.teams': '/teams',
    'navBar.about_us': '/about-us',
  }
  // const [navBarOpen, setNavBarOpen] = useState<boolean>(false)
  // const [anchorEl, setAnchorEl] = useState(null)
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <Box>
          <img src={LogoSmall} alt="logo" style={{ height: '4rem' }} />
        </Box>
        <Box>
          {Object.entries(navMap).map(([key, value]) => (
            <Link component={RouterLink} to={value} key={key + value}>
              <Button>{t(key)}</Button>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  )
}

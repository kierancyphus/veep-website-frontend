import React, { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Breadcrumbs, Link, Button, Box } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

// Could change breadcrumbs to a styled list, but I'm not sure what material ui offers

export const NavBar: FC = () => {
  const { t } = useTranslation('translation')

  return (
    <Box display="flex" justifyContent="space-between">
      <Box>LOGO</Box>
      <Breadcrumbs className="breadcrumbs">
        <Link component={RouterLink} to="/">
          <Button>{t('navBar.home')}</Button>
        </Link>
        <Link component={RouterLink} to="/projects">
          <Button>{t('navBar.projects')}</Button>
        </Link>
        <Link component={RouterLink} to="/events">
          <Button>{t('navBar.events')}</Button>
        </Link>
        <Link component={RouterLink} to="/teams">
          <Button>{t('navBar.teams')}</Button>
        </Link>
        <Link component={RouterLink} to="/about-us">
          <Button>About Us</Button>
        </Link>
        <Link component={RouterLink} to="/contact-us">
          <Button>{t('navBar.contact_us')}</Button>
        </Link>
      </Breadcrumbs>
    </Box>
  )
}

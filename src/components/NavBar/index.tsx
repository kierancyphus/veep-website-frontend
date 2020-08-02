import React, { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Breadcrumbs, Link, Paper, Button, Box } from '@material-ui/core'
import './index.scss'
import { useTranslation } from 'react-i18next'

const NavBar: FC = () => {
  const { t } = useTranslation('common')

  return (
    <Box className="navbar-container">
      <Breadcrumbs className="breadcrumbs">
        <Link component={RouterLink} to="/">
          <Button>{t('navBar.home')}</Button>
        </Link>
        <Link component={RouterLink} to="/test">
          <Button>{t('navBar.projects')}</Button>
        </Link>
        <Link component={RouterLink} to="/test">
          <Button>{t('navBar.contact_us')}</Button>
        </Link>
        <Link component={RouterLink} to="/test">
          <Button>{t('navBar.events')}</Button>
        </Link>
      </Breadcrumbs>
    </Box>
  )
}
export default NavBar

import React, { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Breadcrumbs, Link, Paper, Button } from '@material-ui/core'
import './index.scss'

const NavBar: FC = () => (
  <Paper className="navbar-container" elevation={3}>
    <Breadcrumbs className="breadcrumbs">
      <Link component={RouterLink} to="/">
        <Button>Home</Button>
      </Link>
      <Link component={RouterLink} to="/test">
        <Button>Projects</Button>
      </Link>
      <Link component={RouterLink} to="/test">
        <Button>Contact Us</Button>
      </Link>
      <Link component={RouterLink} to="/test">
        <Button>Events</Button>
      </Link>
    </Breadcrumbs>
  </Paper>
)

export default NavBar

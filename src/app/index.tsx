/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from 'styles/global-styles'

import { NavBar } from './containers/NavBar/NavBar'
import { Home } from './containers/Home/Home'
import { Test } from './containers/Test/Test'
import { Projects } from './containers/Projects/Projects'
import { AboutUs } from './containers/AboutUs/AboutUs'
import { Teams } from './containers/Teams/Teams'
import { Events } from './containers/Events/Events'
import { useMediaQuery, useTheme } from '@material-ui/core'

export const App: FC = () => {
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.only('xs'))

  return (
    <BrowserRouter>
      <Helmet titleTemplate="VEEP" defaultTitle="VEEP">
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      {!isPhone && <NavBar />}
      <Switch>
      <Route path='/' component={() => { 
        window.location.href = 'https://veep.skule.ca'; 
        return null;
      }}/>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}

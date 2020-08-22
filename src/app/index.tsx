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

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/teams">
          <Teams />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}

import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'

const App: FC = () => (
  <>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/test">Test Page</Route>
      <Route path="/about-us">About us</Route>
    </Switch>
  </>
)

export default App

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.scss'

const App = () => (
  <>
    <Switch>
      <Route path="/" exact>
        Home page
      </Route>
      <Route path="/test">Test Page</Route>
      <Route path="/about-us">About us</Route>
    </Switch>
  </>
)

export default App

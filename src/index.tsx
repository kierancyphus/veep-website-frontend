import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from 'serviceWorker'

import './i18n'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()

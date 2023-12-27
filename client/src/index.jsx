import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { registerServiceWorker } from './registerServiceWorker'
import GlobalStyle from './globalStyle'
import App from './App'

function Main() {
  return (
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))

if (process.env.NODE_ENV === 'production')
  registerServiceWorker.register()

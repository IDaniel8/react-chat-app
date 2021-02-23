import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
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

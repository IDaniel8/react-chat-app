import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { RouteGuard } from '@components/index'
import { useOnlineUser } from '@hooks/index'

import Chat from './views/Chat'
import Join from './views/Join'

function App() {
  const isOnlineUser = useOnlineUser()

  return (
    <Router>
      <Route path="/" exact component={Join} />
      <RouteGuard condition={isOnlineUser} fallbackRoutePath="/">
        <Route path="/chat" component={Chat} />
      </RouteGuard>
    </Router>
  )
}

export default App

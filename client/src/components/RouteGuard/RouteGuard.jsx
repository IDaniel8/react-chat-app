import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'

function RouteGuard(props) {
  const { condition, children, fallbackRoutePath } = props

  if (condition) {
    return <Fragment>{children}</Fragment>
  }
  return <Redirect path={fallbackRoutePath} />
}

export default RouteGuard
export { RouteGuard }

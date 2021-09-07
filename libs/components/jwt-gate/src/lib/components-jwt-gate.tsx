import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom'
import { environment as env } from '@tryst/environments/api'
import * as jwt from 'jsonwebtoken'

/* eslint-disable-next-line */
export interface ComponentsJwtGateProps extends RouteProps {
  token: string
  redirect: string
}

export function JwtGate(props: ComponentsJwtGateProps) {
  const { token, redirect, exact, path, component } = props
  const location = useLocation()

  try {
    const payload = jwt.verify(token, env.access_secret)
    console.log({ payload })

    return <Route exact={exact} path={path} component={component} />
  } catch (error) {
    return <Redirect to={{ pathname: redirect, state: { from: location } }} />
  }

  return (
    <div>
      <h1>Welcome to ComponentsJwtGate!</h1>
    </div>
  )
}

export default JwtGate

import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom'
import jwtDecode, { JwtPayload } from 'jwt-decode'

export interface ComponentsJwtGateProps extends RouteProps {
  token: string | undefined
  redirect: string
}

export function JwtGate(props: ComponentsJwtGateProps) {
  const { token, redirect, exact, path, component } = props
  const location = useLocation()

  if (!token) return <Redirect to={{ pathname: redirect, state: { from: location } }} />

  try {
    const payload = jwtDecode<JwtPayload>(token)
    console.log({ payload })

    return <Route exact={exact} path={path} component={component} />
  } catch (error) {
    return <Redirect to={{ pathname: redirect, state: { from: location } }} />
  }
}

export default JwtGate

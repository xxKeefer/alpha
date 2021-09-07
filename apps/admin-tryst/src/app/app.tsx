import styles from './app.module.css'
import { Route, Switch } from 'react-router-dom'
import { JwtGate } from '@tryst/components/jwt-gate'
import { LoginPage } from '@tryst/admin-tryst/pages'
import { useAuth } from '@tryst/components/auth-context'

const App = () => {
  const { token } = useAuth()
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route
        exact
        path="/public"
        render={() => {
          return <div>public route</div>
        }}
      />
      <JwtGate
        token={token}
        redirect="/login"
        exact
        path="/private"
        component={() => <div>private route</div>}
      />
      <JwtGate
        token={token}
        redirect="/login"
        exact
        path="/secure"
        component={() => <div>secure route</div>}
      />
    </Switch>
  )
}

export default App

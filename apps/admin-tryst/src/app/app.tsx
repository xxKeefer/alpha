import styles from './app.module.css';
import { Route, Switch } from 'react-router-dom';
import {LoginPage} from '@tryst/admin-tryst/pages'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={()=>{
        return(
          <div>slash route</div>
        )
      }}/>
      <Route exact path="/login" render={()=><LoginPage/>}/>
      <Route exact path="/public" render={()=>{
        return(
          <div>public route</div>
        )
      }}/>
      <Route exact path="/private" render={()=>{
        return(
          <div>private route</div>
        )
      }}/>
      <Route exact path="/secure" render={()=>{
        return(
          <div>secure route</div>
        )
      }}/>
    </Switch>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Remove from './views/remove'
import TechnicianDisabledScreen from './views/technician-disabled-screen'
import UserInfo from './views/user-info'
import MainPage from './views/main-page'
import UploadRecite from './views/upload-recite'
import History from './views/history'
import Register from './views/register'
import Login from './views/login'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Remove} exact path="/remove" />
        <Route
          component={TechnicianDisabledScreen}
          exact
          path="/technician-disabled-screen"
        />
        <Route component={UserInfo} exact path="/user-info" />
        <Route component={MainPage} exact path="/" />
        <Route component={UploadRecite} exact path="/upload-recite" />
        <Route component={History} exact path="/history" />
        <Route component={Register} exact path="/register" />
        <Route component={Login} exact path="/login" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

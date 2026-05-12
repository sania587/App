import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './index.css'
import Remove from './remove'
import TechnicianDisabledScreen from './Technician-Disabled-Screen'
import UserInfo from './user-info'
import MainPage from './App'
import UploadRecite from './Upload-Recite'
import History from './history'
import Register from './register'
import Login from './login'
import NotFound from './not-found'

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

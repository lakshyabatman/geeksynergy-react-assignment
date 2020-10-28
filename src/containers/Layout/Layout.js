import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../../pages/Home/Home';
import AuthPage from '../../pages/AuthPage/AuthPage';
import classes from './Layout.module.css'
import NavBar from "../../components/NavBar/NavBar";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Router>
        <NavBar/>
        <Switch>
            <Route path="/signup">
              <AuthPage type="signup"/>
            </Route>
            <Route path="/login">
              <AuthPage type="login"/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Layout

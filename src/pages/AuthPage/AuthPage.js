import React  from 'react'
// import { Redirect } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'
// import CacheManager from '../../lib/localStorage'
import classes from './AuthPage.module.css'
const AuthPage = (props) => {
    //If user is logged in no need to signup or login
    // if(CacheManager.isLogged()) {
    //   return <Redirect to='/'/>
    // }else {

      return <div className={classes.Container}>
        {(props.type==='signup') 
          ?
          <SignupForm/>
          : 
          <LoginForm/>
        }
      </div>
      
      
    // }


  
}

export default AuthPage
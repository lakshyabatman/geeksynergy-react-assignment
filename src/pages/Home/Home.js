import React from 'react'
import { Redirect } from 'react-router-dom'
import Movies from '../../containers/Movies/Movies'
import CacheManager from '../../lib/localStorage'

const Home = (props) =>{
  if(!CacheManager.isLogged()) return <Redirect to='/login'/>
 
    return (
      <div style={{marginTop:'100px'}}>
        <Movies/>
      </div>
    )
  
}

export default Home

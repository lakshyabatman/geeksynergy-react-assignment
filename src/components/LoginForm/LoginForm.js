import React , {useState} from 'react'
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import CacheManager from '../../lib/localStorage'
const LoginForm = () => {
  const history = useHistory();
  let [name,setName] = useState('')
  let [pass,setPass] = useState('')
  const login =(e) => {
    e.preventDefault()
    if(name===CacheManager.get('name') && pass===CacheManager.get('pass')) {
      CacheManager.set('isLogged',true)
      history.push('/')
    }else {
      alert("Invalid Credentials!")
    }
    
  }

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={login}>
        <Form.Group >
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} value={name} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)}  value={pass}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Link to="/signup">Signup?</Link>
    </div>
  )
}

export default LoginForm

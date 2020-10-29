import React , {useState} from 'react'
import { Form, Button } from "react-bootstrap";
import { useHistory ,Link} from 'react-router-dom';
import CacheManager from '../../lib/localStorage'
const SignupForm = () => {
  const history = useHistory();
  let [name,setName] = useState('')
  let [pass,setPass] = useState('')
  let [email,setEmail] = useState('')
  let [mobile,setMobile] = useState('')
  let [profession,setProfession] = useState("Software Engineer")

  const signup =(e) => {
    e.preventDefault()
    if(name==='' ||  pass==='' || email==='' || mobile==='' || profession==='') {
      alert("Please fill all fields")
      return
    }
    CacheManager.setAll({name,mobile,pass,email,profession,isLogged:true})
    history.push('/')
  }

  return (
    <div>
      <h2>Signup</h2>
      <Form onSubmit={signup}>
        <Form.Group >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" required placeholder="Enter Address" onChange={(e) => setEmail(e.target.value)} value={email} />
        </Form.Group>
        <Form.Group >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required placeholder="Enter Name" onChange={(e) => setName(e.target.value)} value={name} />
        </Form.Group>
        <Form.Group >
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" required placeholder="Enter Name" onChange={(e) => setMobile(e.target.value)} value={mobile} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required placeholder="Password" onChange={(e) => setPass(e.target.value)}  value={pass}/>
        </Form.Group>
        <Form.Group>
          <Form.Control as="select"  required onChange={(e) => setProfession(e.target.value)}>
            <option>Software Engineer</option>
            <option>Project Manager</option>
            <option>HR Manager</option>
          </Form.Control>
        </Form.Group>
          
        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
      <Link to="/login">Login?</Link>
    </div>
  )
}

export default SignupForm

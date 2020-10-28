import React from 'react'
import {useHistory} from 'react-router-dom'
import { Navbar,Nav} from 'react-bootstrap'
import CacheManager from '../../lib/localStorage'
const NavBar = () => {
  const history = useHistory()

  const logout = () => {
    CacheManager.clear('name')
    CacheManager.clear('mobile')
    CacheManager.clear('email')
    CacheManager.clear('pass')
    CacheManager.clear('profession')
    history.push('/login')
  }
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand >Assignment</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link onClick={logout}>
        Logout
      </Nav.Link>
    </Nav>
  </Navbar>
  )
}

export default NavBar

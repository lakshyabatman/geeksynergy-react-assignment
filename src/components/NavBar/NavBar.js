import React from 'react'
import {useHistory} from 'react-router-dom'
import { Navbar,Nav,NavDropdown} from 'react-bootstrap'
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
      <NavDropdown title="Company Info" id="collasible-nav-dropdown">
        <NavDropdown.Item >Company: Geeksynergy Technologies Pvt Ltd</NavDropdown.Item>
        <NavDropdown.Item >Address: Sanjayanagar, Bengaluru-56</NavDropdown.Item>
        <NavDropdown.Item >Phone:XXXXXXXXX09</NavDropdown.Item>
        <NavDropdown.Item >Email: XXXXXX@gmail.com</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar>
  )
}

export default NavBar

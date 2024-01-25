import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from '../nav-item'

const NavBar = () => {
  return (
    <>
          <nav className='navbar navbar-light bg-light d-flex justify-content-center gap-5'>
              <Link to="/" className='navbar-brand'><h3>Todolist</h3></Link>
              <NavItem/>
          </nav> 
    </>
  )
}

export default NavBar

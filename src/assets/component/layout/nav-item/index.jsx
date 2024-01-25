import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = () => {
  return (
    <>
    <div className='d-flex gap-5'>
      <Link to="/logout" className='nav-link text-primary'>Sign Out</Link>
      <Link to="/signin" className='nav-link text-primary'>Sign In</Link>
      <Link to="/signup" className='nav-link text-primary'>Sign Up</Link>
      </div>
    </>
  )
}

export default NavItem

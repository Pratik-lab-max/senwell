import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <a href="/signup"><li>SignUp</li></a>
        <a href="/signin"><li>SignIn</li></a>
      </ul>
    </div>
  )
}

export default Navbar

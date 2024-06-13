import React from 'react'
import './Navbar.css'
import logo from'../../assets/logo.png.png'

const Navbar = () => {
  return (
   <nav className='container'>
    <img src={logo} alt=" " className='logo' />
    <ul>
        <li>Home</li>
        <li>AboutUs</li>
        <li>Contacts</li>
        <li>Servicess</li>
        <li><button className='btn'>SignUp</button></li>
    </ul>
   </nav>
  )
}

export default Navbar
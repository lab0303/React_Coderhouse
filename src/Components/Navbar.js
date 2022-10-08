import React from 'react'
import logo from "../assest/logo.png"
import "./Navbar.css"
import { NavLink, Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to = '/'> <img src={logo} alt="logo" /> </Link>
        <NavLink to ='/plataforma/PS5'>PS5</NavLink>
        <NavLink to ='/plataforma/XBOX'>XBOX</NavLink>
        <NavLink to ='/plataforma/PC'>PC</NavLink>
        <Link to = '/cart'> <CartWidget/> </Link>
        
        
    </div>
  )
}

export default Navbar

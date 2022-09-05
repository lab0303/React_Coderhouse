import React from 'react'
import logo from "../assest/logo.png"
import "./Navbar.css"
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" />
        <a href="">Juegos</a>
        <a href="">Acerca de nosotros</a>
        <CartWidget/>
        
    </div>
  )
}

export default Navbar
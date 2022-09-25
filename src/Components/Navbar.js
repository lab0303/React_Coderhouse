import React from 'react'
import logo from "../assest/logo.png"
import "./Navbar.css"
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" />
        <a href="">PS5</a>
        <a href="">XBOX</a>
        <a href="">PC</a>

        <CartWidget/>
        
    </div>
  )
}

export default Navbar
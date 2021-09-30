import React from 'react'
import logo from './img/logo.png'
import './header.css'
function Header() {
  return (
    <div className="header"> 
         <div className="header_menu">

          <a className="header_menu_log" href="/"><img src={logo} alt="logo"/></a>
         
         <div className="header_nav">
              <nav>
              <a href="/">Home</a>
              <a href="/contact">Contacto</a>
              <a href="/#product">Product</a>
          </nav>
         </div>
        </div>
    </div>
  )
}

export default Header

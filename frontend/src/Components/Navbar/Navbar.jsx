import React from 'react';
import './Navbar.css'
import {useState} from 'react';

import logo from "../Assets/logo.png"
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  const [highlight,setHighlight]=useState('')


  
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li 
    onMouseOver={() => setHighlight('shop')}  
    onMouseOut={() => setHighlight('')}
  >
    Shop
    <hr className={highlight === 'shop' ? 'visible' : 'hidden'} />
  </li>
        <li onMouseOver={()=>setHighlight('men')}  onMouseOut={()=>setHighlight('')}>Men <hr className={highlight === 'men' ? 'visible' : 'hidden'} /></li>
        <li onMouseOver={()=>setHighlight('women')}  onMouseOut={()=>setHighlight('')}>Women <hr className={highlight === 'women' ? 'visible' : 'hidden'} /></li>
        <li onMouseOver={()=>setHighlight('kids')} onMouseOut={()=>setHighlight('')}>Kids <hr className={highlight === 'kids' ? 'visible' : 'hidden'} /></li>

 
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_icon} alt=""/>
        <div className="nav-cart-count">0</div>
        </div>
        

      
 
    </div>
  )
}

export default Navbar

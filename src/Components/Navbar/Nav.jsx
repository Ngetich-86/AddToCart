import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
const Nav = () => {
  return (
    <>
    <div className="navbar">
    <Link to="/" id="menu">Home</Link>
    <Link to="/Cart" id="menu">cart</Link>
    </div>
    </>
  )
}

export default Nav
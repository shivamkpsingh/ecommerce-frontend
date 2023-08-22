import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-dark text-light p-3">
        <h4 className="text-center text-uppercase">
            all right reserve by @shivam  
        </h4>
        <NavLink to="/about" className="nav-link text-center">About</NavLink>
    </div>
  )
}

export default Footer
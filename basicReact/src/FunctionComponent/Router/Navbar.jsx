import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <> 
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact </Link></li>
        <li><Link to="/Profile">Profile </Link></li>
        <li><Link to="/Error">Error </Link></li>
    </ul>
    </>
  )
}

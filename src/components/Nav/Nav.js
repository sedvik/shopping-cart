import React from 'react'
import CartBtn from '../CartBtn/CartBtn'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav (props) {
  const { numItems } = props

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">{<CartBtn numItems={numItems} />}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

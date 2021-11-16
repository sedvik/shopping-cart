import React from 'react'
import Nav from '../Nav/Nav'
import './Header.css'

function Header (props) {
  const { numItems } = props

  return (
    <header className="header">
      <h1>Delightful Doilies</h1>
      <Nav numItems= {numItems} />
    </header>
  )
}

export default Header

import React from 'react'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart (props) {
  const { cartEntries } = props

  // Conditionally render page button and text based on cart status
  const areCartEntries = cartEntries.length !== 0
  let text
  let button

  if (areCartEntries) {
    const total = cartEntries.reduce((prevVal, currentVal) => {
      return prevVal + currentVal.price * currentVal.qty
    }, 0)
    text = <p className="total-price">{`Total: $${total}`}</p>
    button = <button className="checkout">Checkout</button>
  } else {
    text = <p className="empty-cart-text">Your cart is currently empty</p>
    button = <Link to="/shop"><button className="cart-shop-btn">Shop</button></Link>
  }

  return (
    <div className="cart-container">
      {
        areCartEntries &&
          cartEntries.map(entry => {
            return (
              <CartItem
                key={entry.id}
                id={entry.id}
                title={entry.title}
                src={entry.src}
                alt={entry.alt}
                price={entry.price}
                qty={entry.qty}
              />
            )
          })
      }
      {text}
      {button}
    </div>
  )
}

export default Cart

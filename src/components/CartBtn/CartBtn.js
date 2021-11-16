import React from 'react'
import cartIcon from '../../images/cart.png'
import './CartBtn.css'

function CartBtn (props) {
  const { numItems } = props

  return (
    <div className="cart-btn">
      <span className="cart-icon">
        <img src={cartIcon} alt="Shopping cart" />
      </span>
      <span className="cart-item-num">
        {numItems}
      </span>
    </div>
  )
}

export default CartBtn

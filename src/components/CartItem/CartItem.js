import React from 'react'
import QtyController from '../QtyController/QtyController'
import './CartItem.css'
import trashIcon from '../../images/trash-icon.png'

function CartItem (props) {
  const {
    id,
    title,
    src,
    alt,
    price,
    qty
  } = props

  return (
    <div className="cart-item">
      <div className="thumbnail-container">
        <img src={src} alt={alt} />
      </div>
      <div className="cart-item-info">
        <h2 className="cart-item-name">{title}</h2>
        <p className="cart-item-price">{`$${price}/ea`}</p>
        <QtyController val={qty} />
        <p className="cart-item-price-total">{`$${qty * price}`}</p>
      </div>
      <img className="trash-icon" src={trashIcon} alt="Trash Icon" />
    </div>
  )
}

export default CartItem

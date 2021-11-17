import React from 'react'
import QtyController from '../QtyController/QtyController'
import './ShopItem.css'

function ShopItem (props) {
  const {
    id,
    title,
    src,
    alt,
    price
  } = props

  return (
    <div className="shop-item">
      <div className="photo-container">
        <img
          src={src}
          alt={alt}
        />
      </div>
      <div className="item-order-info">
        <h2>{title}</h2>
        <p>{`$${price}`}</p>
        <QtyController />
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  )
}

export default ShopItem

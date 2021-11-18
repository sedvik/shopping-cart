import React, { useState } from 'react'
import QtyController from '../QtyController/QtyController'
import './ShopItem.css'

function ShopItem (props) {
  const {
    id,
    title,
    src,
    alt,
    price,
    addCartEntry
  } = props

  const [qty, setQty] = useState(1)

  function updateQty (num) {
    setQty(num)
  }

  function handleAddToCartClick () {
    // Create newEntry with item data and qty
    const newEntry = {
      id,
      title,
      src,
      alt,
      price,
      qty: qty
    }

    addCartEntry(newEntry)

    // Reset item qty to 1
    setQty(1)
  }

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
        <QtyController
          val={qty}
          updateQty={updateQty}
        />
        <button
          className="add-to-cart"
          onClick={handleAddToCartClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ShopItem

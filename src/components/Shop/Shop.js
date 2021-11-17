import React from 'react'
import LoadingIcon from '../LoadingIcon/LoadingIcon'
import './Shop.css'

function Shop (props) {
  const { shopEntries } = props

  return (
    <div className="shop-container">
      {
        shopEntries.length !== 0
          ? <h2>This is a non-empty shop</h2>
          : <LoadingIcon />
      }
    </div>
  )
}

export default Shop

import React from 'react'
import ShopItem from '../ShopItem/ShopItem'
import uniqid from 'uniqid'
import LoadingIcon from '../LoadingIcon/LoadingIcon'
import './Shop.css'

function Shop (props) {
  const { shopEntries } = props

  return (
    <div className="shop-container">
      {
        shopEntries.length !== 0
          ? shopEntries.map(entry => {
            return (
              <ShopItem
                key={uniqid()}
                title={entry.title}
                src={entry.src}
                alt={entry.alt}
                price={entry.price}
              />)
          })
          : <LoadingIcon />
      }
    </div>
  )
}

export default Shop

import React, { useState, useEffect } from 'react'
import ShopItem from '../ShopItem/ShopItem'
import LoadingIcon from '../LoadingIcon/LoadingIcon'
import { shopData } from '../../util/shopData'
import './Shop.css'

function Shop (props) {
  const [shopEntries, setShopEntries] = useState([])

  // Use useEffect to perform a fake fetch of shop data on component mount.
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShopEntries(shopData)
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const { addCartEntry } = props

  return (
    <div className="shop-container">
      {
        shopEntries.length !== 0
          ? shopEntries.map(entry => {
            return (
              <ShopItem
                key={entry.id}
                id={entry.id}
                title={entry.title}
                src={entry.src}
                alt={entry.alt}
                price={entry.price}
                addCartEntry={addCartEntry}
              />)
          })
          : <LoadingIcon />
      }
    </div>
  )
}

export default Shop

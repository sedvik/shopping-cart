import React, { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './styles/reset.css'
import './styles/App.css'

function App () {
  const [cartEntries, setCartEntries] = useState([])

  // addCartEntry function adds a newEntry to the cartEntries array
  function addCartEntry (newEntry) {
    // Check if entry type is already in cartEntries array
    const inCartEntries = cartEntries.some(entry => {
      return entry.id === newEntry.id
    })

    // If entry already exists, just increment the qty. Otherwise, add the entire entry.
    let updatedCartEntries

    if (inCartEntries) {
      const additionalQty = newEntry.qty
      updatedCartEntries = cartEntries.map(entry => {
        if (entry.id === newEntry.id) {
          return Object.assign(
            {},
            entry,
            {
              qty: entry.qty + additionalQty
            }
          )
        } else {
          return Object.assign({}, entry)
        }
      })
    } else {
      updatedCartEntries = [...cartEntries, newEntry]
    }

    setCartEntries(updatedCartEntries)
  }

  // updateCartEntry function updates a given cartEntry with the new qty given
  function updateCartEntry (entryId, newQty) {
    const updatedCartEntries = cartEntries.map(entry => {
      if (entryId === entry.id) {
        return Object.assign(
          {},
          entry,
          { qty: newQty }
        )
      } else {
        return Object.assign({}, entry)
      }
    })

    setCartEntries(updatedCartEntries)
  }

  // deleteCartEntry function deletes the cartEntry with the given id
  function deleteCartEntry (entryId) {
    const updatedCartEntries = cartEntries.filter(entry => {
      return entry.id !== entryId
    })

    setCartEntries(updatedCartEntries)
  }

  // checkout function mock completes the checkout process by clearing out the cart and notifying the user
  function checkout () {
    setCartEntries([])
    window.alert('Thank you for your (fake) purchase! Hope you have a doilightful (ugh) day!')
  }

  const numItems = cartEntries.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.qty
  }, 0)

  return (
    <HashRouter>
      <div className="App">
        <Header numItems={numItems} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop addCartEntry={addCartEntry} />}
          />
          <Route
            path="/cart"
            element={<Cart
                      cartEntries={cartEntries}
                      updateCartEntry={updateCartEntry}
                      deleteCartEntry={deleteCartEntry}
                      checkout={checkout}
                    />}
          />
        </Routes>
      </div>
    </HashRouter>

  )
}

export default App

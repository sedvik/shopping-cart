import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { shopEntries } from './util/shopData'
import './styles/reset.css'
import './styles/App.css'

function App () {
  const numItems = 5

  return (
    <HashRouter>
      <div className="App">
        <Header numItems={numItems} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop shopEntries={shopEntries}/>}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </HashRouter>

  )
}

export default App

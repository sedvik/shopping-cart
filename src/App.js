import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </HashRouter>

  )
}

export default App

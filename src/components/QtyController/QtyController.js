import React from 'react'
import './QtyController.css'

function QtyController (props) {
  return (
    <div className="qty-controller">
      <button className="minus-btn">-</button>
      <input type="number" min="0" defaultValue="0" />
      <button className="plus-btn">+</button>
    </div>
  )
}

export default QtyController

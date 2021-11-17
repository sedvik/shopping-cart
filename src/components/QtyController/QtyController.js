import React from 'react'
import './QtyController.css'

function QtyController (props) {
  const { val } = props

  return (
    <div className="qty-controller">
      <button className="minus-btn">-</button>
      <input type="number" min="0" defaultValue={val || 0} />
      <button className="plus-btn">+</button>
    </div>
  )
}

export default QtyController

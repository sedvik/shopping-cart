import React from 'react'
import './QtyController.css'

function QtyController (props) {
  const {
    val,
    updateQty
  } = props

  // isValidValue function prevents newValues from being less than 1 or a non-valid number
  function isValidValue (val) {
    return (
      (val >= 1) &&
      (typeof val === 'number') &&
      (!Number.isNaN(val))
    )
  }

  function handleMinusClick () {
    const newVal = val - 1
    if (isValidValue(newVal)) {
      updateQty(newVal)
    }
  }

  function handlePlusClick () {
    const newVal = val + 1
    if (isValidValue(newVal)) {
      updateQty(val + 1)
    }
  }

  function handleInput (e) {
    const inputVal = parseInt(e.target.value, 10)
    if (isValidValue(inputVal)) {
      updateQty(inputVal)
    }
  }

  return (
    <div className="qty-controller">
      <button
        className="minus-btn"
        onClick={handleMinusClick}
      >
        -
      </button>
      <input
        type="number"
        min="0"
        value={val}
        onChange={handleInput}
      />
      <button
        className="plus-btn"
        onClick={handlePlusClick}
        >
          +
        </button>
    </div>
  )
}

export default QtyController

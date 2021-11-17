import React from 'react'
import './LoadingIcon.css'
import loadingIcon from '../../images/doily-icon.png'

function LoadingIcon (props) {
  return (
    <img
      className="loading-icon"
      src={loadingIcon}
      alt="Spinning doily loading icon"
    />
  )
}

export default LoadingIcon

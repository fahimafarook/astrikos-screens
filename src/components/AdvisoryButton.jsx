import React from 'react'
import '../styles/BatteryHealthPrediction.css'
import IconSparkle from '../assets/svg/IconSparkle.svg'

function AdvisoryButton(props) {
  return (
    <div className='acc-btn-border'>
      <button className={`acc-btn ${props.className}`}>
        <img src={IconSparkle} />
        <span className='acc-btn-text'>{props.text}</span>
      </button>
    </div>
  )
}

export default AdvisoryButton

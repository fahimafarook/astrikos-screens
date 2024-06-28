import React from 'react'
import '../styles/BatteryHealthPrediction.css'
import AdvisoryButton from '../components/AdvisoryButton'
import IconAdvisory from '../assets/svg/IconAdvisory.svg'
import IconInfo from '../assets/svg/IconInfo.svg'
import IconMoreOption from '../assets/svg/IconMoreOption.svg'
import IconResolution from '../assets/svg/IconResolution.svg'
import IconObservation from '../assets/svg/IconObservation.svg'

function AdvisoryCard(props) {

  return (
    <div className='advisory-card'>
      <div className='advisory-card-title'>
        <div className='ac-title-tab'>
          <img src={IconAdvisory} width='36.04px' height='26.95px'/>
          <div className='ac-title-text'>Advisory</div>
        </div>
        <div className='ac-title-options'>
          <img src={IconInfo} className='info-icon'></img>
          <img src={IconMoreOption} className='more-option-icon'></img>
        </div>
      </div>
      <div className='advisory-card-content'>
        <div className='acc-textarea'>
          <div className='acc-card'>
            <div className='acc-card-header'>
              <img src={IconObservation} />
              <div className='acc-card-title'>Observation</div>
            </div>
            <div className='acc-card-body'>Anticipated decrease in Power Output anomaly detected in battery.</div>
          </div>
          <div className='acc-card'>
            <div className='acc-card-header'>
              <img src={IconResolution} />
              <div className='acc-card-title'>Resolution</div>
            </div>
            <div className='acc-card-body'>Energy Implement backup power sources or grid integration to mitigate the effects of reduced battery output during predicted low irradiance periods. Additionally, consider energy storage solutions to store surplus energy during optimal conditions for use during low output periods.</div>
          </div>
        </div>
        <div className='acc-buttons'>
          <AdvisoryButton text={"Work Order"} />
          <AdvisoryButton text={"Maintenance"} />
          <AdvisoryButton text={"Manage Asset"} />
          <AdvisoryButton text={"Call Center"} />
          <AdvisoryButton text={"Ignore"} />
        </div>
      </div>
    </div>
  )
}

export default AdvisoryCard

import React from 'react'
import PaginationControl from '../components/PaginationControl'
import '../styles/RealTimeDataCard.css'
import IconRealTime from '../assets/svg/IconRealTime.svg'
import IconExternalLink from '../assets/svg/IconExternalLink.svg'
import IconError from '../assets/svg/IconError.svg'
import IconWarning from '../assets/svg/IconWarning.svg'

function RealTimeDataCard(props) {
  return (
      <div className='rt-card-container'>
        <div className='rt-card-header'>
          <img src={IconRealTime} width="29.04px" height="29.04px"/>
          <div className='rt-card-header-title'>Real Time</div>
        </div>
        <div className='rt-card-pagination-container'>
          <PaginationControl size="small" />
        </div>
        <div className='rt-card-body'>
          <div className='rt-detail-card'>
            <div className='rt-detail-card-row'>
              <img src={IconExternalLink} width="24.2px" height="24.2px"/>
              <div className='rt-detail-card-title'>Power</div>
            </div>
            <div className='rt-detail-card-row'>
              <img src={IconError} />
              <div className='rt-detail-value' style={{color:'#FF0000'}}>22</div>
              <img src={IconWarning} />
              <div className='rt-detail-value' style={{color:'#FDF303'}}>170</div>
            </div>
          </div>
          <div className='rt-detail-card'>
            <div className='rt-detail-card-row'>
              <img src={IconExternalLink} width="24.2px" height="24.2px"/>
              <div className='rt-detail-card-title'>Cooling</div>
            </div>
            <div className='rt-detail-card-row'>
              <img src={IconError} />
              <div className='rt-detail-value' style={{color:'#FF0000'}}>22</div>
              <img src={IconWarning} />
              <div className='rt-detail-value' style={{color:'#FDF303'}}>170</div>
            </div>
          </div>
          <div className='rt-detail-card'>
            <div className='rt-detail-card-row'>
              <img src={IconExternalLink} width="24.2px" height="24.2px"/>
              <div className='rt-detail-card-title'>Server</div>
            </div>
            <div className='rt-detail-card-row'>
              <img src={IconError} />
              <div className='rt-detail-value' style={{color:'#FF0000'}}>22</div>
              <img src={IconWarning} />
              <div className='rt-detail-value' style={{color:'#FDF303'}}>170</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RealTimeDataCard

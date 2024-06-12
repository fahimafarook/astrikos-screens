import React from 'react'
import '../styles/ChartContainerCard.css'
import InfoIcon from '../assets/svg/IconInfo.svg'
import MoreOptionsIcon from '../assets/svg/IconMoreOption.svg'
import TickIcon from '../assets/svg/chartIcons/Tick.svg'
import ErrorIcon from '../assets/svg/chartIcons/Error.svg'
import SparkleIcon from '../assets/svg/IconSparkle.svg'

import AdvisoryButton from '../components/AdvisoryButton'
import ReactECharts from 'echarts-for-react';

function ChartContainerCard(props) {
  return (
    <div className='chart-card-container'>
      <div className='chart-card-header'>
        <div className='chart-card-title'>
          <img src={props.icon} />
          {props.title}
        </div>
        <div className='chart-card-options'>
          <img src={InfoIcon} />
          <img src={MoreOptionsIcon} />
        </div>
      </div>
      <div className='chart-container'>
        <ReactECharts option={props.chartOptions} style={{ height: '100%', width: '100%'}} />
      </div>
      <div className='chart-summary'>
        <div className='chart-summary-data'>
          <img src={TickIcon} />
          <span className='chart-summary-field'>Meeting MTBF</span>
          <span className='chart-summary-value'>38 devices</span>
        </div>
        <div className='chart-summary-data'>
          <img src={ErrorIcon} />
          <span className='chart-summary-field'>Not Meeting MTBF</span>
          <span className='chart-summary-value'>0 devices</span>
        </div>
      </div>
      <AdvisoryButton className='chart-recommendation' text={"12 Recommendations"} />
    </div>
  )
}

export default ChartContainerCard

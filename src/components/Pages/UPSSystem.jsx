import React from 'react'
import { useState} from 'react'
import '../../styles/BatteryHealthPrediction.css'
import '../../styles/common.css'
import RealTimeDataCard from "../RealTimeDataCard"
import PaginationControl from "../PaginationControl"
import ChartContainerCard from "../ChartContainerCard"

import ModifyIcon from "../../assets/svg/IconModify.svg"
import FilterIcon from "../../assets/svg/IconFilter.svg"

import PredictiveMaintenance from "../../assets/svg/chartIcons/PredictiveMaintenance.svg"
import FuelEfficiency from "../../assets/svg/chartIcons/FuelEfficiency.svg"
import LoadForecasting from "../../assets/svg/chartIcons/LoadForecasting.svg"
import BatteryHealth from "../../assets/svg/chartIcons/BatteryHealth.svg"
import EmissionControl from "../../assets/svg/chartIcons/EmissionControl.svg"
import FailureMode from "../../assets/svg/chartIcons/FailureMode.svg"

import {lineGraph} from "../../data/lineGraph.js"
import {lineFillGraph} from "../../data/lineFillGraph.js"
import {barGraph} from "../../data/barGraph.js"

function UPSSystem() {

  const [chartPage, setChartPage] = useState(1);

  const handlePagination = (currentPage) => {
    setChartPage(currentPage);
  }

  return (
    <div style={{display:"flex"}}>
      <div className='bh-left-panel'>
        <div className='page-sub-header'>
          <div className='psh-text'>
            <div className='psh-title'>UPS Overview</div>
            <div className='psh-subtext'>These data are directly from Astrikos’ connected system</div>
          </div>
          <div className='psh-options'>
            <button className='psh-button'>
              <img src={ModifyIcon} />
              Modify
            </button>
            <button className='psh-button'>
              <img src={FilterIcon} />
              Filter
            </button>
          </div>
          <div className='psh-pagination-container'>
            <PaginationControl size="large" startCount="1" perPage="6" totalCount="12" onPageChange={handlePagination}/>
          </div>
        </div>
        <div className='ups-grid-container'>
          {
            chartPage == 1 && <>
            <div className='ups-grid-charts'>
              <ChartContainerCard 
                icon={PredictiveMaintenance}
                title="Predictive Maintenance"
                chartOptions={lineFillGraph}
              />
              <ChartContainerCard 
                icon={FuelEfficiency}
                title="Fuel Efficiency Optimization"
                chartOptions={barGraph}
              />
              <ChartContainerCard 
                icon={LoadForecasting}
                title="Load Forecasting and Management"
                chartOptions={lineGraph}
              />
            </div>
            <div className='ups-grid-charts'>
              <ChartContainerCard 
                icon={BatteryHealth}
                title="Battery Health Prediction"
                chartOptions={{}}
              />
              <ChartContainerCard 
                icon={EmissionControl}
                title="Emission Control and Compliance"
                chartOptions={lineFillGraph}
              />
              <ChartContainerCard 
                icon={FailureMode}
                title="Failure Mode and Effects Analysis (FMEA)"
                chartOptions={lineFillGraph}
              />
            </div>
            </>
          }
          {
            chartPage == 2 && <>
            <div className='ups-grid-charts'>
              <ChartContainerCard 
                icon={BatteryHealth}
                title="Battery Health Prediction"
                chartOptions={{}}
              />
              <ChartContainerCard 
                icon={EmissionControl}
                title="Emission Control and Compliance"
                chartOptions={lineFillGraph}
              />
              <ChartContainerCard 
                icon={FailureMode}
                title="Failure Mode and Effects Analysis (FMEA)"
                chartOptions={lineFillGraph}
              />
            </div>
            <div className='ups-grid-charts'>
              <ChartContainerCard 
                icon={PredictiveMaintenance}
                title="Predictive Maintenance"
                chartOptions={lineFillGraph}
              />
              <ChartContainerCard 
                icon={FuelEfficiency}
                title="Fuel Efficiency Optimization"
                chartOptions={barGraph}
              />
              <ChartContainerCard 
                icon={LoadForecasting}
                title="Load Forecasting and Management"
                chartOptions={lineGraph}
              />
            </div>
            </>
          }
        </div>
      </div>
      <div className='bh-right-panel'>
        <RealTimeDataCard />
        <div className='askAelia' style={{marginTop:"30px", width:"292px"}}>
                        <span className='leftPanelCardHeader'>Ask Aelia</span>
                            <div style={{display:"flex", flexDirection:"column", gap:"5px", marginTop:"25px"}}>
                                <div className='aelia-chat aelia-chat-small'>What’s the status of UPS?</div>
                                <div className='aelia-chat aelia-chat-small'>How can I improve my system energy cost?</div>
                                <div className='aelia-chat aelia-chat-small'>Give an overview of my power systems</div>
                            </div>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <div className="ask-anything-button">Ask anything to Aelia...
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3199 13.7399C9.84253 13.7399 8.64993 12.5473 8.64993 11.0699V5.72994C8.64993 4.25254 9.84253 3.05994 11.3199 3.05994C12.7973 3.05994 13.9899 4.25254 13.9899 5.72994V11.0699C13.9899 12.5473 12.7973 13.7399 11.3199 13.7399Z" fill="#343434"/>
                                    <path d="M6.86993 11.0699C6.86993 13.5263 8.86353 15.5199 11.3199 15.5199C13.7763 15.5199 15.7699 13.5263 15.7699 11.0699H17.5499C17.5499 14.2116 15.227 16.7926 12.2099 17.2287V19.9699H10.4299V17.2287C7.41283 16.7926 5.08993 14.2116 5.08993 11.0699H6.86993Z" fill="#343434"/>
                                </svg>
                            </div>
                            <svg width="35" height="53" viewBox="0 0 35 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.6449 28.1744H29.6708C32.6152 28.1744 35 30.5592 35 33.5036V36.1682C34.9981 37.9272 34.4162 39.6364 33.3443 41.0311C32.2724 42.4257 30.7705 43.4279 29.0712 43.8823L28.6449 28.1744ZM6.28875 43.8823C4.5895 43.4279 3.08755 42.4257 2.01568 41.0311C0.943802 39.6364 0.361843 37.9272 0.359985 36.1682V33.5036C0.359985 30.5592 2.74482 28.1744 5.68922 28.1744H6.71509L6.28875 43.8823ZM11.0184 20.1805H24.3415V28.1744H11.0184V20.1805Z" fill="#97A7AF"/>
                                <path d="M29.6707 36.1682V40.1651C29.6707 43.3453 28.4074 46.3952 26.1587 48.6439C23.91 50.8926 20.8601 52.1559 17.68 52.1559C14.4998 52.1559 11.4499 50.8926 9.20122 48.6439C6.95252 46.3952 5.68921 43.3453 5.68921 40.1651V36.1682L7.02152 34.8359H28.3384L29.6707 36.1682Z" fill="#BCC7CE"/>
                                <path d="M29.6707 30.8391V36.1683H26.8995C26.5821 36.1683 26.2752 36.2829 26.0354 36.4909C25.7955 36.6989 25.6388 36.9865 25.5939 37.3008C25.0476 41.1778 21.7035 44.1621 17.68 44.1621C13.6564 44.1621 10.3123 41.1778 9.76607 37.3008C9.72117 36.9865 9.56441 36.6989 9.32457 36.4909C9.08473 36.2829 8.7779 36.1683 8.46041 36.1683H5.68921V30.8391C5.68921 28.6274 7.4745 26.8421 9.68613 26.8421H25.6738C27.8855 26.8421 29.6707 28.6274 29.6707 30.8391Z" fill="#CAD3D8"/>
                                <g clip-path="url(#clip0_3498_14039)">
                                <path d="M11.2997 35.8679L23.5932 32.5185L17.5442 43.7326L15.1114 40.6776L20.9716 34.6L13.7238 38.9298L11.2997 35.8679Z" fill="url(#paint0_linear_3498_14039)"/>
                                </g>
                                <path d="M16.3476 2.86053H19.0122C25.6298 2.86053 31.003 8.23373 31.003 14.8513V16.1836C31.003 19.1253 28.6155 21.5128 25.6737 21.5128H9.68604C6.74431 21.5128 4.35681 19.1253 4.35681 16.1836V14.8513C4.35681 8.23373 9.73001 2.86053 16.3476 2.86053Z" fill="#0A365E"/>
                                <path d="M12.3507 14.8514C11.9974 14.8514 11.6585 14.711 11.4087 14.4612C11.1588 14.2113 11.0184 13.8724 11.0184 13.5191V10.8545C11.0184 10.5011 11.1588 10.1622 11.4087 9.91238C11.6585 9.66252 11.9974 9.52216 12.3507 9.52216C12.7041 9.52216 13.043 9.66252 13.2928 9.91238C13.5427 10.1622 13.683 10.5011 13.683 10.8545V13.5191C13.683 13.8724 13.5427 14.2113 13.2928 14.4612C13.043 14.711 12.7041 14.8514 12.3507 14.8514ZM23.0092 14.8514C22.6559 14.8514 22.317 14.711 22.0671 14.4612C21.8173 14.2113 21.6769 13.8724 21.6769 13.5191V10.8545C21.6769 10.5011 21.8173 10.1622 22.0671 9.91238C22.317 9.66252 22.6559 9.52216 23.0092 9.52216C23.3626 9.52216 23.7014 9.66252 23.9513 9.91238C24.2011 10.1622 24.3415 10.5011 24.3415 10.8545V13.5191C24.3415 13.8724 24.2011 14.2113 23.9513 14.4612C23.7014 14.711 23.3626 14.8514 23.0092 14.8514ZM19.0123 17.516H16.3477C15.9943 17.516 15.6554 17.3756 15.4056 17.1258C15.1557 16.8759 15.0154 16.537 15.0154 16.1837C15.0154 15.8303 15.1557 15.4915 15.4056 15.2416C15.6554 14.9918 15.9943 14.8514 16.3477 14.8514H19.0123C19.3656 14.8514 19.7045 14.9918 19.9544 15.2416C20.2042 15.4915 20.3446 15.8303 20.3446 16.1837C20.3446 16.537 20.2042 16.8759 19.9544 17.1258C19.7045 17.3756 19.3656 17.516 19.0123 17.516Z" fill="#10DDFF"/>
                                <path d="M25.6738 5.52515V1.52823C25.6738 1.17488 25.8142 0.836002 26.064 0.586146C26.3139 0.33629 26.6528 0.195923 27.0061 0.195923C27.3595 0.195923 27.6983 0.33629 27.9482 0.586146C28.198 0.836002 28.3384 1.17488 28.3384 1.52823V6.85746L25.6738 5.52515ZM7.02148 6.85746V1.52823C7.02148 1.17488 7.16185 0.836002 7.41171 0.586146C7.66156 0.33629 8.00044 0.195923 8.35379 0.195923C8.70714 0.195923 9.04602 0.33629 9.29588 0.586146C9.54573 0.836002 9.6861 1.17488 9.6861 1.52823V5.52515L7.02148 6.85746Z" fill="#97A7AF"/>
                                <path d="M25.6739 22.8452H9.6862C6.01302 22.8452 3.02466 19.8568 3.02466 16.1836V14.8513C3.02466 7.50496 9.00139 1.52823 16.3477 1.52823H19.0123C26.3587 1.52823 32.3354 7.50496 32.3354 14.8513V16.1836C32.3354 19.8568 29.3471 22.8452 25.6739 22.8452ZM16.3477 4.19284C10.4709 4.19284 5.68927 8.9745 5.68927 14.8513V16.1836C5.68927 18.3873 7.48256 20.1805 9.6862 20.1805H25.6739C27.8775 20.1805 29.6708 18.3873 29.6708 16.1836V14.8513C29.6708 8.9745 24.8892 4.19284 19.0123 4.19284H16.3477Z" fill="#CAD3D8"/>
                                <defs>
                                <linearGradient id="paint0_linear_3498_14039" x1="11.2954" y1="35.8713" x2="22.9253" y2="29.5156" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A6CA3B"/>
                                <stop offset="1" stop-color="#4E93E4"/>
                                </linearGradient>
                                <clipPath id="clip0_3498_14039">
                                <rect width="13.3897" height="13.3897" fill="white" transform="matrix(0.783166 -0.621813 -0.621813 -0.783166 17.925 45.5673)"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </div>
                        
                        </div>
      </div>
    </div>
  )
}

export default UPSSystem

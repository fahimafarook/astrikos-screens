import React from 'react';
import '../../styles/homePage.css';
import KPICard from '../KPICard';
import SideNav from '../SideNav';
import ReactECharts from 'echarts-for-react';
import {useState, useEffect} from 'react'
import UptimeOverview from '../UptimeOverview';
import Redirection from '../../assets/svg/Redirect.svg'
import OverallOverview from '../OverallOverview';
import RealTimeDataCard from '../RealTimeDataCard'

import DataCenterIcon from '../../assets/svg/DataCenterIcon.svg'
import SecurityIcon from '../../assets/svg/uptimeIcons/SecurityIcon.svg';
import CoolingIcon from '../../assets/svg/uptimeIcons/CoolingIcon.svg';
import NetworkIcon from '../../assets/svg/uptimeIcons/NetworkIcon.svg';
import peopleIcon from '../../assets/svg/uptimeIcons/peopleIcon.svg';
import PowerIcon from '../../assets/svg/uptimeIcons/PowerIcon.svg';
import RackIcon from '../../assets/svg/uptimeIcons/RackIcon.svg';
import ServerIcon from '../../assets/svg/uptimeIcons/ServerIcon.svg';

import SecuritySvg from '../../assets/svg/uptimeSVG/Security.svg';
import CoolingSvg from '../../assets/svg/uptimeSVG/Cooling.svg';
import NetworkSvg from '../../assets/svg/uptimeSVG/Network.svg';
import peopleSvg from '../../assets/svg/uptimeSVG/People.svg';
import PowerSvg from '../../assets/svg/uptimeSVG/Power.svg';
import RackSvg from '../../assets/svg/uptimeSVG/Rack.svg';
import ServerSvg from '../../assets/svg/uptimeSVG/server.svg';
import OverallSvg from '../../assets/svg/uptimeSVG/Overall.svg';

function HomePage(props) {

   const option = {
    angleAxis: {
        show: false,
        startAngle: 240,
      },
      radiusAxis: {
        type: 'category',
        data: ['Mon'],
        z: 10,
        axisLine: {
          show: true 
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false 
        },
        splitLine: {
          show: true 
        }
      },
      polar: {
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false // Hides the polar axis labels
        },
        splitLine: {
          show: false // Hides the polar split lines
        },
        splitArea: {
          show: false // Hides the polar split area
        }
      },
        series: [
          {
            type: 'bar',
            data: [90],
            coordinateSystem: 'polar',
            name: 'Health',
            stack: 'a',
            color: '#FF3333',
            barWidth: 9,
            emphasis: {
              focus: 'series'
            }
          },
          {
            type: 'bar',
            data: [80],
            coordinateSystem: 'polar',
            name: 'Availability',
            stack: 'b',
            color: '#008C37',
            barWidth: 11,
            emphasis: {
              focus: 'series'
            }
          },
          {
            type: 'bar',
            data: [70],
            coordinateSystem: 'polar',
            name: 'Efficiency',
            stack: 'c',
            color: "#54FF97",
            barWidth: 13,
            emphasis: {
              focus: 'series'
            }
          },
          {
            type: 'bar',
            data: [70],
            coordinateSystem: 'polar',
            name: 'Load',
            stack: 'd',
            color: "#9EC03A",
            textColor: "white",
            barWidth: 15,
            emphasis: {
              focus: 'series'
            }
          }
        ],
        legend: {
          show: true,
          data: ['Health', 'Availability', 'Efficiency', 'Load'],
          color: "white",
        }
      };


    const option2 = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            // adjust the start and end angle
            startAngle: 180,
            endAngle: 360,
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      };

            
    const mapOption = {
      tooltip: {
        trigger: 'item',
        formatter: function(params) {
          return `
            <style>
              .tt-data-text {
                width: fit-content;
                height: 14px;
                font-family: 'roboto-medium';
                font-size: 14.03px;
                font-weight: 500;
                line-height: 13.29px;
                letter-spacing: -0.02em;
                text-align: left;
                color: #292929;
                position: relative;
                &::after {
                  content: '';
                  height: 5px;
                  width: 5px;
                  background: #00FF64;
                  display: block;
                  right: -10px;
                  position: absolute;
                  bottom: 5px;
                }
              }
              .tt-data-value {
                width: 28px;
                height: 14px;
                font-family: 'roboto-medium';
                font-size: 14.03px;
                font-weight: 800;
                line-height: 13.29px;
                letter-spacing: -0.02em;
                text-align: left;
                color: #3E8EEA;
                margin-left: 15px;

              }
            </style>
            <div style="background-color: #fff; width: 317px; height: 143.18px; padding:16px; border:none; border-radius:8px; background-color:#FDFEFE">
              <p style="width: 285px; height: 28px; margin-bottom:10px;font-family: 'roboto-medium'; font-size: 18px; font-weight: 500; line-height: 28px; text-align: left; color: #343434;">Efficiency Index</p>
              <div style="display:flex; padding:5px; height:23px; width:fit-content;">
                <p class="tt-data-text">Power</p>
                <p class="tt-data-value">2.11</p>
              </div>
              <div style="display:flex; padding:5px; height:23px; width:fit-content;">
                <p class="tt-data-text">Cooling</p>
                <p class="tt-data-value">0.78</p>
              </div>
              <div style="display:flex; padding:5px; height:23px; width:fit-content;">
                <p class="tt-data-text">Sustainability</p>
                <p class="tt-data-value">1.93</p>
              </div>
            </div>
          `;
        }
      },
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'none',
          symbolSize: 8,
          roam: true,
          label: {
            show: false,
            emphasis: {
              show: false
            },
          },
          color: 'red',
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [2, 5],
          edgeLabel: {
            fontSize: 6
          },
          data: [
            { name: 'Node 1', x: 103.3, y: 232.1 },
            { name: 'Node 2', x: 231.5, y: 129.4 },
            { name: 'Node 5', x: 223.7, y: 190.8 },
            { name: 'Node 6', x: 321.5, y: 53.4 },
            { name: 'Node 7', x: 401.2, y: 202.6 },
            { name: 'Node 3', x: 345.8, y: 273.2 },
            { name: 'Node 4', x: 76.9, y: 74.6 },
            { name: 'Node 8', x: 276.3, y: 154.8 },
            { name: 'Node 9', x: 59.4, y: 86.3 },
            { name: 'Node 10', x: 346.7, y: 204.2 },
            { name: 'Node 11', x: 83.5, y: 194.7 },
            { name: 'Node 12', x: 174.9, y: 273.4 },
            { name: 'Node 13', x: 256.4, y: 92.5 },
            { name: 'Node 14', x: 377.5, y: 144.3 },
            { name: 'Node 15', x: 143.6, y: 283.1 },
            { name: 'Node 16', x: 302.9, y: 67.2 },
            { name: 'Node 17', x: 88.7, y: 179.5 },
            { name: 'Node 18', x: 205.4, y: 263.8 },
            { name: 'Node 19', x: 339.1, y: 183.6 },
            { name: 'Node 20', x: 118.9, y: 145.3 }
          ],
          links: [
            { source: 0, target: 1, lineStyle: { curveness: 0.1 }, tooltip: { show: false } },
            { source: 1, target: 2, lineStyle: { curveness: 0.1 }, tooltip: { show: false } },
            { source: 2, target: 3, lineStyle: { curveness: 0.1 }, tooltip: { show: false } },
            { source: 3, target: 4, lineStyle: { curveness: 0.1 }, tooltip: { show: false } },
            { source: 4, target: 5, lineStyle: { curveness: 0.1 }, tooltip: { show: false } },
            { source: 5, target: 6, lineStyle: { curveness: 0.1 }, tooltip: { show: false } },
            { source: 6, target: 7, lineStyle: { curveness: 0.1 }, tooltip: { show: false } },
            { source: 7, target: 8, lineStyle: { curveness: 0.1 }, tooltip: { show: false } },
            { source: 8, target: 10, lineStyle: { curveness: 0.2 }, tooltip: { show: false } },
            { source: 9, target: 12, lineStyle: { curveness: 0.3 }, tooltip: { show: false } },
            { source: 10, target: 11, lineStyle: { curveness: 0.1 }, tooltip: { show: false } },
            { source: 11, target: 13, lineStyle: { curveness: 0.2 }, tooltip: { show: false } },
            { source: 12, target: 13, lineStyle: { curveness: 0.1 }, tooltip: { show: false } },
            { source: 13, target: 15, lineStyle: { curveness: 0.2 }, tooltip: { show: false } },
            { source: 14, target: 15, lineStyle: { curveness: 0.1 }, tooltip: { show: false } },
            { source: 15, target: 16, lineStyle: { curveness: 0.1 }, tooltip: { show: false } },
            { source: 16, target: 18, lineStyle: { curveness: 0.2 }, tooltip: { show: false } },
            { source: 17, target: 19, lineStyle: { curveness: 0.2 }, tooltip: { show: false } },
            { source: 18, target: 19, lineStyle: { curveness: 0.3 }, tooltip: { show: false } },
          ],
          lineStyle: {
            opacity: 0.9,
            width: 1,
            curveness: 0,
            color: 'white'
          }
        },
        
      ]
    };

    return (
        <div className='homePage'>
            <div className = "panelContainer">
                <div className='leftPanel'>
                    <div className='dataCenterOverview'>
                    <span className='dataCenterText'>
                        <img src={DataCenterIcon} />
                        Data Center Overview</span>
                        <ReactECharts option={mapOption} style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className='askAelia'>
                        <span className='leftPanelCardHeader'>Ask Aelia</span>
                            <div style={{display:"flex", flexDirection:"column", gap:"5px", marginTop:"25px"}}>
                                <div className='aelia-chat'>What’s the status of UPS?</div>
                                <div className='aelia-chat'>How can I improve my system energy cost?</div>
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
                    <div className='dataCenterPerformance'>
                    <span className='dataCenterText'>
                        <img src={DataCenterIcon} />
                        Data Center Performance</span>
                        <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
                    </div>
                </div>
                <div className='centerpanel'>
                    <div style={{display:"flex", flexDirection:"column", position:"relative", gap:"200px"}}>
                        <div  style={{display:"flex", flexDirection:"row", position:"relative", gap: "40px", justifyContent:"center"}}>
                            <UptimeOverview style={{transform:"translateY(200px)"}}
                                uptimeIcon={SecurityIcon}
                                uptimeTitle="security"
                                uptime="99.98"
                                MTBValue="500"
                                MTTRValue="2"
                                recomendations="12"
                                uptimeSVG={SecuritySvg}
                                onClick={() => props.navigatePage("Home")}
                            />
                            <UptimeOverview style={{transform:"translateY(60px)"}}
                                uptimeIcon={PowerIcon}
                                uptimeTitle="Power"
                                uptime="99.98"
                                MTBValue="500"
                                MTTRValue="2"
                                recomendations="12"
                                uptimeSVG={PowerSvg}
                                onClick={() => props.navigatePage("Power")}
                            />
                                <UptimeOverview style={{transform:"translateY(20px)"}}
                                uptimeIcon={CoolingIcon}
                                uptimeTitle="Cooling"
                                uptime="99.98"
                                MTBValue="500"
                                MTTRValue="2"
                                recomendations="12"
                                uptimeSVG={CoolingSvg}
                                onClick={() => props.navigatePage("Battery")}
                            />
                            <UptimeOverview style={{transform:"translateY(60px)"}}
                                uptimeIcon={RackIcon}
                                uptimeTitle="Rack"
                                uptime="99.98"
                                MTBValue="500"
                                MTTRValue="2"
                                recomendations="12"
                                uptimeSVG={RackSvg}
                                onClick={() => props.navigatePage("Ups")}
                            />
                            <UptimeOverview style={{transform:"translateY(200px)"}}
                                uptimeIcon={NetworkIcon}
                                uptimeTitle="Network"
                                uptime="99.98"
                                MTBValue="500"
                                MTTRValue="2"
                                recomendations="12"
                                uptimeSVG={NetworkSvg}
                                onClick={() => props.navigatePage("Home")}
                            />
                        </div>
                        <div style={{display:"flex", flexDirection:"row", position:"relative", gap: "40px", justifyContent:"center"}}>
                            <UptimeOverview style={{transform:"translate(-30px, 90px)"}}
                                uptimeIcon={peopleIcon}
                                uptimeTitle="People"
                                uptime="99.98"
                                MTBValue="500"
                                MTTRValue="2"
                                recomendations="12"
                                uptimeSVG={peopleSvg}
                                onClick={() => props.navigatePage("Home")}
                            />
                                <OverallOverview style={{transform:"translateY(-100px)"}}
                                uptime="91.98"
                                MTBValue="500"
                                MTTRValue="2"
                                recomendations="12"
                                uptimeSVG={OverallSvg}
                                onClick={() => props.navigatePage("Home")}
                            />
                                <UptimeOverview style={{transform:"translate(30px, 90px)"}}
                                uptimeIcon={ServerIcon}
                                uptimeTitle="Servers"
                                uptime="99.98"
                                MTBValue="500"
                                MTTRValue="2"
                                recomendations="12"
                                uptimeSVG={ServerSvg}
                                onClick={() => props.navigatePage("Home")}
                            />
                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <div className='advisories'>
                        <span className='advisoriesTitle'>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6813 3.05962V5.47978H14.841V3.05962H19.6813ZM7.58054 3.05962V10.3201H2.74023V3.05962H7.58054ZM19.6813 12.7403V20.0007H14.841V12.7403H19.6813ZM7.58054 17.5806V20.0007H2.74023V17.5806H7.58054ZM22.1015 0.639465H12.4209V7.89994H22.1015V0.639465ZM10.0007 0.639465H0.320068V12.7403H10.0007V0.639465ZM22.1015 10.3201H12.4209V22.4209H22.1015V10.3201ZM10.0007 15.1604H0.320068V22.4209H10.0007V15.1604Z" fill="url(#paint0_linear_3943_11961)"/>
                                <defs>
                                <linearGradient id="paint0_linear_3943_11961" x1="0.320068" y1="22.4209" x2="24.7883" y2="18.8012" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A6CA3B"/>
                                <stop offset="1" stop-color="#4E93E4"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            Advisories</span>
                            <div>
                                <img src={Redirection}></img>
                                <a className="advisoriesLink" href="/#">Anomalies</a>
                            </div>
                            <div>
                                <img src={Redirection}></img>
                                <a className="advisoriesLink" href="/#">Suggestions</a>
                            </div>
                            <div>
                                <img src={Redirection}></img>
                                <a className="advisoriesLink" href="/#">Recommendations</a>
                            </div>
                            <div>
                                <img src={Redirection}></img>
                                <a className="advisoriesLink" href="/#">Actions</a>
                            </div>
                    </div>
                    <div className='realTime'>
                    <RealTimeDataCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;



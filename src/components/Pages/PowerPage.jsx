import React from 'react';
import '../../styles/powerPage.css'
import ReactECharts from 'echarts-for-react';
import upsSvg from '../../assets/svg/Power/ups.svg';
import essSvg from '../../assets/svg/Power/ess.svg';
import pduSvg from '../../assets/svg/Power/pdu.svg';
import dgSvg from '../../assets/svg/Power/dg.svg';
import IconSparkle from '../../assets/svg/IconSparkle.svg' 
import PowerRepresentation  from '../PowerRepresentation';
import { color } from 'echarts';
import PaginationControl from '../../components/PaginationControl';
import '../../styles/common.css';
import sparle from '../../assets/svg/IconSparkle.svg'

let option = {
  polar: {
    radius: [50, '15%']
  },
  angleAxis: {
    max: 4,
    startAngle: 75,
    show: false // Hide the angle axis
  },
  radiusAxis: {
    type: 'category',
    show: false // Hide the radius axis
  },
  tooltip: {},
  grid: {
    left: '3%',
    right: '10%',
    bottom: '30%', // Adjusted to make room for the legend
    top: '5%',
    containLabel: true
  },
  legend: {
    data: ['UPS', 'PDU', 'DG', 'ESS'], // Add legend item names here
    top: 'bottom',
    textStyle: {
        fontSize: 8, // Set the font size of the legend text
        color:"white",
      }
  },
  series: [
    {
      type: 'bar',
      name: 'UPS', // Name of the series to match with legend
      data: [2], // Corresponding data for UPS
      coordinateSystem: 'polar',
      label: {
        show: false,
        position: 'middle',
        formatter: '{b}: {c}'
      }
    },
    {
      type: 'bar',
      name: 'PDU', // Name of the series to match with legend
      data: [1.2], // Corresponding data for PDU
      coordinateSystem: 'polar',
      label: {
        show: false,
        position: 'middle',
        formatter: '{b}: {c}'
      }
    },
    {
      type: 'bar',
      name: 'DG', // Name of the series to match with legend
      data: [2.4], // Corresponding data for DG
      coordinateSystem: 'polar',
      label: {
        show: false,
        position: 'middle',
        formatter: '{b}: {c}'
      }
    },
    {
      type: 'bar',
      name: 'ESS', // Name of the series to match with legend
      data: [3.6], // Corresponding data for ESS
      coordinateSystem: 'polar',
      label: {
        show: false,
        position: 'middle',
        formatter: '{b}: {c}'
      }
    }
  ]
};

let option1 = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['UPS', 'PDU', 'DG', 'ESS'],
      bottom: 0,
      textStyle: {
        color: 'white'
      }
    },
    grid: {
      left: '3%',
      right: '8%',
      bottom: '15%', // Adjusted to make room for the legend
      top: '5%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', '', 'Feb', '', 'Mar', '', 'Apr', '', 'May'],
        axisLabel: {
          fontSize: 8, // Smaller font size for x-axis labels
          color: "white"
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          fontSize: 8, // Smaller font size for y-axis labels
          color: "white"
        }
      }
    ],
    series: [
      {
        name: 'UPS',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 1,
        },
        showSymbol: false,
        emphasis: {
          focus: 'series'
        },
        data: [0, 50, 100, 50, 80, 30, 90, 50, 40]
      },
      {
        name: 'PDU',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 1
        },
        showSymbol: false,
        emphasis: {
          focus: 'series'
        },
        data: [80, 20, 30, 70, 20, 70, 30, 20, 30]
      },
      {
        name: 'DG',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 1
        },
        showSymbol: false,
        emphasis: {
          focus: 'series'
        },
        data: [50, 90, 60, 10, 50, 10, 60, 90, 50]
      },
      {
        name: 'ESS',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 1
        },
        showSymbol: false,
        emphasis: {
          focus: 'series'
        },
        data: [80, 40, 20, 60, 10, 60, 20, 40, 80]
      }
    ]
  };
  
  

let option4 = {
    polar: {
      radius: [50, '15%']
    },
    angleAxis: {
      max: 4,
      startAngle: 75,
      show: false // Hide the angle axis
    },
    radiusAxis: {
      type: 'category',
      show: false // Hide the radius axis
    },
    tooltip: {},
    grid: {
      left: '3%',
      right: '10%',
      bottom: '30%', // Adjusted to make room for the legend
      top: '5%',
      containLabel: true
    },
    series: [
      {
        type: 'bar',
        name: 'UPS', // Name of the series to match with legend
        data: [2], // Corresponding data for UPS
        coordinateSystem: 'polar',
        label: {
          show: false,
          position: 'middle',
          formatter: '{b}: {c}'
        }
      },
      {
        type: 'bar',
        name: 'PDU', // Name of the series to match with legend
        data: [1.2], // Corresponding data for PDU
        coordinateSystem: 'polar',
        label: {
          show: false,
          position: 'middle',
          formatter: '{b}: {c}'
        }
      },
      {
        type: 'bar',
        name: 'DG', // Name of the series to match with legend
        data: [2.4], // Corresponding data for DG
        coordinateSystem: 'polar',
        label: {
          show: false,
          position: 'middle',
          formatter: '{b}: {c}'
        }
      },
      {
        type: 'bar',
        name: 'ESS', // Name of the series to match with legend
        data: [3.6], // Corresponding data for ESS
        coordinateSystem: 'polar',
        label: {
          show: false,
          position: 'middle',
          formatter: '{b}: {c}'
        }
      }
    ]
  };
  

let option5 = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      left: '3%',
      right: '8%',
      bottom: '5%',
      top: '5%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', '', 'Feb','', 'Mar','', 'Apr','', 'May'],
        axisLabel: {
            fontSize: 8, // Smaller font size for x-axis labels
            color: "white"
          }

      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
            fontSize: 8, // Smaller font size for x-axis labels
            color: "white"
          }
      }
    ],
    series: [
      {
        name: 'Line 1',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: 'rgba(128, 255, 95, 0.4)'
        },
        emphasis: {
          focus: 'series'
        },
        data: [0, 50, 100, 50, 80, 30, 90, 50, 40]
      },
      {
        name: 'Line 2',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: 'rgba(252, 186, 3, 0.4)'
        },
        emphasis: {
          focus: 'series'
        },
        data: [80,20,30,70,20,70,30,20,30]
      },
      {
        name: 'Line 3',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: 'rgba(66, 135, 245, 0.4)'
        },
        emphasis: {
          focus: 'series'
        },
        data: [50,90,60,10,50,10,60,90,50]
      },
      {
        name: 'Line 4',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: 'rgba(235, 64, 52, 0.4)'
        },
        emphasis: {
          focus: 'series'
        },
        data: [80, 40, 20, 60, 10,60,20,40,80]
      }
    ]
  };


  let option2 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      },
      fontSize: 1,
    },
    grid: {
      left: '3%',
      right: '10%',
      bottom: '20%', // Adjusted to make room for the legend
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        fontSize: 4, // Smaller font size for x-axis labels
        color: "white"
      }
    },
    yAxis: {
      type: 'category',
      data: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      axisLabel: {
        fontSize: 4, // Smaller font size for y-axis labels
        color: "white"
      }
    },
    legend: {
      data: ['UPS', 'PDU', 'DG', 'ESS'],
      bottom: 0,
      textStyle: {
        color: 'white'
      }
    },
    series: [
      {
        name: 'UPS',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: 'PDU',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210, 220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'DG',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310, 120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'ESS',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [150, 212, 201, 154, 190, 330, 410, 150, 212, 201, 154, 190, 330, 410]
      }
    ]
  };
  

  let option6 = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '20%', // Adjusted to make room for the legend
        top: '10%',
        containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
        fontSize: 4, // Smaller font size for x-axis labels
        color: "white"
      },
      axisLine: {
        show: false // Hide x-axis line
      },
      axisTick: {
        show: false // Hide x-axis tick marks
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        fontSize: 4, // Smaller font size for x-axis labels
        color: "white"
      },
      axisLine: {
        show: false // Hide x-axis line
      },
      axisTick: {
        show: false // Hide x-axis tick marks
      }
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };  

  

function PowerPage(props) {
    return (
        <div className='powerPage'>
            <div>
            <div className="power-KPI-container">
                <div className='power-KPI'>
                    <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.716692 0.26944L0.943849 0.312032L8.52522 3.25088L17.0436 0.26944L25.0509 2.96693C25.3491 3.06631 25.562 3.32186 25.562 3.6484V25.1148C25.562 25.5123 25.2497 25.8246 24.8521 25.8246L24.625 25.782L17.0436 22.8432L8.52522 25.8246L0.51793 23.1271C0.219786 23.0278 0.00682545 22.7722 0.00682545 22.4457V0.979306C0.00682545 0.581781 0.319167 0.26944 0.716692 0.26944ZM15.6239 3.77618L9.94495 5.7638V22.3179L15.6239 20.3303V3.77618ZM22.7225 5.18171L18.4633 3.74778V20.3587L22.7225 22.0055V5.18171ZM2.84629 20.9124L7.10549 22.3463V5.74961L2.84629 4.10272V20.9124Z" fill="#FDFEFE"/>
                        </svg>
                        <span className='power-KPI-span1'>New York DC 1</span>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.4189 11.4765L33.5118 15.5693L24.7898 24.2913L17.6407 17.1421L4.39697 30.4038L6.91704 32.9238L17.6407 22.2001L24.7898 29.3493L36.0497 18.1073L40.1426 22.2001V11.4765H29.4189Z" fill="#00E85B"/>
                        </svg>
                        <span className='power-KPI-span2'>99.99%</span>
                    </div>
                </div>
                <div className='power-KPI-main'>
                    <div className='row1' style={{display:"flex", flexDirection:"row", gap:"50px"}}>
                        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"17px"}}>
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.8072 10.007H2.13743L0.303711 19.1756H18.6409L16.8072 10.007ZM15.3035 11.8407L15.6703 13.6744H10.3892V11.8407H15.3035ZM8.55546 11.8407V13.6744H3.27434L3.64108 11.8407H8.55546ZM2.90759 15.5081H8.55546V17.3419H2.54085L2.90759 15.5081ZM10.3892 17.3419V15.5081H16.037L16.4038 17.3419H10.3892Z" fill="#A6CA3B"/>
                                <path d="M10.3892 6.33953H8.55546V9.09011H10.3892V6.33953Z" fill="#A6CA3B"/>
                                <path d="M14.2205 4.31415L12.9238 5.61077L14.8688 7.55571L16.1654 6.25908L14.2205 4.31415Z" fill="#A6CA3B"/>
                                <path d="M4.72863 4.31463L2.78369 6.25957L4.08032 7.55619L6.02525 5.61125L4.72863 4.31463Z" fill="#A6CA3B"/>
                                <path d="M3.97115 0.838364H1.22057V2.67208H3.97115V0.838364Z" fill="#A6CA3B"/>
                                <path d="M17.7241 0.838364H14.9735V2.67208H17.7241V0.838364Z" fill="#A6CA3B"/>
                                <path d="M9.47232 5.42267C12.0029 5.42267 14.0566 3.3689 14.0566 0.838364H12.2229C12.2229 2.35118 10.9851 3.58895 9.47232 3.58895C7.9595 3.58895 6.72173 2.35118 6.72173 0.838364H4.88801C4.88801 3.3689 6.94178 5.42267 9.47232 5.42267Z" fill="#A6CA3B"/>
                            </svg>
                            <span className='power-KPI-body-text'>PUE</span>
                            <span className='power-KPI-body-value'>2.11</span>
                        </div>

                        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"17px"}}>
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7928 0.755219H1.95677C0.948221 0.755219 0.123047 1.58039 0.123047 2.58894V15.425C0.123047 16.4335 0.948221 17.2587 1.95677 17.2587H14.7928C15.8014 17.2587 16.6265 16.4335 16.6265 15.425V2.58894C16.6265 1.58039 15.8014 0.755219 14.7928 0.755219ZM14.7928 15.425H13.2066L14.7928 13.8388V15.425ZM14.7928 12.6744H14.0135L11.2629 15.425H9.77759L12.5282 12.6744H10.5844L7.83384 15.425H6.3577L9.10828 12.6744H7.16453L4.41395 15.425H2.72693L5.47751 12.6744H3.53377L1.95677 14.2514V2.58894H14.7928V12.6744Z" fill="#A6CA3B"/>
                                <path d="M7.15537 8.0901L8.98909 9.92382L13.6467 5.257L12.354 3.96423L8.98909 7.32911L7.15537 5.49539L3.10284 9.54791L4.39562 10.8407L7.15537 8.0901Z" fill="#A6CA3B"/>
                            </svg>
                            <span className='power-KPI-body-text'>DCiE</span>
                            <span className='power-KPI-body-value'>2.11</span>
                        </div>

                        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"17px"}}>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.862 4.58891V19.2587C15.862 19.763 15.4494 20.1755 14.9451 20.1755H7.61022C7.10595 20.1755 6.69336 19.763 6.69336 19.2587V4.58891C6.69336 4.08464 7.10595 3.67205 7.61022 3.67205H9.44394V1.83833H13.1114V3.67205H14.9451C15.4494 3.67205 15.862 4.08464 15.862 4.58891ZM14.0282 5.50577H8.52708V11.0069H14.0282V5.50577Z" fill="#A6CA3B"/>
                            </svg>

                            <span className='power-KPI-body-text'>Power Density</span>
                            <span className='power-KPI-body-value'>2.11</span>
                        </div>
                    </div>
                    <div className='row2' style={{display:"flex", flexDirection:"row", gap:"50px"}}>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"17px"}}>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0767 6.96933H10.3261C9.82182 6.96933 9.40923 7.38192 9.40923 7.88619V11.5536C9.40923 12.0579 9.82182 12.4705 10.3261 12.4705H13.0767C13.5809 12.4705 13.9935 12.0579 13.9935 11.5536V7.88619C13.9935 7.38192 13.5809 6.96933 13.0767 6.96933ZM12.6182 11.0952H10.7845V8.34462H12.6182V11.0952ZM7.57551 10.6368V11.5536C7.57551 12.0579 7.16293 12.4705 6.65865 12.4705H3.90807C3.4038 12.4705 2.99121 12.0579 2.99121 11.5536V7.88619C2.99121 7.38192 3.4038 6.96933 3.90807 6.96933H6.65865C7.16293 6.96933 7.57551 7.38192 7.57551 7.88619V8.80305H6.20022V8.34462H4.3665V11.0952H6.20022V10.6368H7.57551ZM19.0363 12.9289H17.2025V13.8458H19.9531V15.2211H15.8273V12.9289C15.8273 12.4246 16.2398 12.0121 16.7441 12.0121H18.5778V11.0952H15.8273V9.71991H19.0363C19.5405 9.71991 19.9531 10.1325 19.9531 10.6368V12.0121C19.9531 12.5163 19.5405 12.9289 19.0363 12.9289Z" fill="#A6CA3B"/>
                            </svg>
                            <span className='power-KPI-body-text'>CUE</span>
                            <span className='power-KPI-body-value'>2.11</span>
                        </div>

                        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"17px"}}>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2915 3.7603V6.20831L11.3747 7.12517L10.4578 6.20831V3.7603H12.2915ZM18.7095 10.1783V12.012H16.2615L15.3447 11.0952L16.2615 10.1783H18.7095ZM6.48779 10.1783L7.40465 11.0952L6.48779 12.012H4.03978V10.1783H6.48779ZM11.3747 15.0652L12.2915 15.982V18.4301H10.4578V15.982L11.3747 15.0652ZM14.1252 1.92657H8.62408V6.96931L11.3747 9.71989L14.1252 6.96931V1.92657ZM20.5433 8.3446H15.5005L12.75 11.0952L15.5005 13.8458H20.5433V8.3446ZM7.24879 8.3446H2.20605V13.8458H7.24879L9.99937 11.0952L7.24879 8.3446ZM11.3747 12.4705L8.62408 15.2211V20.2638H14.1252V15.2211L11.3747 12.4705Z" fill="#A6CA3B"/>
                            </svg>
                            <span className='power-KPI-body-text'>PCU</span>
                            <span className='power-KPI-body-value'>2.11</span>
                        </div>

                        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"17px"}}>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9451 3.76033H13.1114V1.92661H9.44394V3.76033H7.61022C7.10595 3.76033 6.69336 4.17291 6.69336 4.67719V19.347C6.69336 19.8512 7.10595 20.2638 7.61022 20.2638H14.9451C15.4494 20.2638 15.862 19.8512 15.862 19.347V4.67719C15.862 4.17291 15.4494 3.76033 14.9451 3.76033ZM14.0282 12.9289H12.1945V14.7627H10.3608V12.9289H8.52708V11.0952H10.3608V9.26149H12.1945V11.0952H14.0282V12.9289Z" fill="#A6CA3B"/>
                            </svg>
                            <span className='power-KPI-body-text'>PPU</span>
                            <span className='power-KPI-body-value'>2.11</span>
                        </div>
                    </div>
                </div>
            </div>
            <PowerRepresentation
                className="UPS-boxShadow"
                icon={upsSvg}
                availabilityValue="98"
                loadValue="97"
                health="96"
                efficiency= "95"
                alerts="94"
                recommendations="93"
            />
            <PowerRepresentation
                className="PDU-boxShadow"
                icon={essSvg}
                availabilityValue="98"
                loadValue="97"
                health="96"
                efficiency= "95"
                alerts="94"
                recommendations="93"
            />
            <PowerRepresentation
                className="DG-boxShadow"
                icon={dgSvg}
                availabilityValue="98"
                loadValue="97"
                health="96"
                efficiency= "95"
                alerts="94"
                recommendations="93"
            />

            <PowerRepresentation
                className="ESS-boxShadow"
                icon={pduSvg}
                availabilityValue="98"
                loadValue="97"
                health="96"
                efficiency= "95"
                alerts="94"
                recommendations="93"
            />
            </div>
            <div className='powerRightPanel' style={{display:"flex", flexDirection:"column"}}>
                <div className='accordian d-flex justify-content-around'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6809 13.7698H3.86813V3.95709H8.77451V2.55527H3.86813C3.09012 2.55527 2.46631 3.18609 2.46631 3.95709V13.7698C2.46631 14.5408 3.09012 15.1717 3.86813 15.1717H13.6809C14.4519 15.1717 15.0827 14.5408 15.0827 13.7698V8.86347H13.6809V13.7698ZM10.1763 2.55527V3.95709H12.6926L5.80264 10.847L6.79093 11.8353L13.6809 4.94537V7.46164H15.0827V2.55527H10.1763Z" fill="#7EB3F1"/>
                    </svg>
                    <span>Metrics</span>
                    <span style={{display:"flex", flexDirection:"row", alignItems:"center", gap: "8px"}}>
                        <div className='orangeDot'></div>
                        Battery Health
                    </span>
                    <span style={{display:"flex", flexDirection:"row", alignItems:"center", gap: "8px"}}>
                    <div className='orangeDot'></div>
                        Load
                    </span>
                    <span style={{display:"flex", flexDirection:"row", alignItems:"center", gap: "8px"}}>
                        <div className='orangeDot'></div>
                        Efficiency
                    </span>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.19326 5.81407L4.98779 10.0195L5.97608 11.0078L9.19326 7.79765L12.4104 11.0078L13.3987 10.0195L9.19326 5.81407Z" fill="#ECECEC"/>
                    </svg>
                </div>
                <div style={{display:"flex", flexDirection:"row", position:"relative", gap:"20px"}}>
                    <div className='power-real-time'>
                        <div className='card-header'>
                            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6194 0.8992C5.93971 0.8992 0.518555 6.32036 0.518555 13C0.518555 19.6796 5.93971 25.1008 12.6194 25.1008H22.3C23.6311 25.1008 24.7201 24.0117 24.7201 22.6806V13C24.7201 6.32036 19.299 0.8992 12.6194 0.8992ZM12.6194 22.6806C9.12222 22.6806 6.04862 20.8171 4.35451 18.0339L7.92424 14.4642L11.9054 17.8403L17.4597 12.2981V14.2101H19.8798V8.15968H13.8294V10.5798H15.7414L11.7723 14.5489L7.77903 11.1849L3.31384 15.6622C3.07182 14.8151 2.93871 13.9197 2.93871 13C2.93871 7.66355 7.2829 3.31936 12.6194 3.31936C17.9558 3.31936 22.3 7.66355 22.3 13C22.3 18.3364 17.9558 22.6806 12.6194 22.6806ZM21.6949 23.2857C21.0294 23.2857 20.4849 22.7411 20.4849 22.0756C20.4849 21.41 21.0294 20.8655 21.6949 20.8655C22.3605 20.8655 22.905 21.41 22.905 22.0756C22.905 22.7411 22.3605 23.2857 21.6949 23.2857Z" fill="url(#paint0_linear_4101_1904)"/>
                                <defs>
                                <linearGradient id="paint0_linear_4101_1904" x1="0.518555" y1="25.1008" x2="27.7054" y2="21.0789" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A6CA3B"/>
                                <stop offset="1" stop-color="#4E93E4"/>
                                </linearGradient>
                                </defs>
                             </svg>
                            <span>Real Time</span>
                        </div>
                        <div className='pagination' style={{justifyContent:"center", marginTop:"25px", marginBottom:"25px"}}>
                            <PaginationControl size="small"></PaginationControl>
                        </div>

                        <div className='card-body'>
                            <div className="power-visalizer-card">
                                <div className='header' style={{display:"flex", flexDirection:"row", gap:"20px", }}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8987 11.7031H2.0859V1.89039H6.99228V0.488564H2.0859C1.30789 0.488564 0.684082 1.11938 0.684082 1.89039V11.7031C0.684082 12.4741 1.30789 13.105 2.0859 13.105H11.8987C12.6697 13.105 13.3005 12.4741 13.3005 11.7031V6.79676H11.8987V11.7031ZM8.3941 0.488564V1.89039H10.9104L4.02042 8.78034L5.0087 9.76862L11.8987 2.87867V5.39494H13.3005V0.488564H8.3941Z" fill="#7EB3F1"/>
                                    </svg>
                                    <span>Battery Health</span>
                                </div>
                                <div className='body' style={{ height:"85%"}}>
                                    <ReactECharts option={option1} style={{ height: '100%', width: '100%'}} />
                                </div>
                            </div>

                            <div className="power-visalizer-card">
                                <div className='header' style={{display:"flex", flexDirection:"row", gap:"20px", }}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8987 11.7031H2.0859V1.89039H6.99228V0.488564H2.0859C1.30789 0.488564 0.684082 1.11938 0.684082 1.89039V11.7031C0.684082 12.4741 1.30789 13.105 2.0859 13.105H11.8987C12.6697 13.105 13.3005 12.4741 13.3005 11.7031V6.79676H11.8987V11.7031ZM8.3941 0.488564V1.89039H10.9104L4.02042 8.78034L5.0087 9.76862L11.8987 2.87867V5.39494H13.3005V0.488564H8.3941Z" fill="#7EB3F1"/>
                                    </svg>
                                    <span>Battery Health</span>
                                </div>
                                <div className='body'>
                                    <div className='body' style={{ height:"133px", width:"auto"}}>
                                        <ReactECharts option={option2} style={{ height: '100%', width: '100%'}} />
                                    </div>
                                </div>
                            </div>

                            <div className="power-visalizer-card">
                                <div className='header' style={{display:"flex", flexDirection:"row", gap:"20px", }}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8987 11.7031H2.0859V1.89039H6.99228V0.488564H2.0859C1.30789 0.488564 0.684082 1.11938 0.684082 1.89039V11.7031C0.684082 12.4741 1.30789 13.105 2.0859 13.105H11.8987C12.6697 13.105 13.3005 12.4741 13.3005 11.7031V6.79676H11.8987V11.7031ZM8.3941 0.488564V1.89039H10.9104L4.02042 8.78034L5.0087 9.76862L11.8987 2.87867V5.39494H13.3005V0.488564H8.3941Z" fill="#7EB3F1"/>
                                    </svg>
                                    <span>Battery Health</span>
                                </div>
                                <div className='body'>
                                    <div className='body' style={{ height:"133px", width:"auto"}}>
                                        <ReactECharts option={option} style={{ height: '100%', width: '100%'}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                        
                    <div className='power-real-time'>
                        <div className='card-header'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.9303 10.1597C27.9303 11.4908 26.8413 12.5798 25.5102 12.5798C25.2924 12.5798 25.0867 12.5556 24.893 12.4951L20.5852 16.7909C20.6457 16.9845 20.6699 17.2023 20.6699 17.4202C20.6699 18.7512 19.5808 19.8403 18.2497 19.8403C16.9186 19.8403 15.8295 18.7512 15.8295 17.4202C15.8295 17.2023 15.8537 16.9845 15.9143 16.7909L12.8286 13.7052C12.6349 13.7657 12.4171 13.7899 12.1993 13.7899C11.9815 13.7899 11.7637 13.7657 11.5701 13.7052L6.06421 19.2232C6.12471 19.4168 6.14891 19.6225 6.14891 19.8403C6.14891 21.1714 5.05984 22.2605 3.72875 22.2605C2.39767 22.2605 1.30859 21.1714 1.30859 19.8403C1.30859 18.5092 2.39767 17.4202 3.72875 17.4202C3.94657 17.4202 4.15228 17.4444 4.34589 17.5049L9.86385 11.999C9.80335 11.8054 9.77915 11.5876 9.77915 11.3698C9.77915 10.0387 10.8682 8.9496 12.1993 8.9496C13.5304 8.9496 14.6195 10.0387 14.6195 11.3698C14.6195 11.5876 14.5953 11.8054 14.5348 11.999L17.6205 15.0847C17.8141 15.0242 18.0319 15 18.2497 15C18.4675 15 18.6853 15.0242 18.8789 15.0847L23.1747 10.7768C23.1142 10.5832 23.09 10.3775 23.09 10.1597C23.09 8.82859 24.1791 7.73952 25.5102 7.73952C26.8413 7.73952 27.9303 8.82859 27.9303 10.1597Z" fill="url(#paint0_linear_4101_1492)"/>
                            <defs>
                            <linearGradient id="paint0_linear_4101_1492" x1="1.30859" y1="22.2605" x2="29.7747" y2="14.54" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A6CA3B"/>
                            <stop offset="1" stop-color="#4E93E4"/>
                            </linearGradient>
                            </defs>
                        </svg>

                            <span>Analytics</span>
                        </div>
                        <div className='pagination' style={{justifyContent:"center", marginTop:"25px", marginBottom:"25px"}}>
                            <PaginationControl size="small"></PaginationControl>
                        </div>


                        <div className='card-body'>
                            <div className="power-visalizer-card">
                                <div className='header' style={{display:"flex", flexDirection:"row", gap:"20px", }}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8987 11.7031H2.0859V1.89039H6.99228V0.488564H2.0859C1.30789 0.488564 0.684082 1.11938 0.684082 1.89039V11.7031C0.684082 12.4741 1.30789 13.105 2.0859 13.105H11.8987C12.6697 13.105 13.3005 12.4741 13.3005 11.7031V6.79676H11.8987V11.7031ZM8.3941 0.488564V1.89039H10.9104L4.02042 8.78034L5.0087 9.76862L11.8987 2.87867V5.39494H13.3005V0.488564H8.3941Z" fill="#7EB3F1"/>
                                    </svg>
                                    <span>Battery Health</span>
                                </div>
                                <div className='body' style={{ height:"85%"}}>
                                    <ReactECharts option={option4} style={{ height: '100%', width: '100%'}} />
                                </div>
                                <div>
                                    <img src={sparle}></img>
                                    <span className='recomendation-text'>3 Recomendations</span>
                                </div>
                            </div>

                            <div className="power-visalizer-card">
                                <div className='header' style={{display:"flex", flexDirection:"row", gap:"20px", }}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8987 11.7031H2.0859V1.89039H6.99228V0.488564H2.0859C1.30789 0.488564 0.684082 1.11938 0.684082 1.89039V11.7031C0.684082 12.4741 1.30789 13.105 2.0859 13.105H11.8987C12.6697 13.105 13.3005 12.4741 13.3005 11.7031V6.79676H11.8987V11.7031ZM8.3941 0.488564V1.89039H10.9104L4.02042 8.78034L5.0087 9.76862L11.8987 2.87867V5.39494H13.3005V0.488564H8.3941Z" fill="#7EB3F1"/>
                                    </svg>
                                    <span>Battery Health</span>
                                </div>
                                <div className='body'>
                                    <div className='body' style={{height:"100px", width:"auto"}}>
                                        <ReactECharts option={option5} style={{ height: '100%', width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <img src={sparle}></img>
                                    <span className='recomendation-text'>4 Recomendations</span>
                                </div>
                            </div>

                            <div className="power-visalizer-card">
                                <div className='header' style={{display:"flex", flexDirection:"row", gap:"20px", }}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8987 11.7031H2.0859V1.89039H6.99228V0.488564H2.0859C1.30789 0.488564 0.684082 1.11938 0.684082 1.89039V11.7031C0.684082 12.4741 1.30789 13.105 2.0859 13.105H11.8987C12.6697 13.105 13.3005 12.4741 13.3005 11.7031V6.79676H11.8987V11.7031ZM8.3941 0.488564V1.89039H10.9104L4.02042 8.78034L5.0087 9.76862L11.8987 2.87867V5.39494H13.3005V0.488564H8.3941Z" fill="#7EB3F1"/>
                                    </svg>
                                    <span>Battery Health</span>
                                </div>
                                <div className='body'>
                                    <div className='body' style={{ height:"100px", width:"auto"}}>
                                        <ReactECharts option={option6} style={{ height: '100%', width: '100%'}} />
                                    </div>
                                </div>
                                <div>
                                    <img src={sparle}></img>
                                    <span className='recomendation-text'>4 Recomendations</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PowerPage;
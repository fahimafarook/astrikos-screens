import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import upsSvg from '../assets/svg/Power/ups.svg';
import essSvg from '../assets/svg/Power/ess.svg';
import pduSvg from '../assets/svg/Power/pdu.svg';
import dgSvg from '../assets/svg/Power/dg.svg';
import IconSparkle from '../assets/svg/IconSparkle.svg';
import {curveFillGraph} from '../data/curveFillGraph.js'

function PowerRepresentation(props) {

    const [loadData, sertLoadData] = useState(0);
    const [healthData, setHealthData] = useState(0);
    const [efficiencyData, setEfficiencyData] = useState(0);

    let LoadDataOptions = {
        series: [
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            splitNumber: 12,
            itemStyle: {
              color: '#58D9F9',
              shadowColor: 'rgba(0,138,255,0.45)',
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2
            },
            progress: {
              show: true,
              roundCap: true,
              width: 5 // Adjust the thickness of the progress bar
            },
            pointer: {
              icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
              length: '75%',
              width: 2, // Adjust the thickness of the pointer
              offsetCenter: [0, '5%']
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 5// Adjust the thickness of the axis line
              }
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 0, // Adjust the thickness of the axis ticks
                color: '#999'
              }
            },
            splitLine: {
              length: 12,
              lineStyle: {
                width: 0, // Adjust the thickness of the split lines
                color: '#999'
              }
            },
            axisLabel: {
              show: false // Hide axis labels
            },
            title: {
              show: false
            },
            detail: {
              show: false // Hide detail text
            },
            data: [
              {
                value: 100,
              }
            ]
          }
        ]
      };

      let healthDataoptions = {
        series: [
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            splitNumber: 12,
            itemStyle: {
              color: '#D89614',
              shadowColor: 'rgba(0,138,255,0.45)',
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2
            },
            progress: {
              show: true,
              roundCap: true,
              width: 5 // Adjust the thickness of the progress bar
            },
            pointer: {
              icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
              length: '75%',
              width: 2, // Adjust the thickness of the pointer
              offsetCenter: [0, '5%']
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 5// Adjust the thickness of the axis line
              }
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 0, // Adjust the thickness of the axis ticks
                color: '#999'
              }
            },
            splitLine: {
              length: 12,
              lineStyle: {
                width: 0, // Adjust the thickness of the split lines
                color: '#999'
              }
            },
            axisLabel: {
              show: false // Hide axis labels
            },
            title: {
              show: false
            },
            detail: {
              show: false // Hide detail text
            },
            data: [
              {
                value: 70,
              }
            ]
          }
        ]
      };

    //   <div className='powerPage'>
    //         <PowerRepresentation
    //             icon={upsSvg}
    //             availabilityValue="98"
    //             loadValue="97"
    //             health="96"
    //             efficiency= "95"
    //             alerts="94"
    //             recommendations="93"
    //         />
    //     </div>

    return (
        <div className='powerRepresentations'>
                <div className='powerVisual upsStatus'>
                    <div className='svgHighlighter'>
                        <img src={props.icon}></img>
                        <span className='title'>UPS</span>
                    </div>
                    <div className='powerCardBody'>
                        <div className='power-card-metric'>
                            <span className='title'>Availability</span>
                            <span className='status'>Optimal</span>
                            <div className='battery-representation'>
                                <span className='value'>{props.availabilityValue}%</span>
                            </div>
                        </div>
                        <div className='power-card-metric'>
                            <span className='title'>Load</span>
                            <span className='status'>Optimal</span>
                            <div style={{width:"150px", height:"80px"}}>
                                <ReactECharts option={LoadDataOptions} style={{ height: '100%', width: '100%' }} />
                            </div>
                        </div>
                        <div className='power-card-metric'>
                            <span className='title'>Health</span>
                            <span className='status'>Optimal</span>
                            <div style={{width:"150px", height:"80px"}}>
                                <ReactECharts option={healthDataoptions} style={{ height: '100%', width: '100%' }} />
                            </div>
                           
                        </div>
                        <div className='power-card-metric'>
                            <span className='title'>Efficiency</span>
                            <span className='status'>Optimal</span>
                            <div style={{width:"150px", height:"80px"}}>
                                <ReactECharts option={curveFillGraph} style={{ height: '100%', width: '100%' }} />
                            </div>
                        </div>
                        <div className='power-card-recomendation'>
                            <span className='title'>Alerts & Recommendations</span>
                            <div className='alerts'>
                                <div className='indicator'></div>
                                <span className='value'>2 Alters</span>
                            </div>
                            <div className='recomendations'>
                                <img src={IconSparkle}></img>
                                <span>12 recomendations</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='powerVisual pduStatus'></div>
                <div className='powerVisual dgStatus'></div>
                <div className='powerVisual essStatus'></div>
            </div>
    );
}

export default PowerRepresentation;
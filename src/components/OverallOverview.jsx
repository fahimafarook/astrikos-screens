import React from 'react';
import animationData from '../assets/Lottie/Animation - 1717998174628.json';
import Lottie from 'react-lottie';
import securitySvg from '../assets/svg/uptimeSVG/Security.svg'
import IconSparkle from '../assets//svg/IconSparkle.svg'
import GlowEffect from '../assets/svg/HomePageGlow.svg'
import ReactECharts from 'echarts-for-react';
import '../styles/homePage.css'

function OverallOverview(props) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    let option3 = {
        series: [
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '90%',
            min: 0,
            max: 1,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.25, '#FF6E76'],
                  [0.5, '#FDDD60'],
                  [0.75, '#58D9F9'],
                  [1, '#7CFFB2']
                ]
              }
            },
            pointer: {
              icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
              length: '12%',
              width: 20,
              offsetCenter: [0, '-60%'],
              itemStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: 'auto',
                width: 2
              }
            },
            splitLine: {
              length: 20,
              lineStyle: {
                color: 'auto',
                width: 5
              }
            },
            axisLabel: {
              color: '#464646',
              fontSize: 10,
              distance: -60,
              rotate: 'tangential',
              formatter: function (value) {
                if (value === 0.875) {
                  return '';
                } else if (value === 0.625) {
                  return '';
                } else if (value === 0.375) {
                  return '';
                } else if (value === 0.125) {
                  return '';
                }
                return '';
              }
            },
            title: {
              offsetCenter: [0, '-10%'],
              fontSize: 7,
            },
            detail: {
              fontSize: 15,
              offsetCenter: [0, '-35%'],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 100) + '';
              },
              color: 'inherit'
            },
            data: [
              {
                value: 0.7,
              }
            ]
          }
        ]
      };

    return (
        <div>
            <div className='securityUptime' style={props.style}>
            <ReactECharts option={option3} style={{ height: '100%', width: '100%', transform:"translateY(30px)" }} />
                <span className='OA-uptime'>{props.uptime}</span>
                <div className='OA-MTFB'>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4116 5.98544V9.98544H10.4116V5.98544H11.4116ZM10.4116 10.9854V11.9854H11.4116V10.9854H10.4116ZM9.41162 9.63044C8.67662 10.4604 7.60662 10.9854 6.41162 10.9854C4.20662 10.9854 2.41162 9.19044 2.41162 6.98544C2.41162 4.78044 4.20662 2.98544 6.41162 2.98544V7.48544L10.1866 3.71044C9.27162 2.65544 7.92162 1.98544 6.41162 1.98544C3.65162 1.98544 1.41162 4.22544 1.41162 6.98544C1.41162 9.74544 3.65162 11.9854 6.41162 11.9854C7.53662 11.9854 8.57662 11.6154 9.41162 10.9854V9.63044Z" fill="#FF8E14"/>
                    </svg>
                    <span className='OA-text'>MTBF</span>
                    <span className='OA-value'>{props.MTBValue} hours</span>
                </div>
                <div className='OA-MTTR'>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.41162 0.336082C2.65162 0.336082 0.411621 2.57608 0.411621 5.33608C0.411621 8.09608 2.65162 10.3361 5.41162 10.3361C8.17162 10.3361 10.4116 8.09608 10.4116 5.33608C10.4116 2.57608 8.17162 0.336082 5.41162 0.336082ZM5.41162 9.33608C3.20662 9.33608 1.41162 7.54108 1.41162 5.33608C1.41162 3.13108 3.20662 1.33608 5.41162 1.33608C7.61662 1.33608 9.41162 3.13108 9.41162 5.33608C9.41162 7.54108 7.61662 9.33608 5.41162 9.33608ZM7.70662 3.12608L4.41162 6.42108L3.11662 5.13108L2.41162 5.83608L4.41162 7.83608L8.41162 3.83608L7.70662 3.12608Z" fill="#00FF64"/>
                    </svg>
                    <span className='OA-text'>MTTR</span>
                    <span className='OA-value'>{props.MTTRValue} hours</span>
                </div>
                <div className='recomendations'>
                    <img src={IconSparkle}></img>
                    <span>{props.recomendations} Recommendations</span>
                    <Lottie options={defaultOptions} height={40} width={30} style={{transform:"translateY(20px)"}}/>
                    <img src={props.uptimeSVG}></img>
                    <img src={GlowEffect} style={{transform:"translate(-30px, -300px)",}}/>
                </div>
            </div>
        </div>
    );
}

export default OverallOverview;
import React from 'react';
import '../../styles/powerPage.css'
import ReactECharts from 'echarts-for-react';
import upsSvg from '../../assets/svg/Power/ups.svg';
import essSvg from '../../assets/svg/Power/ess.svg';
import pduSvg from '../../assets/svg/Power/pdu.svg';
import dgSvg from '../../assets/svg/Power/dg.svg';
import IconSparkle from '../../assets/svg/IconSparkle.svg' 
import PowerRepresentation  from '../PowerRepresentation';

function PowerPage(props) {
    return (
        <div className='powerPage'>
            <div>
            <PowerRepresentation
                icon={upsSvg}
                availabilityValue="98"
                loadValue="97"
                health="96"
                efficiency= "95"
                alerts="94"
                recommendations="93"
            />
            <PowerRepresentation
                icon={essSvg}
                availabilityValue="98"
                loadValue="97"
                health="96"
                efficiency= "95"
                alerts="94"
                recommendations="93"
            />
            <PowerRepresentation
                icon={dgSvg}
                availabilityValue="98"
                loadValue="97"
                health="96"
                efficiency= "95"
                alerts="94"
                recommendations="93"
            />

            <PowerRepresentation
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
                    </div>
                    <div className='power-real-time'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PowerPage;
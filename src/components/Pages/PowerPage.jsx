import React from 'react';
import '../../styles/powerPage.css'
import upsSvg from '../../assets/svg/Power/ups.svg';
import essSvg from '../../assets/svg/Power/ess.svg';
import pduSvg from '../../assets/svg/Power/pdu.svg';
import dgSvg from '../../assets/svg/Power/dg.svg';

function PowerPage(props) {
    return (
        <div className='powerPage'>
            <div className='powerRepresentations'>
                <div className='powerVisual upsStatus'>
                    <div className='svgHighlighter'>
                        <img src={upsSvg}></img>
                    </div>
                    <div className='powerCardBody'></div>
                </div>
                <div className='powerVisual pduStatus'></div>
                <div className='powerVisual dgStatus'></div>
                <div className='powerVisual essStatus'></div>

            </div>
        </div>
    );
}

export default PowerPage;
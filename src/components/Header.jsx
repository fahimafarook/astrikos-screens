import React from 'react';
import '../styles/header.css';
import PredictiveAnalysispa from '../assets/svg/PredictiveAnalysispa.svg'
import AstrikosLogo from '../assets/svg/AstrikosLogo.svg'
import HeaderLogoBorder from '../assets/svg/HeaderLogoBorder.svg'
import HeaderTitleLeftCurve from '../assets/svg/HeaderTitleLeftCurve.svg'
import BtnPrev from '../assets/svg/HeaderBtnPrev.svg'
import BtnHome from '../assets/svg/HeaderBtnHome.svg'
import BtnNext from '../assets/svg/HeaderBtnNext.svg'
import BtnLocate from '../assets/svg/HeaderBtnLocate.svg'
import BtnMoreOption from '../assets/svg/HeaderBtnMoreOption.svg'

import BtnNotification from '../assets/svg/HeaderBtnNotification.svg'
import BtnSnooze from '../assets/svg/HeaderBtnSnooze.svg'
import BtnSparkle from '../assets/svg/HeaderBtnSparkle.svg'
import BtnNote from '../assets/svg/HeaderBtnNote.svg'
import BtnClock from '../assets/svg/HeaderBtnClock.svg'
import BtnTransfer from '../assets/svg/HeaderBtnTransfer.svg'
import BtnPage from '../assets/svg/HeaderBtnPage.svg'
import BtnProfile from '../assets/svg/HeaderBtnProfile.svg'

function Header(props) {
    return (
        <div className="app-header">
            <div className="header-logo-container" onClick={() => props.navigatePage("Home")}>
                <img className="header-logo" src={AstrikosLogo}></img>
                <img style={{position: "absolute", left:0, top:0}} src={HeaderLogoBorder}></img>
            </div>
            <div className="header-left-buttons">
                <button className={`header-tile-button btn-prev`} onClick={() => props.navigatePrevPage()}>
                    <img src={BtnPrev} />
                </button>
                <button className="header-tile-button btn-home" onClick={() => props.navigatePage("Home")}>
                    <img src={BtnHome} />
                </button>
                <button className={`header-tile-button btn-next`} onClick={() => props.navigateNextPage()}>
                    <img src={BtnNext} />
                </button>
                <button className="header-tile-button btn-locate">
                    <img src={BtnLocate} />
                </button>
                <button className="header-tile-button btn-more-option">
                    <img src={BtnMoreOption} />
                </button>
            </div>
            <div className="header-title">
                <img src={HeaderTitleLeftCurve} />
                <div className="title-container">
                    <img src={props.titleIcon} className="title-icon"/>
                    <div className="title-text">{props.title}</div>
                </div>
                <img src={HeaderTitleLeftCurve} style={{transform:"rotateY(180deg)"}}></img>
            </div>
            <div className="header-right-buttons">
                <button className='icon-btn'>
                    <img src={BtnNotification} />
                </button>
                <button className='icon-btn'>
                    <img src={BtnSnooze} />
                </button>
                <button className='icon-btn'>
                    <img src={BtnSparkle} />
                </button>
                <button className='icon-btn'>
                    <img src={BtnNote} />
                </button>
                <button className='icon-btn'>
                    <img src={BtnClock} />
                </button>
                <button className='icon-btn'>
                    <img src={BtnPage} />
                </button>
                <button className='icon-btn'>
                    <img src={BtnTransfer} />
                </button>
            </div>
            <button className='btn-profile'>
                <div style={{padding:"0",paddingRight:"3px"}}>IBMSSuprvr 1</div>
                <img src={BtnProfile} style={{height:"13.55px", width:"14.55px"}} />
            </button>
        </div>
    );
}

export default Header;

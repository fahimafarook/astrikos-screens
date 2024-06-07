import React from 'react';
import '../../styles/homePage.css'
import KPICard from '../KPICard';
import SideNav from '../SideNav';

function HomePage(props) {
    return (
        <div className='homePage'>
            <SideNav></SideNav>
            <KPICard style={{marginLeft:"auto", marginRight:"auto"}}></KPICard>
        </div>
    );
}

export default HomePage;


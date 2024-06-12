import {useState, useEffect} from "react"
import './App.css';
import Header from '../src/components/Header.jsx'
import KPICard from '../src/components/KPICard';
import SideNav from '../src/components/SideNav';
import HomePage  from './components/Pages/HomePage.jsx';
import PowerPage from './components/Pages/PowerPage.jsx';
import UPSSystem from "./components/Pages/UPSSystem.jsx"
import BatteryHealthPrediction from './components/Pages/BatteryHealthPrediction.jsx'

import IconTrendingUp from  "../src/assets/svg/HeaderTitleIconTrendingUp.svg"
import IconBattery from "../src/assets/svg/HeaderTitleIconBattery.svg"
import IconUPS from "../src/assets/svg/HeaderTitle/UPSSystem.svg"
import IconPower from "../src/assets/svg/HeaderTitle/Power.svg"

const headerConfig = {
  Home: {title: "Uptime and Reliability", icon: IconTrendingUp},
  Battery: {title: "Battery Health Prediction", icon: IconBattery},
  Ups: {title: "UPS System", icon: IconUPS},
  Power: {title: "Power", icon:IconPower}
}

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [header, setHeader] = useState(headerConfig[currentPage]);

  useEffect(() => {
    setHeader(headerConfig[currentPage]);
  }, [currentPage]);

  const navigatePage = (pageName) => {
    console.log("**** In navigatePage ****" + pageName)
    setCurrentPage(pageName);
  }


  return (
    <div className="App">
      <Header title={header.title} titleIcon={header.icon} navigatePage={navigatePage}></Header>
        <div style={{display:"flex"}}>
          <SideNav/>
          <div className="app-container">
            <KPICard />
            {
              {
                'Home':  <HomePage navigatePage={navigatePage}></HomePage>,
                'Battery':  <BatteryHealthPrediction navigatePage={navigatePage}></BatteryHealthPrediction>,
                'Ups':  <UPSSystem navigatePage={navigatePage}></UPSSystem>,
                'Power': <PowerPage />
              }[currentPage]
              
            }
            {/* <HomePage navigatePage={navigatePage}></HomePage> */}
            {/* <UPSSystem /> */}
            {/* <BatteryHealthPrediction></BatteryHealthPrediction> */}
            {/* <PowerPage></PowerPage> */}
          </div>
        </div>
    </div>
  );
}

export default App;

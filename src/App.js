import {useState, useEffect, useRef} from "react"
import './App.css';
import Header from '../src/components/Header.jsx'
import KPICard from '../src/components/KPICard';
import SideNav from '../src/components/SideNav';
import HomePage  from './components/Pages/HomePage.jsx';
import PowerPage from './components/Pages/PowerPage.jsx';
import UPSSystem from "./components/Pages/UPSSystem.jsx"
import BatteryHealthPrediction from './components/Pages/BatteryHealthPrediction.jsx'
import LoginPage from '../src/components/Pages/LoginPage.jsx'

import IconTrendingUp from  "../src/assets/svg/HeaderTitleIconTrendingUp.svg"
import IconBattery from "../src/assets/svg/HeaderTitleIconBattery.svg"
import IconUPS from "../src/assets/svg/HeaderTitle/UPSSystem.svg"
import IconPower from "../src/assets/svg/HeaderTitle/Power.svg"

import waterMark from "../src/assets/svg/watermark.svg"

const headerConfig = {
  LoginPage:{title: "Login", icon: IconTrendingUp},
  Home: {title: "Uptime and Reliability", icon: IconTrendingUp},
  Battery: {title: "Battery Health Prediction", icon: IconBattery},
  Ups: {title: "UPS System", icon: IconUPS},
  Power: {title: "Power", icon:IconPower}
}

function App() {
  const [currentPage, setCurrentPage] = useState("Login");
  const [header, setHeader] = useState(headerConfig[currentPage]);
  const pageHistory = useRef(['Login']);
  const currPageIndex = useRef(0)
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    setHeader(headerConfig[currentPage]);
  }, [currentPage]);

  const navigatePage = (pageName) => {
    if(pageHistory.current.at(-1) !== pageName) {
      console.log("**** In navigatePage ****" + pageName)
      setCurrentPage(pageName);
      // pageHistory.current = pageHistory.current.slice(0, currentPageIndex + 1);
      pageHistory.current = pageHistory.current.slice(0, currPageIndex.current + 1);
      pageHistory.current.push(pageName);
      // setCurrentPageIndex(pageHistory.current.length - 1);
      currPageIndex.current = (pageHistory.current.length - 1);
    }
  }

  const navigatePrevPage = () => {
    // if(currentPageIndex > 0) {
      if(currPageIndex.current > 0) {
      // setCurrentPageIndex(curr => {
      //   return curr - 1;
      // });
      currPageIndex.current = currPageIndex.current - 1;
      // setCurrentPage(pageHistory.current.at(currentPageIndex));
      setCurrentPage(pageHistory.current.at(currPageIndex.current));
    }
  }

  const navigateNextPage = () => {
    // if(currentPageIndex < (pageHistory.current.length - 1)) {
      if(currPageIndex.current < (pageHistory.current.length - 1)) {
      // setCurrentPageIndex(curr => {
      // setCurrentPageIndex(curr => {
      //   return curr + 1;
      // });
      currPageIndex.current = currPageIndex.current + 1;
      // setCurrentPage(pageHistory.current.at(currentPageIndex));
      setCurrentPage(pageHistory.current.at(currPageIndex.current));
    }
  }

  return (
    <div className="App">
      {currentPage == 'Login' ?
          <LoginPage navigatePage={navigatePage}></LoginPage>:
          <div>
            <Header 
              title={header?.title} 
              titleIcon={header?.icon} 
              navigatePage={navigatePage} 
              navigatePrevPage={navigatePrevPage} 
              navigateNextPage={navigateNextPage}
              // showPrev={currentPageIndex > 0}
              showPrev={currPageIndex.current > 0}
              // showNext={(pageHistory.current.length - 1) > currentPageIndex}
              showNext={(pageHistory.current.length - 1) > currPageIndex.current}
              >
            </Header>
              <div style={{display:"flex"}}>
                <SideNav/>
                <div className="app-container">
                  <KPICard />
                  {
                    {
                      'Home':  <HomePage navigatePage={navigatePage}></HomePage>,
                      'Battery':  <BatteryHealthPrediction navigatePage={navigatePage}></BatteryHealthPrediction>,
                      'Ups':  <UPSSystem navigatePage={navigatePage}></UPSSystem>,
                      'Power': <PowerPage navigatePage={navigatePage}/>
                    }[currentPage]
                }
              </div>
              </div>
          </div>
      }
      <img className='watermark' src={waterMark} />
    </div>
  );
}

export default App;
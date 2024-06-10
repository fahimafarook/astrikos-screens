import './App.css';
import Header from '../src/components/Header.jsx'
import HomePage  from './components/Pages/HomePage.jsx';
import PowerPage from './components/Pages/PowerPage.jsx';

function App() {
  return (
    <div className="App">
        <Header></Header>
        {/* <HomePage></HomePage> */}
        <PowerPage></PowerPage>
    </div>
  );
}

export default App;

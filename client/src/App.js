import './App.css';
import Accommodation from './Components/Accommodation/Accommodation'
import CommendSection from './Components/CommendSection/CommendSection';
import TravelledWith from './Components/TravelledWith/TravelledWith';

import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";    

function App() {
  return (
    <div className="App">
      <Accommodation/>
      <TravelledWith/>
      <CommendSection/>
    </div>
  );
}

export default App;

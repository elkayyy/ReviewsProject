import './App.css';
import Accommodation from './Components/Accommodation/Accommodation'
import AverageRatings from './Components/AverageRatings/AverageRatings'
import TravelledWith from './Components/TravelledWith/TravelledWith'
import CommendSection from './Components/CommendSection/CommendSection';

import "primereact/resources/themes/arya-orange/theme.css";
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";    

function App() {
  return (
    <div className="App">
      <Accommodation/>
      <AverageRatings/>
      <TravelledWith/>
      <CommendSection/>
    </div>
  );
}

export default App;

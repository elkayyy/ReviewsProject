import './Accommodation.css';
import AverageRatings from '../AverageRatings/AverageRatings';
import TravelledWith from '../TravelledWith/TravelledWith';

function Accommodation() {
    return (
        <div>
            <h1 className="first-title">Accommodation ratings  </h1>
            <div className="main-container">

                <div className="main-container-inner">

                    <div className="main-container-image">
                        <img className="image" alt="img" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                    </div>
                    <AverageRatings />
                    <TravelledWith />
                </div>

            </div>
        </div>
    );
}

export default Accommodation;

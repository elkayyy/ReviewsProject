import './AverageRatings.css';
import { Rating } from 'primereact/rating';
import {useEffect, useState} from 'react';


function AverageRatings() {

    const [averageData, setAverageData] = useState({});

    useEffect(() => {
        fetch('http://localhost:8080/reviews/average')
            .then(response => response.json())
            .then(data => {
                setAverageData(data);
            })
            .catch(error => console.error(error));
    }, []);  


    return (
        <div className="main-container-ratings">
            <div className="rating-items">
                <div className="rating-left-box"> 
                    <span className="rate-item1">Location ({averageData.aspecsAvg?.location} / 10) <Rating value={averageData.aspecsAvg?.location} readOnly cancel={false} stars={10} />  </span>
                    <span className="rate-item1">Price Quality ({averageData.aspecsAvg?.priceQuality} / 10) <Rating value={averageData.aspecsAvg?.priceQuality} readOnly cancel={false} stars={10} /> </span>
                    <span className="rate-item1">ChildrenFriendly ({averageData.aspecsAvg?.childFriendly} / 10) <Rating value={averageData.aspecsAvg?.childFriendly} readOnly cancel={false} stars={10} /> </span>
                </div>


                <div className="rating-right-box"> <span className="rate-item1">Restaurants ({averageData.aspecsAvg?.restaurants} / 10) <Rating value={averageData.aspecsAvg?.restaurants} readOnly cancel={false} stars={10} /> </span>
                    <span className="rate-item1">SanitaryState ({averageData.aspecsAvg?.sanitaryState} / 10) <Rating value={averageData.aspecsAvg?.sanitaryState} readOnly cancel={false} stars={10} /> </span>
                    <span className="rate-item1">Pool ({averageData.aspecsAvg?.pool} / 10) <Rating value={averageData.aspecsAvg?.pool} readOnly cancel={false} stars={10} /> </span>
                </div>

            </div>


        </div>

    );
}

export default AverageRatings;

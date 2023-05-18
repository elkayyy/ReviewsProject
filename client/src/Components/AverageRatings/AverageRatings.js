import './AverageRatings.css';
import StarRating from './Stars/Stars';
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
            <div className="title"><span style={{fontWeight:'bold'}}>AverageRatings</span></div>
          
            <div className="rating-items">
                <div className="rating-left-box"> 
                    <span className="rate-item1"> Location ({averageData.aspecsAvg?.location} / 10) <StarRating value={averageData.aspecsAvg?.location} />  </span>
                    <span className="rate-item1">Price Quality ({averageData.aspecsAvg?.priceQuality} / 10) <StarRating value={averageData.aspecsAvg?.priceQuality}/> </span>
                    <span className="rate-item1">ChildrenFriendly ({averageData.aspecsAvg?.childFriendly} / 10) <StarRating value={averageData.aspecsAvg?.childFriendly}/> </span>
                </div>


                <div className="rating-right-box"> <span className="rate-item1">Restaurants ({averageData.aspecsAvg?.restaurants} / 10) <StarRating value={averageData.aspecsAvg?.restaurants}/> </span>
                    <span className="rate-item1">SanitaryState ({averageData.aspecsAvg?.sanitaryState} / 10) <StarRating value={averageData.aspecsAvg?.sanitaryState}/> </span>
                    <span className="rate-item1">Pool ({averageData.aspecsAvg?.pool} / 10) <StarRating value={averageData.aspecsAvg?.pool}/> </span>
                </div>

            </div>


        </div>
      
    );
}

export default AverageRatings;

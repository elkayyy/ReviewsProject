import './TravelledWith.css';
import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';

function TravelledWith() {

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
        <div className="main-container-travelled">
            <div className='travelled-items-container'>
                <div className="travelled-box-left">
                    <span style={{fontWeight:'bold'}}>TravelledWith Percentages</span>
                    <span className="travelled-item"> Family ({averageData.traveledWithAvg?.FAMILY}/100) <ProgressBar value={averageData.traveledWithAvg?.FAMILY}>  </ProgressBar> </span>
                    <span className="travelled-item"> Friends ({averageData.traveledWithAvg?.FRIENDS}/100)<ProgressBar value={averageData.traveledWithAvg?.FRIENDS}>  </ProgressBar> </span>
                    <span className="travelled-item">Couple ({averageData.traveledWithAvg?.COUPLE}/100) <ProgressBar value={averageData.traveledWithAvg?.COUPLE}>  </ProgressBar></span>
                    <span className="travelled-item">Single ({averageData.traveledWithAvg?.SINGLE}/100)<ProgressBar value={averageData.traveledWithAvg?.SINGLE}>  </ProgressBar></span>
                    <span className="travelled-item">Other  ({averageData.traveledWithAvg?.OTHER}/100)<ProgressBar value={averageData.traveledWithAvg?.OTHER}>  </ProgressBar></span>
                </div>

            </div>
        </div>

    );
}

export default TravelledWith;

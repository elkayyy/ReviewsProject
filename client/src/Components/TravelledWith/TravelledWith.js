import './TravelledWith.css';
import { useEffect, useState } from 'react';
import { ProgressBar } from 'primereact/progressbar';

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
            <span className='travelled-title'> Travel Groups Percentages</span>
            <div className="travelled-items">

                <div className='travelled-items-container'>
                    <div className="travelled-box">
                        <span className="travelled-item1"> Family ({averageData.traveledWithAvg?.FAMILY}/100)  </span>
                        <span className="travelled-item1"> Friends ({averageData.traveledWithAvg?.FRIENDS}/100) </span>
                        <span className="travelled-item1">Couple ({averageData.traveledWithAvg?.COUPLE}/100) </span>
                        <span className="travelled-item1">Single ({averageData.traveledWithAvg?.SINGLE}/100) </span>
                        <span className="travelled-item1">Other  ({averageData.traveledWithAvg?.OTHER}/100) </span>
                    </div>

                    <div className="travelled-box1">
                        <ProgressBar value={averageData.traveledWithAvg?.FAMILY} />
                        <ProgressBar value={averageData.traveledWithAvg?.FRIENDS} />
                        <ProgressBar value={averageData.traveledWithAvg?.COUPLE} />
                        <ProgressBar value={averageData.traveledWithAvg?.SINGLE} />
                        <ProgressBar value={averageData.traveledWithAvg?.OTHER} />
                    </div>

                </div>
            </div>

        </div>

    );
}

export default TravelledWith;

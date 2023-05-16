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
            <div className='travelled-items-container'>
                <div className="travelled-box-left">
                    <span className="travelled-item1"> Family ({averageData.traveledWithAvg?.FAMILY}/100)  </span>
                    <ProgressBar value={averageData.traveledWithAvg?.FAMILY} />
                    <span className="travelled-item1"> Friends ({averageData.traveledWithAvg?.FRIENDS}/100) </span>
                    <ProgressBar value={averageData.traveledWithAvg?.FRIENDS} />
                    <span className="travelled-item1">Couple ({averageData.traveledWithAvg?.COUPLE}/100) </span>
                    <ProgressBar value={averageData.traveledWithAvg?.COUPLE} />

                </div>
                <div className="travelled-box-right">
                    <span className="travelled-item1">Single ({averageData.traveledWithAvg?.SINGLE}/100) </span>
                    <ProgressBar value={averageData.traveledWithAvg?.SINGLE} />
                    <span className="travelled-item1">Other  ({averageData.traveledWithAvg?.OTHER}/100) </span>
                    <ProgressBar value={averageData.traveledWithAvg?.OTHER} />

                </div>
            </div>
        </div>

    );
}

export default TravelledWith;

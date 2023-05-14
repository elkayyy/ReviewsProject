import './CommendSection.css';
import { useEffect, useState } from 'react';
import { Paginator } from 'primereact/paginator';
import RatingDisplay from './RatingDisplay/Rating';
import ReactCountryFlag from "react-country-flag"
import Info from './InfoBox/Info';

function CommendSection() {

    const [allData, setAllData] = useState({});
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(4);
    const [travelFilter, setTravelFilter] = useState('All');
    const [checkedReviewDate, setCheckedReviewDate] = useState(false);
    const [checkedTravellDate, setCheckedTravellDate] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/reviews/')
            .then(response => response.json())
            .then(data => {
                let filteredData = data.all;
                if (travelFilter !== "All") {
                    filteredData = data.all.filter(review => review.traveledWith === travelFilter);
                }
                setAllData({ all: filteredData });
            })
            .catch(error => console.error(error));
    }, [travelFilter]); 

    useEffect(() => {
        if (checkedReviewDate || checkedTravellDate) {
            const sortBy = checkedReviewDate ? 'entryDate' : 'travelDate'; // check which one is ticked (true)
            const sortedData = [...allData.all];
            sortedData.sort((a, b) => {
                const dateA = new Date(a[sortBy]);
                const dateB = new Date(b[sortBy]);
                return dateA - dateB;
            });

            setAllData({ ...allData, all: sortedData })
        }
    }, [checkedReviewDate, checkedTravellDate]);

    const handleDateChange = (setterToChange, setterToReset) => { // Interchanging the value states
        setterToChange(prevState => !prevState);
        setterToReset(false);
    };
    return (
        <div>
            <div className="pagination-component">
                <div className="pagination-main">
                    <Paginator className="paginator-style" style={{ backgroundColor: "inherit", border: 'none' }}
                        first={first}
                        rows={rows}
                        totalRecords={allData.all && allData.all.length}
                        onPageChange={(e) => {
                            setFirst(e.first)
                            setRows(e.rows)

                        }}></Paginator>

                </div>
                <div className='filter-main'>
                    <span>Filter by : </span>
                    <select className="filter-select" value={travelFilter} onChange={e => setTravelFilter(e.target.value)} >
                        <option value="All">All</option>
                        <option value="FAMILY">Family</option>
                        <option value="COUPLE">Couple</option>
                        <option value="FRIENDS">Friends</option>
                        <option value="SINGLE">Single</option>
                        <option value="OTHER">Other</option>
                    </select>
                    <span className="filter-title">Sort by : </span>
                    <input type='radio' name="ticked" checked={checkedReviewDate} onChange={() => handleDateChange(setCheckedReviewDate, setCheckedTravellDate)} /> <span className="filter-title">Review Date</span>
                    <input type='radio' name="ticked" checked={checkedTravellDate} onChange={() => handleDateChange(setCheckedTravellDate, setCheckedReviewDate)} /> <span className="filter-title">Travel Date</span>

                </div>
            </div>

            {allData.all && allData.all.slice(first, first + rows).map((reviewer) => {

                const texts = Object.values(reviewer.texts);
                const text = texts[0] || ''; // every text has a specific language written (en,nl,pl etc)
                const postDate = new Date(reviewer.entryDate).toLocaleDateString(); // Setting the post Date
                const travelDate = new Date(reviewer.travelDate).toLocaleDateString(); // Setting the travel Date 
                const flag = reviewer.locale.toUpperCase();
              
                return (
                    <div className="main-container-commend" key={reviewer.id}>

                        <div className="commend-container">
                            <div className="commend-container-inner">
                                <span className="commend-name">Added by <span className="user-name">{reviewer.user} <ReactCountryFlag countryCode={flag == 'EN' ? 'US' : flag}/></span> on {postDate}  </span>
                                <span className="commend-title">{reviewer.titles.en}</span>
                                <span className="commend-text">{text}</span>
                          
                               
                                <h1 className="user-rating"> User Rating  </h1>
                                <div className="commend-rating">
                                    <RatingDisplay label="General" value={reviewer.ratings.general.general} />
                                    <RatingDisplay label="Price Quality" value={reviewer.ratings.aspects.priceQuality} />
                                    <RatingDisplay label="ChildrenFriendly" value={reviewer.ratings.aspects.childFriendly} />
                                    <RatingDisplay label="Pool" value={reviewer.ratings.aspects.pool} />
                                    <RatingDisplay label="Location" value={reviewer.ratings.aspects.location} />
                                </div>
                            </div>

                            <div className="commend-container-inner-right">
                                <svg className='svg-logo' xmlns="http://www.w3.org/2000/svg" width="50" height="35" viewBox="0 0 128 128"><path fill="#FDD835" d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z" /><path fill="#FFFF8D" d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z" /><path fill="#F4B400" d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z" /></svg>
                                <div className="about-the-trip">
                                    <Info label="About the tip" label1="Date" label2="Travelled With" value1={travelDate} value2={reviewer.traveledWith} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            

        </div>
    );
}
export default CommendSection;

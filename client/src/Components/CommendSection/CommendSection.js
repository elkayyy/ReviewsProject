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
                const titles = Object.values(reviewer.titles);
                const text = texts[0] || ''; // every text has a specific language written (en,nl,pl etc)
                const title = titles[0] || ''; // same with titles
                const postDate = new Date(reviewer.entryDate).toLocaleDateString(); // Setting the post Date
                const travelDate = new Date(reviewer.travelDate).toLocaleDateString(); // Setting the travel Date 
                const flag = reviewer.locale.toUpperCase();

                return (
                    <div className="main-container-commend" key={reviewer.id}>

                        <div className="commend-container">
                            <div className="commend-container-inner">
                                <span className="commend-name">Added by <span className="user-name">{reviewer.user} <ReactCountryFlag countryCode={flag === 'EN' ? 'US' : flag} /></span> on {postDate}  </span>
                                <span className="commend-title">{title}</span>
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

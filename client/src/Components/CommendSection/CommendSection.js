import './CommendSection.css';
import { useEffect, useState } from 'react';
import { Rating } from 'primereact/rating';
import { Checkbox } from 'primereact/checkbox';
import { Paginator } from 'primereact/paginator';


function CommendSection() {

    const [allData, setAllData] = useState({});
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(15);
    const [checkedReviewDate, setCheckedReviewDate] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/reviews/')
            .then(response => response.json())
            .then(data => {
                setAllData(data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleChange = () => {
        
    }

    return (
        <div>
            {allData.all && allData.all.slice(first, first + rows).map((reviewer) => {
                const texts = Object.values(reviewer.texts);
                const text = texts[0] || ''; // every text has a specific language written (en,nl,pl etc)
                const postDate = new Date(reviewer.entryDate).toLocaleDateString(); // Setting the post Date
                const travelDate = new Date(reviewer.travelDate).toLocaleDateString(); // Setting the travel Date 


                return (
                    <div className="main-container-commend" key={reviewer.id}>

                        <div className="commend-container">

                            <div className="commend-container-inner">
                                <span className="commend-name">Added by <span style={{ color: 'orange' }}>{reviewer.user}</span> on {postDate} </span>
                                <span className="commend-title">{reviewer.titles.en}</span>
                                <span className="commend-text">{text}</span>

                                <h1 className="commend-name"> User Rating  </h1>
                                <div className="commend-rating">

                                    <span className="commend-item1">General ({reviewer.ratings.general.general} / 10) <Rating value={reviewer.ratings.general.general} readOnly cancel={false} stars={10} />  </span>
                                    <span className="commend-item1">Price Quality ({reviewer.ratings.aspects.priceQuality}/ 10) <Rating value={reviewer.ratings.aspects.priceQuality} readOnly cancel={false} stars={10} /> </span>
                                    <span className="commend-item1">ChildrenFriendly ({reviewer.ratings.aspects.childFriendly} / 10) <Rating value={reviewer.ratings.aspects.childFriendly} readOnly cancel={false} stars={10} /> </span>

                                    <div className="commend-rating">
                                        <span className="commend-item1">Pool ({reviewer.ratings.aspects.pool} / 10) <Rating value={reviewer.ratings.aspects.pool} readOnly cancel={false} stars={10} />  </span>
                                        <span className="commend-item1">Location ({reviewer.ratings.aspects.location}/ 10) <Rating value={reviewer.ratings.aspects.location} readOnly cancel={false} stars={10} /> </span>

                                    </div>
                                </div>
                            </div>

                            <div className="commend-container-inner-right">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128"><path fill="#FDD835" d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z" /><path fill="#FFFF8D" d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z" /><path fill="#F4B400" d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z" /></svg>
                                <div className="about-the-trip">
                                    <span> About the Trip </span>
                                    <span> Date {travelDate} </span>
                                    <span> Travelled with {reviewer.traveledWith} </span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128"><path fill="#FDD835" d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z" /><path fill="#FFFF8D" d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z" /><path fill="#F4B400" d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z" /></svg>

                            </div>

                        </div>


                    </div>

                )

            })}
            <div className="pagination-component">
                <div className="pagination-main">
                    <Paginator className="paginator-style" style={{ backgroundColor: "inherit", border: 'none' }}
                        first={first}
                        rows={rows}
                        totalRecords={allData.all && Object.keys(allData.all).length}
                        onPageChange={(e) => {
                            setFirst(e.first)
                            setRows(e.rows)

                        }}></Paginator>

                </div>
                <div className='filter-main'>
                    <span className="filter-title">Sort by : </span>
                    <input type='checkbox' value={checkedReviewDate} onChange={() => handleChange()} /> <span className="filter-title">Review Date</span>
                   
                </div>
            </div>
        </div>



    );

}

export default CommendSection;
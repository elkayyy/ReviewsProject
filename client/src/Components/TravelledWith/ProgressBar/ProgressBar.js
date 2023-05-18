import './ProgressBar.css';


function ProgressBar( {value}) {


    return (
        <div className="progress-bar">
           <div className="progress" style={{ width: `${value }%`}}></div>
        </div>

    );
}

export default ProgressBar;

import { Rating } from 'primereact/rating';

function RatingDisplay({ label, value }) {

    return (
      <div>
      {( value !== 0 && <span className="commend-item">
        {label} ({value} / 10) 
        <Rating value={value} readOnly cancel={false} stars={10} />
      </span>)}

      </div>
    );
  }

export default  RatingDisplay;
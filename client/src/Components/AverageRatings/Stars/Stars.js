import React from "react";
import "./Stars.css";

const StarRating = ({ value }) => {
  const stars = [];

  for (let i = 0; i < 10; i++) {
    if (i < value) {
      stars.push(<span key={i} className="star filled">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
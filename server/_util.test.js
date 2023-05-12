const { getAverageRatings, getAverageTravelledWith} = require('./_util');



fetch('http://localhost:8080/reviews')
    .then(response => response.json())
    .then(data => {
        console.log(data.all[0].user)
    }
        )
    .catch(error => console.error(error));



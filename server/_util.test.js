fetch('http://localhost:8080/reviews')
  .then(response => response.json())
  .then(data => {
    const allData = Object.values(data.all);
    const newArray = allData.slice(0, 3);
    console.log(newArray)
    newArray.sort((a, b) => {
        const dateA = new Date(a.entryDate);
        const dateB = new Date(b.entryDate);
        
        return dateA - dateB;
      });
    newArray.forEach(obj => {
        console.log(obj.user)
    })
 
  })
  .catch(error => console.error(error));

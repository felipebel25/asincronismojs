const fetchData = require('../utils/fetchData');
const API = "https://rickandmortyapi.com/api/character/"
fetchData(API)
 .then(data => {
     console.log(data.info.count);
     return fetchData(`${API}${data.results[0].id}`)
 })
 .then(data => {
     console.log(data.name+ " "+data.species)
     return fetchData(data.origin.url);

 })
 .then(data => {
    console.log(data.type + " "+ data.name)
    
  
    
})
.catch(error => console.error(error))
import axios from 'axios';

function getImages(query) {
  if(!query) return Promise.resolve([]);
  else return axios
    .get(`https://images-api.nasa.gov/search?q=${query}`)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
}

export default getImages;
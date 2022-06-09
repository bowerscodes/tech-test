import axios from 'axios';

function getImages(query) {
  if(!query){return Promise.resolve([]);
  } else { return axios
    .get(`https://images-api.nasa.gov/search?q=${query}`)
    .then((response) => {
      const imageResults = response.data.collection.items;
      // console.log(imageResults, 'IMAGERESULTS')
      const parsedImages = imageResults.filter(image => image.data[0].media_type === 'image');
      // console.log(parsedImages, 'PARSEDIMAGES')
      const images = parsedImages.map(image => image.links[0].href);
      // console.log(images, 'IMAGES')
      return(images);
    })
    .catch((error) => {
      console.log(error);
    });
  }
};

export default getImages;
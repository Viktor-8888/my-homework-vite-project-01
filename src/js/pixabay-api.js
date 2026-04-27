import axios from 'axios';

export function getImagesByQuery(query) {
  return axios({
    method: 'get',
    url: `https://pixabay.com/api/`,
    params: {
      key: '49187044-c2c4cc5e7c1f3c23966a70411',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}

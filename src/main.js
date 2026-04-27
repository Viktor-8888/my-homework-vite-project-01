import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imgErrorIcon from '/img/bi_x-octagon.png';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const query = event.currentTarget.elements['search-text'].value
    .toLowerCase()
    .trim();

  if (query === '') {
    return;
  }
  event.currentTarget.elements['search-text'].value = '';
  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(response => {
      if (response.data.hits.length === 0) {
        hideLoader();
        iziToast.error({
          iconUrl: imgErrorIcon,
          title: 'Error',
          class: 'gallery-box',
          message: `Sorry, there are no images matching your search ${query}. Please try again!
`,
          position: 'topLeft',
          messageColor: 'white',
          messageSize: '16px',
          backgroundColor: '#ef4040',
          titleColor: '#fff',
        });
      } else {
        hideLoader();
        createGallery(response.data.hits);
      }
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        iconUrl: imgErrorIcon,
        title: 'Error',
        class: 'gallery-box',
        message: `Sorry, error`,
        position: 'topLeft',
        messageColor: 'white',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
      });
    });
}

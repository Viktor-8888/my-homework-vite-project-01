import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imgErrorIcon from '../img/bi_x-octagon.png';
import imgOkIcon from '../img/bi_check2-circle.png';

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const delay = +event.target.elements.delay.value;
  const state = event.target.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  form.reset();

  promise
    .then(delay =>
      iziToast.success({
        iconUrl: imgOkIcon,
        title: 'OK',
        class: 'snackbar-box',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topLeft',
        messageColor: 'white',
        messageSize: '16px',
        backgroundColor: 'rgba(64, 239, 96, 1)',
        titleColor: '#fff',
      })
    )
    .catch(delay =>
      iziToast.error({
        iconUrl: imgErrorIcon,
        title: 'Error',
        class: 'snackbar-box',
        message: `Rejected promise in ${delay}ms`,
        position: 'topLeft',
        messageColor: 'white',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
      })
    );
}

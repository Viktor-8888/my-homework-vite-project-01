import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import imgErrorIcon from '../img/bi_x-octagon.png';

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

button.disabled = true;
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
let userSelectedDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  locale: Ukrainian,

  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      iziToast.error({
        iconUrl: imgErrorIcon,
        class: 'box',
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topLeft',
        messageColor: 'white',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
      });

      button.disabled = true;
    } else {
      button.disabled = false;
      userSelectedDate = selectedDates[0].getTime();
    }
    console.log(selectedDates[0]);
  },
};
const refs = {
  days: timerDays,
  hours: timerHours,
  minutes: timerMinutes,
  seconds: timerSeconds,
};
button.addEventListener('click', handleClick);
let intervalId = null;
function handleClick() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  function updateTimer() {
    const diff = userSelectedDate - Date.now();
    if (diff <= 0) {
      Object.values(refs).forEach(el => {
        el.textContent = addLeadingZero(0);
      });
      clearInterval(intervalId);
      userSelectedDate = null;
      intervalId = null;
      input.disabled = false;
      button.disabled = false;

      return;
    }
    const time = convertMs(diff);

    Object.entries(time).forEach(([key, value]) => {
      refs[key].textContent = addLeadingZero(value);
    });
  }
  updateTimer();

  intervalId = setInterval(updateTimer, 1000);
  button.disabled = true;
  input.disabled = true;
}

flatpickr(input, options);

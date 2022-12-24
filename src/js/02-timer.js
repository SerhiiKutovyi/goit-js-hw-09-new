import '../css/common.css';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStartRef = document.querySelector('button[data-start]');

btnStartRef.addEventListener('click', onClickStart);

flatpickr(
  document.querySelector('#datetime-picker'),
  (options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      setInterval(() => {
        selectedDates.map(ele => {
          const startTime = ele.getTime();
          const currentTime = Date.now();
          const deltaTime = startTime - currentTime;
          const { days, hours, minutes, seconds } = convertMs(deltaTime);
          console.log(` ${days}:${hours}:${minutes}:${seconds}`);
        });
      }, 1000);
    },
  })
);

function onClickStart(event) {
  console.log(event);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

//  document.querySelector('.value[data-days]').innerHTML = ele.getDay();
//  document.querySelector('.value[data-hours]').innerHTML = ele.getHours();
//  document.querySelector('.value[data-minutes]').innerHTML = ele.getMinutes();
//  document.querySelector('.value[data-seconds]').innerHTML = ele.getSeconds();

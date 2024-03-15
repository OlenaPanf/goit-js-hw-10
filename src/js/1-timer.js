// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const btn = document.querySelector('[data-start]');
/*const inputDateTimePicker = document.getElementById('datetime-picker');
let intervalId = null;

btn.addEventListener('click', () => {
  const initTime = Date.now(); //запис поточного часу

  intervalId = setInterval(() => {
    const currentTime = Date.now(); //запис часу кожної секунди
    const diff = currentTime - initTime; //змінна різниці часу

    // const time = formatTime(diff);
    // clockFace.textContent = time;
    // if (diff < 1000) clearInterval(intervalId);
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
});
*/
// Для підрахунку значень використовуй готову функцію
// convertMs, де ms — різниця між кінцевою і поточною
// датою в мілісекундах.

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

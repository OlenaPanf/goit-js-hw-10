// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const inputDateTimePicker = document.getElementById('datetime-picker'); //ініціалізувала бібліотеку
const startBtn = document.querySelector('[data-start]'); //доступ до кнопки
const timerFields = document.querySelectorAll('.value'); //доступ до значень таймеру

let userSelectedDate = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    checkValidData();
  },
};
flatpickr(inputDateTimePicker, options);

//функція, що перевіряє чи обрана дата взагалі і чи обрана вона в майбутньому
function checkValidData() {
  if (!userSelectedDate || userSelectedDate <= new Date()) {
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message: 'Please choose a date in the future',
    });
    startBtn.disabled = true;
  } else {
    startBtn.disabled = false;
    iziToast.success({
      title: 'Success',
      message: 'Correct date',
      position: 'topRight',
    });
  }
}

// запуск таймеру
startBtn.addEventListener('click', () => {
  inputDateTimePicker.disabled = true; //неактивний інпут
  startBtn.disabled = true; //неактивна кнопка

  intervalId = setInterval(() => {
    const currentTime = Date.now(); //запис часу кожної секунди
    const diff = userSelectedDate - currentTime; //змінна різниці часу
    if (diff < 1000) {
      clearInterval(intervalId);
      timerFields.forEach(field => (field.textContent = '00'));
      return;
    }
    const time = convertMs(diff);
    timerFields[0].innerText = time.days.toString().padStart(2, '0');
    timerFields[1].innerText = time.hours.toString().padStart(2, '0');
    timerFields[2].innerText = time.minutes.toString().padStart(2, '0');
    timerFields[3].innerText = time.seconds.toString().padStart(2, '0');
    timerFields.textContent = time;
  }, 1000);
});

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

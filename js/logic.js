const timeClock = document.querySelector('.time-clock');
const greetingMessg = document.querySelector('.greeting');

const date = new Date();

const minutes = date.getMinutes();
const hours = date.getHours();

timeClock.textContent = `${hours} : ${minutes}`;

if (hours < 12) {
  greetingMessg.textContent = 'Good Morning';
} else {
  greetingMessg.textContent = 'Good afternoon';
}

const timeClock = document.querySelector('.time-clock');
const greetingMessg = document.querySelector('.greeting');

let date = new Date();

var minutes = date.getMinutes();
var hours = date.getHours();

timeClock.textContent = `${hours} : ${minutes}`;

if (hours < 12) {
  greetingMessg.textContent = 'Good Morning';
} else {
  greetingMessg.textContent = 'Good afternoon';
}

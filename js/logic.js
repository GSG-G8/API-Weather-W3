const timeClock = document.querySelector('.time-clock');
const greetingMessg = document.querySelector('.greeting');

const greeting = x => (x > 12 ? 'GOOD EVENING' : 'GOOD MORNING');

if (typeof module !== 'undefined') {
  module.exports = greeting;
}

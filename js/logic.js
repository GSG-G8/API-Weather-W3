const greeting = x => {
  return x > 12 ? 'GOOD EVENING' : 'GOOD MORNING';
};

if (typeof module !== 'undefined') {
  module.exports = greeting;
}

const wrapper = document.querySelector('.wrapper');
const time = document.querySelector('.wrapper__clock__time');
const date = document.querySelector('.wrapper__clock__date');
const greetingTxt = document.querySelector('.wrapper__clock__greeting');
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchButton');

const weatherFunc = search => {
  apiFunc(weatherURL(search), responseText => {});
};

const unsplashFunc = search => {
  apiFunc(unsplashURL(search), responseText => {
    let backgroundArray = [];
    for (i in responseText.results) {
      // put all results in array);
      backgroundArray = [
        ...backgroundArray,
        responseText.results[i].urls.regular
      ];
    }
    wrapper.style.backgroundImage = `url('${backgroundArray[i]}')`;
    change(backgroundArray);
  });
};

const change = arr => {
  let i = 0;
  const img = setInterval(() => {
    i >= arr.length - 1
      ? clearInterval(img)
      : (wrapper.style.backgroundImage = `url('${arr[i++]}')`);
  }, 5000);
};

searchBtn.addEventListener('click', () => {
  weatherFunc(searchInput.value);
  unsplashFunc(searchInput.value);
});

setInterval(() => {
  let locoalDateAndTime = new Date();
  let hour = locoalDateAndTime.getHours();
  if (hour === '00') hour = '24';
  greetingTxt.textContent = greeting(hour);
  time.textContent =
    hour +
    ':' +
    locoalDateAndTime.getMinutes() +
    ':' +
    locoalDateAndTime.getSeconds();
  date.textContent =
    locoalDateAndTime.getFullYear() +
    '/' +
    locoalDateAndTime.getMonth() +
    '/' +
    locoalDateAndTime.getDate();
}, 1000);

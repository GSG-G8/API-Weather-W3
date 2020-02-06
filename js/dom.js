const wrapper = document.querySelector('.wrapper');
const time = document.querySelector('.wrapper__clock__time');
const date = document.querySelector('.wrapper__clock__date');
const greetingTxt = document.querySelector('.wrapper__clock__greeting');
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchButton');
const mainWeather = document.querySelector('.weather__span');
const otherWeather = document.querySelector('.weather__containerDiv');

const weatherFunc = () => {
  apiFunc(weatherURL(searchInput.value), responseText => {
    mainWeather.textContent = `The weather currently in ${searchInput.value} is: ${responseText['data'][0]['temp']}°`;
    otherWeather.textContent = ' ';
    for (let i = 0; i < 17; i = i + 4) {
      const otherWeatherChild = document.createElement('div');
      const weatherSpan = document.createElement('span');
      const timeSpan = document.createElement('span');
      weatherSpan.textContent = `${responseText['data'][i]['temp']}° `;
      timeSpan.textContent = `at ${
        responseText['data'][i]['timestamp_local'].split('T')[1]
      }`;
      otherWeatherChild.appendChild(weatherSpan);
      otherWeatherChild.appendChild(timeSpan);
      otherWeather.appendChild(otherWeatherChild);
    }
  });
};

const unsplashFunc = () => {
  apiFunc(unsplashURL(searchInput.value), responseText => {
    let backgroundArray = [];
    for (i in responseText.results) {
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
  weatherFunc();
  unsplashFunc();
});

setInterval(() => {
  const locoalDateAndTime = new Date();
  const hour = locoalDateAndTime.getHours();
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

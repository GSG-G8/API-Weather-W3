const wrapper = document.querySelector('.wrapper');
const time = document.querySelector('.wrapper__clock__time');
const date = document.querySelector('.wrapper__clock__date');
const greetingTxt = document.querySelector('.wrapper__clock__greeting');
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchButton');
const mainWeather = document.querySelector('.weather__span');
const otherWeather = document.querySelector('.weather__containerDiv');

const weatherFunc = search => {
  apiFunc(weatherURL(search), responseText => {
    mainWeather.textContent = `The weather currently in ${search} is: ${responseText['data'][0]['temp']}°`;
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

const unsplashFunc = search => {
  apiFunc(unsplashURL(search), responseText => {
    let backgroundArray = [];
    for (i in responseText.results) {
      backgroundArray = [
        ...backgroundArray,
        responseText.results[i].urls.regular
      ];
    }
    wrapper.style.backgroundImage = `url('${backgroundArray[1]}')`;
  });
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

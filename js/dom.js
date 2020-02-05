const wrapper = document.querySelector('.wrapper');
const time = document.querySelector('.wrapper__clock__time');
const date = document.querySelector('.wrapper__clock__date');
const greetingTxt = document.querySelector('.wrapper__clock__greeting');

const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchButton');

const weatherFunc = search => {
  apiFunc(weatherURL(search), responseText => {
    console.log(responseText['data']);
  });
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
    //  console.log(BgArr);
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

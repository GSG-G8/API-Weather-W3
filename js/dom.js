const wrapper = document.querySelector('.wrapper');
const time = document.querySelector('.wrapper__clock__time');
const date = document.querySelector('.wrapper__clock__date');
const greetingTxt = document.querySelector('.wrapper__clock__greeting');

const changebackground = search => {
  apiFunc(UrlUnsplash + ApiunsplashKey + '&query=' + search, responseText => {
    let BgArr = [];
    for (i in responseText.results) {
      // put all results in array);
      BgArr = [...BgArr, responseText.results[i].urls.regular];
    }
    //  console.log(BgArr);
    wrapper.style.backgroundImage = `url('${BgArr[0]}')`;
  });
};

const searchBtn = document.querySelector('#searchButton');
searchBtn.addEventListener('click', () => {
  const searchInput = document.querySelector('#searchInput');
  changebackground(searchInput.value);
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

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
  let year = locoalDateAndTime.getFullYear();
  let month = locoalDateAndTime.getMonth();
  let day = locoalDateAndTime.getDay();
  let hour = locoalDateAndTime.getHours();
  let minutes = locoalDateAndTime.getMinutes();
  let seconds = locoalDateAndTime.getSeconds();
  if (hour === '00') hour = '24';
  let greetingText = greeting(hour);
  greetingTxt.textContent = greetingText;
  time.textContent = hour + ':' + minutes + ':' + seconds;
  date.textContent = year + '/' + month + '/' + day;
}, 1000);

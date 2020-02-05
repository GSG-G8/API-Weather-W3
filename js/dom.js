const wrapper = document.querySelector('.wrapper');

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

const searchBtn = document.querySelector('#searchButton');
const wrapper = document.querySelector('.wrapper');

function changebackground(search) {
  apiFunc(UrlUnsplash + search, responseText => {
    let BgArr = [];
    for (i in responseText.results) {
      // put all results in array);
      BgArr = [...BgArr, responseText.results[i].urls.regular];
    }
    console.log(BgArr);
    wrapper.style.backgroundImage = `url('${BgArr[0]}')`;
    //BgArr = [];
  });
}

searchBtn.addEventListener('click', () => {
  const searchInput = document.querySelector('#searchInput');
  changebackground(searchInput.value);
  // console.log(searchInput.value);
});

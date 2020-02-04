const background = document.querySelector('.wrapper');
const search = document.querySelector('.searchBtn');

apiFunc(UrlUnsplash + 'giza', responseText => {
  let BgArr = [];
  for (i in responseText.results) {
    // put all results in array);
    BgArr = [...BgArr, responseText.results[i].urls.regular];
  }
  background.style.backgroundImage = `url('${BgArr[0]}')`;
});

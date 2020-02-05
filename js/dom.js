const wrapper = document.querySelector('.wrapper');

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

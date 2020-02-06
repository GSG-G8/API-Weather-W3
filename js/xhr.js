const weatherURL = input =>
  `https://api.weatherbit.io/v2.0/forecast/hourly?city=${input}&key=${weatherbitAPIKey}&hours=48`;

const unsplashURL = input =>
  `https://api.unsplash.com/search/photos?client_id=${unsplashAPIKey}&query=${input}`;

const apiFunc = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    } else if (xhr.status >= 300) {
      handleError('ERROR');
    }
  };
  xhr.open('GET', url);
  xhr.send();
};

const handleError = error => {
  alert('There is problem with conection');
};

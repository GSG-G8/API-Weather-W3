const weatherURL = input => {
  return `https://api.weatherbit.io/v2.0/forecast/hourly?city=${input}&key=${weatherbitAPIKey}&hours=48`;
};

const unsplashURL = input => {
  return `https://api.unsplash.com/search/photos?client_id=${unsplashAPIKey}&query=${input}`;
};
const apiFunc = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};

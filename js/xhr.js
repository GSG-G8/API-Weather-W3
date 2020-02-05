const UrlWeather = 'http://api.weatherstack.com/current?access_key=';
const UrlUnsplash = 'https://api.unsplash.com/search/photos?client_id=';
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

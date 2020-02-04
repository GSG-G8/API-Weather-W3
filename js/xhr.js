const UrlWeather = '';
const UrlUnsplash =
  'https://api.unsplash.com/search/photos?client_id=1424074b20f17701ec8c0601fd15ca686c70e2cb0e645f8137533d8063e664bc&query=';
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

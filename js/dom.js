const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchButton');

searchBtn.addEventListener('click', () => {
  console.log(searchInput.value);
});

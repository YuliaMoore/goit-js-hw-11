// import { fetchUrl } from './js/api/fetchImages';
const KEY = '35800613-7b32faaa33505b6c7b58566c2';
const BASE_URL = 'https://pixabay.com/api/';
// https://pixabay.com/api/?key=35800613-7b32faaa33505b6c7b58566c2&q
fetch(`${BASE_URL}?key=${KEY}&q=lion`)
  .then(data => data.json())
  .then(data => console.log(data));

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');

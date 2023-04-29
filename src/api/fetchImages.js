import axios from 'axios';
const KEY = '35800613-7b32faaa33505b6c7b58566c2';
const BASE_URL = 'https://pixabay.com/api/';
// https://pixabay.com/api/?key=35800613-7b32faaa33505b6c7b58566c2&q

export async function fetchUrl(searchQuery, pageCount) {
  const params = {
    params: {
      key: KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: pageCount,
      per_page: 40,
    },
  };
  try {
    const response = await axios.get(BASE_URL, params);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

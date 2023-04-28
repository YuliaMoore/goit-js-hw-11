import axios from 'axios';
const KEY = '35800613-7b32faaa33505b6c7b58566c2';
const BASE_URL = 'https://pixabay.com/api/';
// https://pixabay.com/api/?key=35800613-7b32faaa33505b6c7b58566c2&q
fetch(`${BASE_URL}?key=${KEY}&q=lion`);

// function createGallery
// return `
// <div class="photo-card">
//   <img src="" alt="" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//     </p>
//   </div>
// </div>`;

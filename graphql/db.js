import axios from 'axios';

export const getMovies = (limit, rating) => {
  let API_URL = 'https://yts.mx/api/v2/list_movies.json?';
  if (limit > 0) {
    API_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    API_URL += `&minimum_rating=${rating}`;
  }
  console.log(API_URL);
  return axios.get(API_URL).then((res) => res.data.data.movies);
};

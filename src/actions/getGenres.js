const tmdToken = process.env.token;
const moviesUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdToken}&language=en-US`;

import axios from 'axios';

export const genres = () => {
  return dispatch => {
    axios
      .get (moviesUrl)
      .then (data => {
        dispatch ({
          type: 'GENRES',
          payload: data.data,
        });
      })
      .catch (e => {
        dispatch ({
          type: 'GENRES_ERROR',
          payload: e,
        });
      });
  };
};

export default genres;

import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ2OGU3YWQxY2Y0MTA0MGRmZTc3ZTkyNzRhMWUyYyIsIm5iZiI6MTc0MjM5NTgyNi43NjQ5OTk5LCJzdWIiOiI2N2RhZDliMmIwNWM4YTM4MGZhMWZmMjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IvQ4Uk4mogkBAA_ow7Ivu_CCkoj3GigESyzMMwoPKnE'; 
const BASE_URL = 'https://api.themoviedb.org/3';

// 🔥 Отримати трендові фільми
export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      language: 'uk-UA',
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};

// 🎬 Отримати деталі фільму
export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      language: 'uk-UA',
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return response.data;
};

// 🔍 Пошук фільмів
export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      query,
      language: 'uk-UA',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};

// 👤 Отримати акторський склад
export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      language: 'uk-UA',
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.cast;
};

// 📝 Отримати відгуки про фільм
export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: {
      language: 'uk-UA',
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};

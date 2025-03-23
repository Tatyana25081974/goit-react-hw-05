import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/api'; 
import css from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(data => setMovies(data))
      .catch(error => {
        console.error('❌ Помилка при завантаженні фільмів:', error);
        setError('Не вдалося завантажити фільми. Спробуйте пізніше.');
      });
  }, []);

  return (
    <main className={css.main}>
      <h1 className={css.title}>Популярні сьогодні 🎬</h1>
      {error && <p className={css.error}>{error}</p>}
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        !error && <p className={css.noResults}>Немає фільмів для відображення 😢</p>
      )}
    </main>
  );
}

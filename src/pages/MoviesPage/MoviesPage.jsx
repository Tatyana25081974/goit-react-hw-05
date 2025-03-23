import { useState } from 'react';
import { searchMovies } from '../../services/api';
import css from './MoviesPage.module.css';
import MovieList from '../../components/MovieList';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim() === '') return;

    try {
      setLoading(true);
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error('❌ Помилка при пошуку фільмів:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Пошук фільмів</h1>

      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Введіть назву фільму..."
          className={css.input}
        />
        <button type="submit" className={css.button}>
          🔍
        </button>
      </form>

      {loading && <p className={css.loading}>Завантаження...</p>}

      {!loading && movies.length > 0 && <MovieList movies={movies} />}

      {!loading && !movies.length && query && (
        <p className={css.noResults}>Нічого не знайдено 😕</p>
      )}
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

 
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = searchValue.trim();
    setSearchParams(trimmedQuery ? { query: trimmedQuery } : {});
  };

  
  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) {
        setMovies([]);
        return;
      }

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

    fetchMovies();
  }, [query]);

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Пошук фільмів</h1>

      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
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

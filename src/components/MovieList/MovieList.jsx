// MovieList.jsx
// MovieList.jsx
import { Link, useLocation } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={css.link}
          >
            <MovieItem title={movie.title || movie.name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

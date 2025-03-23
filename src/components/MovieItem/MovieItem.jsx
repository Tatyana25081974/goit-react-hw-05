import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';

export default function MovieItem({ movie }) {
  const location = useLocation();

  return (
    <li className={css.item}>
      <Link
        to={`/movies/${movie.id}`}
        state={{ from: location }}
        className={css.link}
      >
        {movie.title || movie.name}
      </Link>
    </li>
  );
}

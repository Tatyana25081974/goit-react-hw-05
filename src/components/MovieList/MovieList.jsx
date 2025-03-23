import MovieItem from './MovieItem';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map((movie, index) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}


import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import { getMovieDetails } from '../../services/api';
import BackButton from '../../components/BackButton/BackButton';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  // ✅ Зберігаємо попередню локацію лише при першому рендері
  const backLinkRef = useRef(location.state?.from || '/movies');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        console.log('🎬 Деталі фільму:', data);
        setMovie(data);
      })
      .catch(error => console.error('❌ Помилка завантаження деталей:', error));
  }, [movieId]);

  if (!movie) return <p>Завантаження...</p>;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className={css.container}>
  <BackButton to={backLinkRef.current} />

  <div className={css.mainContent}>
    <img className={css.poster} src={posterUrl} alt={movie.title} />

    <div className={css.details}>
      <h2 className={css.title}>{movie.title}</h2>
      <p className={css.rating}>Рейтинг: {movie.vote_average}</p>
      <p className={css.overview}>Опис: {movie.overview}</p>
      <p className={css.genres}>
        Жанри: {movie.genres.map(genre => genre.name).join(', ')}
      </p>

      <p className={css.subTitle}>Додаткова інформація:</p>
      <ul className={css.subLinks}>
        <li>
          <Link to="cast" state={{ from: backLinkRef.current }}>Акторський склад</Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkRef.current }}>Відгуки</Link>
        </li>
      </ul>
    </div>
  </div>

  <div className={css.dynamicContent}>
    <Suspense fallback={<p>Завантаження...</p>}>
      <Outlet />
    </Suspense>
  </div>
</div>

  );
}

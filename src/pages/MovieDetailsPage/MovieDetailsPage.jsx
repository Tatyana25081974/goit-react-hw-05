import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../services/api';
import { Link } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';

export default function MovieDetailsPage() {
  const { movieId } = useParams(); // витягуємо movieId з URL
  const [movie, setMovie] = useState(null);
  const location = useLocation();
const backLink = location.state?.from || '/movies';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        console.log('🎬 Деталі фільму:', data);
        setMovie(data);
      })
      .catch(error => console.error('❌ Помилка завантаження деталей:', error));
  }, [movieId]);

  if (!movie) return <p>Завантаження...</p>;

  return (
  <div className={css.wrapper}>
    <BackButton />
    <h2 className={css.title}>{movie.title}</h2>
    <p className={css.rating}>Рейтинг: {movie.vote_average}</p>
    <p className={css.overview}>Опис: {movie.overview}</p>
    <p className={css.genres}>
      Жанри: {movie.genres.map(genre => genre.name).join(', ')}
      </p>
      <hr />
<p className={css.subTitle}>Додаткова інформація:</p>
<ul className={css.subLinks}>
  <li>
    <Link to="cast">Cast</Link>
  </li>
  <li>
    <Link to="reviews">Reviews</Link>
  </li>
</ul>

<Suspense fallback={<p>Завантаження...</p>}>
  <Outlet />
</Suspense>
  </div>
);
}

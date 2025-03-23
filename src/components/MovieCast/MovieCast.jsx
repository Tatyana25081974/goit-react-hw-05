import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const { movieId } = useParams(); // отримуємо ID з URL
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
           headers: {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ2OGU3YWQxY2Y0MTA0MGRmZTc3ZTkyNzRhMWUyYyIsIm5iZiI6MTc0MjM5NTgyNi43NjQ5OTk5LCJzdWIiOiI2N2RhZDliMmIwNWM4YTM4MGZhMWZmMjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IvQ4Uk4mogkBAA_ow7Ivu_CCkoj3GigESyzMMwoPKnE'
},

            params: {
              language: 'en-US',
            },
          }
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error('❌ Помилка при завантаженні акторів:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
  <div className={`${css.castWrapper} ${css.fadeWrapper}`}>
    <h3>👥 Акторський склад</h3>
    <ul className={css.castList}>
      {cast.map(actor => (
        <li key={actor.id} className={css.castItem}>
          <img
            className={css.castImg}
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : 'https://via.placeholder.com/100x150?text=No+Image'
            }
            alt={actor.name}
          />
          <p className={css.actorName}>{actor.name}</p>
          <p className={css.character}>🎭 {actor.character}</p>
        </li>
      ))}
    </ul>
  </div>
);

}

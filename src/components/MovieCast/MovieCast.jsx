import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import css from './MovieCast.module.css';
import { CastSlider } from '../CastSlider/CastSlider';

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
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ2OGU3YWQxY2Y0MTA0MGRmZTc3ZTkyNzRhMWUyYyIsIm5iZiI6MTc0MjM5NTgyNi43NjQ5OTk5LCJzdWIiOiI2N2RhZDliMmIwNWM4YTM4MGZhMWZmMjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IvQ4Uk4mogkBAA_ow7Ivu_CCkoj3GigESyzMMwoPKnE',
            },
            params: {
              language: 'uk-UA',
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
    <div className={css.castWrapper}>
      <h3>👥 Акторський склад</h3>
      {cast.length > 0 ? (
        <CastSlider cast={cast} />
      ) : (
        <p>Немає інформації</p>
      )}
    </div>
  );
}

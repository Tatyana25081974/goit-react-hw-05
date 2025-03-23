import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ2OGU3YWQxY2Y0MTA0MGRmZTc3ZTkyNzRhMWUyYyIsIm5iZiI6MTc0MjM5NTgyNi43NjQ5OTk5LCJzdWIiOiI2N2RhZDliMmIwNWM4YTM4MGZhMWZmMjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IvQ4Uk4mogkBAA_ow7Ivu_CCkoj3GigESyzMMwoPKnE'
            },
            params: {
              language: 'en-US',
            },
          }
        );
        setReviews(response.data.results);
      } catch (err) {
        setError('Не вдалося завантажити відгуки...');
        console.error('❌ Помилка завантаження відгуків:', err);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (error) return <p>{error}</p>;

  return (
    <section className={`${css.reviews} ${css.fadeWrapper}`}>
      <h3>📝 Відгуки</h3>
      {reviews.length === 0 ? (
        <p>Відгуків поки немає.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id} className={css.reviewItem}>
              <h4>👤 {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

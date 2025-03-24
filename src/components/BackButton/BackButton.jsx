import { useLocation, useNavigate } from 'react-router-dom';
import css from './BackButton.module.css';

export default function BackButton({ to }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    if (to) {
      navigate(to);
    } else if (location.state?.from) {
      navigate(location.state.from); // ← беремо з location.state
    } else {
      navigate('/movies'); // fallback
    }
  };

  return (
    <button onClick={handleGoBack} className={css.button}>
      <span className={css.icon}>←</span> Назад
    </button>
  );
}

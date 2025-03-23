import { useNavigate } from 'react-router-dom';
import css from './BackButton.module.css';

export default function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/movies');
    }
  };

  return (
    <button onClick={handleGoBack} className={css.button}>
      <span className={css.icon}>←</span> Назад
    </button>
  );
}


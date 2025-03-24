import { useNavigate } from 'react-router-dom';
import css from './BackButton.module.css';

export default function BackButton({ to }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    
    if (to) {
      navigate(to);
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

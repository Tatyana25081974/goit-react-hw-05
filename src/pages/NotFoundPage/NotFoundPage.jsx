import BackButton from '../../components/BackButton'; // змінюй шлях, якщо потрібно
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>404 — Сторінку не знайдено 😢</h1>
      <p className={css.text}>
        Упс! Схоже, ви перейшли за неіснуючим посиланням або сторінку було видалено.
      </p>
      <BackButton />
    </div>
  );
}

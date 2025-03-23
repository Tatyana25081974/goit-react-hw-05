import css from './MovieItem.module.css';

export default function MovieItem({ title }) {
  return <span className={css.text}>{title}</span>;
}

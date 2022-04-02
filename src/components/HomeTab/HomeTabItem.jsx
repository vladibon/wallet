import s from './HomeTabItem.module.css';

function HomeTabItem(props) {
  const { date, type, category, comment, sum, balance } = props;
  return (
    <>
      <li className={s.homeTabItem__flex}>
        <span className={s.homeTabItem__title}>Дата</span>
        <span>{date}</span>
      </li>
      <li className={s.homeTabItem__flex}>
        <span className={s.homeTabItem__title}>Тип</span>
        {type}
      </li>
      <li className={s.homeTabItem__flex}>
        <span className={s.homeTabItem__title}>Категория</span>
        {category}
      </li>
      <li className={s.homeTabItem__flex}>
        <span className={s.homeTabItem__title}>Комментарий</span>
        {comment}
      </li>
      <li className={s.homeTabItem__flex}>
        <span className={s.homeTabItem__title}>Сумма</span>
        {sum}
      </li>
      <li className={s.homeTabItem__flex}>
        <span className={s.homeTabItem__title}>Баланс</span>
        {balance}
      </li>
    </>
  );
}

export default HomeTabItem;

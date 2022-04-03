import s from './HomeTabItems.module.css';

function HomeTabItems(props) {
  const { date, type, category, comment, sum, balance } = props;

  const formatSum = Intl.NumberFormat('ru-Ru', {
    minimumFractionDigits: 2,
  }).format(sum);

  const formatBalance = Intl.NumberFormat('ru-Ru', {
    minimumFractionDigits: 2,
  }).format(balance);

  return (
    <ul className={s.homeTabItems__list}>
      <li className={s.homeTabItems__listCell}>
        <span className={s.homeTabItems__listTitle}>Дата</span>
        <span className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningStart}`}>
          {date}
        </span>
      </li>
      <li className={s.homeTabItems__listCell}>
        <span className={s.homeTabItems__listTitle}>Тип</span>
        <span className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningCenter}`}>
          {type}
        </span>
      </li>
      <li className={`${s.homeTabItems__listCell} ${s.homeTabItems__listCellWidth}`}>
        <span className={s.homeTabItems__listTitle}>Категория</span>
        <span className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningStart}`}>
          {category}
        </span>
      </li>
      <li className={`${s.homeTabItems__listCell} ${s.homeTabItems__listCellWidth}`}>
        <span className={s.homeTabItems__listTitle}>Комментарий</span>
        <span className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningStart}`}>
          {comment}
        </span>
      </li>
      <li className={s.homeTabItems__listCell}>
        <span className={s.homeTabItems__listTitle}>Сумма</span>
        <span className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningWeight}`}>
          {formatSum}
        </span>
      </li>
      <li className={s.homeTabItems__listCell}>
        <span className={s.homeTabItems__listTitle}>Баланс</span>
        <span className={s.homeTabItems__listMeaning}>{formatBalance}</span>
      </li>
    </ul>
  );
}

export default HomeTabItems;

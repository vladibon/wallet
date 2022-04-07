import PropTypes from 'prop-types';
import s from './HomeTabMobile.module.css';

function HomeTabMobile(items) {
  const { date, type, category, comment, sum, balance } = items;

  const formatSum = Intl.NumberFormat('ru-Ru', {
    minimumFractionDigits: 2,
  }).format(sum);

  const formatBalance = Intl.NumberFormat('ru-Ru', {
    minimumFractionDigits: 2,
  }).format(balance);

  return (
    <ul className={s.homeTab}>
      {items.map(item => (
        <li
          className={
            item.type === '+'
              ? `${s.homeTab__items}  ${s.income}`
              : `${s.homeTab__items}  ${s.expense}`
          }
          key={item.id}
        >
          <ul className={s.homeTabItems__list}>
            <li className={s.homeTabItems__listCell}>
              <span className={s.homeTabItems__listTitle}>Date</span>
              <span
                className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningStart}`}
              >
                {item.date}
              </span>
            </li>
            <li className={s.homeTabItems__listCell}>
              <span className={s.homeTabItems__listTitle}>Type</span>
              <span
                className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningCenter}`}
              >
                {item.type}
              </span>
            </li>
            <li className={`${s.homeTabItems__listCell} ${s.homeTabItems__listCellWidth}`}>
              <span className={s.homeTabItems__listTitle}>Category</span>
              <span
                className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningStart}`}
              >
                {item.category}
              </span>
            </li>
            <li className={`${s.homeTabItems__listCell} ${s.homeTabItems__listCellWidth}`}>
              <span className={s.homeTabItems__listTitle}>Comment</span>
              <span
                className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningStart}`}
              >
                {item.comment}
              </span>
            </li>
            <li className={s.homeTabItems__listCell}>
              <span className={s.homeTabItems__listTitle}>Sum</span>
              <span
                className={
                  item.type === '+'
                    ? `${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningWeight} ${s.income}`
                    : `${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningWeight} ${s.expense}`
                }
              >
                {formatSum}
              </span>
            </li>
            <li className={s.homeTabItems__listCell}>
              <span className={s.homeTabItems__listTitle}>Balance</span>
              <span className={s.homeTabItems__listMeaning}>{formatBalance}</span>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
}

HomeTabMobile.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['+', '-']).isRequired,
  category: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default HomeTabMobile;

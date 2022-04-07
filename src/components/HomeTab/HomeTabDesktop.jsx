import PropTypes from 'prop-types';
import s from './HomeTabItems.module.css';

function HomeTabDesktop(props) {
  const { date, type, category, comment, sum, balance } = props;

  const formatSum = Intl.NumberFormat('ru-Ru', {
    minimumFractionDigits: 2,
  }).format(sum);

  const formatBalance = Intl.NumberFormat('ru-Ru', {
    minimumFractionDigits: 2,
  }).format(balance);

  return (
    <tr>
      <td>td</td>
    </tr>
  );
}

HomeTabDesktop.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['+', '-']).isRequired,
  category: PropTypes.oneOf([
    'Разное',
    'Регулярный доход',
    'Машина',
    'Продукты',
    'Нерегулярный доход',
  ]).isRequired,
  comment: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default HomeTabDesktop;

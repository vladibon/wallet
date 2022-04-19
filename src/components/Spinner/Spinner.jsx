import { ImSpinner } from 'react-icons/im';
import PropTypes from 'prop-types';
import s from './Spinner.module.css';

export default function Spinner({ size, color = 'black', opacity = '1' }) {
  return (
    <div className={s.box}>
      <ImSpinner size={size} className={s[color]} alt='Spinner' opacity={opacity} />
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['blue', 'green', 'black', 'white']),
};

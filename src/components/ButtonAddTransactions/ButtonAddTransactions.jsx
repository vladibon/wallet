import s from './ButtonAddTransactions.module.css';
import { ReactComponent as AddIcon } from './add.svg';
import PropTypes from 'prop-types';

export default function ButtonAddTransactions({ onClick }) {
  return (
    <button type='button' className={s.button} onClick={onClick}>
      <AddIcon width='20' height='20' fill='#ffffff' />
    </button>
  );
}

ButtonAddTransactions.propTypes = {
  onClick: PropTypes.func.isRequired,
};

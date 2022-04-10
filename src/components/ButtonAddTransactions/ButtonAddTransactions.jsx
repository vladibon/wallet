import s from './ButtonAddTransactions.module.css';
import { ReactComponent as AddIcon } from '../../images/add.svg';
import { useDispatch } from 'react-redux';
import { openModalAddTransaction } from 'redux/index';

export default function ButtonAddTransactions() {
  const dispatch = useDispatch();

  return (
    <button type='button' className={s.button} onClick={() => dispatch(openModalAddTransaction())}>
      <AddIcon width='20' height='20' fill='#ffffff' />
    </button>
  );
}

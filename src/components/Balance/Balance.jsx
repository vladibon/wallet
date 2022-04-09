import s from './Balance.module.css';
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/selectors';

function Balance() {
  const balance = useSelector(selectBalance);

  return (
    <div className={s.balance}>
      <h3 className={s.balance__title}>YOUR BALANCE</h3>
      <p className={s.balance__sum}>&#8372; {balance?.toFixed(2)}</p>
    </div>
  );
}
export default Balance;

import s from './Balance.module.css';

function Balance() {
  return (
    <div className={s.balance}>
      <h3 className={s.balance__title}>YOUR BALANCE</h3>
      <p className={s.balance__sum}>&#8372; 24 000.00</p>
    </div>
  );
}
export default Balance;

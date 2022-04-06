import s from './Currency.module.css';

function CurrencyItems({ ccy, buy, sale }) {
  return (
    <tr className={s.table__row}>
      <td className={s.table__text}>{ccy}</td>
      <td className={s.table__text}>{Number(buy).toFixed(2)}</td>
      <td className={s.table__text}>{Number(sale).toFixed(2)}</td>
    </tr>
  );
}

export default CurrencyItems;

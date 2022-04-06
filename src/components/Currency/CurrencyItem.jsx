import s from './Currency.module.css';

function CurrencyItems({ccy,buy, sale}) {
  return (
    <tr className={s.table__row}>
      <td className={s.table__text}>{ccy}</td>
      <td className={s.table__text}>{buy}</td>
      <td className={s.table__text}>{sale}</td>
        </tr>
  )
}

export default CurrencyItems;
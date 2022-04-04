import s from './Currency.module.css'

function Currency() {
  return (
   
    

     <table className={s.table}>
        <thead className={s.table__title_row}>
        <tr>
          <th className={s.table__title}>Currency</th>
        <th className={s.table__title}>Purchase</th>
        <th className={s.table__title}>Sale</th>
          </tr>
      </thead>
      <tbody className={s.tt}>
        <tr className={s.table__row}>
          <td className={s.table__text}>USD</td>
          <td className={s.table__text}>27.55</td>
          <td className={s.table__text}>27.65</td>
        </tr>
        <tr className={s.table__row}>
          <td className={s.table__text}>EUR</td>
          <td className={s.table__text}>30.00</td>
          <td className={s.table__text}>30.10</td>
        </tr>
        <tr className={s.table__row}>
          <td className={s.table__text}>RUB</td>
          <td className={s.table__text}>00.00</td>
          <td className={s.table__text}>00.00</td>
        </tr>
      </tbody>
      </table>
  )
}

export default Currency;
// import { useState, useEffect } from 'react';
import CurrencyItem from './CurrencyItem';
import fetchCurrency from 'api/currencyAPI';

import s from './Currency.module.css';

function Currency({ currency }) {
  // const [currency, setCurrency] = useState([]);

  // useEffect(() => {
  //   if (!query) {
  //     return;
  //   }

  // })

  return (
    <div className={s.table__container}>
      <table className={s.table}>
        <thead className={s.table__title_row}>
          <tr>
            <th className={s.table__title}>Currency</th>
            <th className={s.table__title}>Buy</th>
            <th className={s.table__title}>Sale</th>
          </tr>
        </thead>
        <tbody className={s.table__body}>
          {currency.map(el => (
            <CurrencyItem ccy={el.ccy} buy={el.buy} sale={el.sale} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Currency;

// <table className={s.table}>
//   <thead className={s.table__title_row}>
//     <tr>
//       <th className={s.table__title}>Currency</th>
//       <th className={s.table__title}>Purchase</th>
//       <th className={s.table__title}>Sale</th>
//     </tr>
//   </thead>
//   <tbody className={s.table__body}>
//     <tr className={s.table__row}>
//       <td className={s.table__text}>USD</td>
//       <td className={s.table__text}></td>
//       <td className={s.table__text}>27.65</td>
//     </tr>
//     <tr className={s.table__row}>
//       <td className={s.table__text}>EUR</td>
//       <td className={s.table__text}>30.00</td>
//       <td className={s.table__text}>30.10</td>
//     </tr>
//     <tr className={s.table__row}>
//       <td className={s.table__text}>RUB</td>
//       <td className={s.table__text}>00.00</td>
//       <td className={s.table__text}>00.00</td>
//     </tr>
//   </tbody>
// </table>

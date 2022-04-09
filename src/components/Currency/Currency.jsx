import { useState, useEffect } from 'react';
import CurrencyItem from './CurrencyItem';
import { fetchCurrency } from 'api/currencyAPI';

import s from './Currency.module.css';

function Currency() {
  const [exchanges, setExchanges] = useState([]);

  // useEffect(() => {

  //   fetchCurrency()
  //     .then(data => {
  //       // setExchanges([...data]);
  //       // localStorage.setItem("exchanges", JSON.stringify(data));
  //       // setExchanges(JSON.parse(localStorage.getItem("exchanges")));
  //     })
  //     .catch(error => {
  //       throw Error;
  //     });
  // }, []);


// =====================

  useEffect(() => {
    fetchCurrency()
      .then(data => {
      //   const currencyArray = [...data];
      //   return currencyArray;
      // })
      // .then(currencyArray => {
        setExchanges([...data]);
        localStorage.setItem("exchanges", JSON.stringify(data));
        localStorage.setItem("exchangesTime", JSON.stringify(Date.now()));

        const exchangesLS = JSON.parse(localStorage.getItem("exchanges"));
        const exchangesTime = JSON.parse(localStorage.getItem("exchangesTime"));
        
        if (!exchangesLS) {
          fetchCurrency();
        }
        if (Date.now() - exchangesTime > 3600000) {
          fetchCurrency();
          console.log(fetchCurrency());
        } else {
          setExchanges(exchangesLS);
      }
      })
      .catch(error => {
      throw Error(error);
    })
  }, []);

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
          {exchanges.map(el => (
            <CurrencyItem key={el.ccy} ccy={el.ccy} buy={el.buy} sale={el.sale} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Currency;

import { useState, useEffect } from 'react';
import CurrencyItem from './CurrencyItem';
import { fetchCurrency } from 'api/currencyAPI';
import Loader from 'components/Loader';

import s from './Currency.module.css';

function Currency() {
  const [exchanges, setExchanges] = useState([]);
  const [loadings, setLoadings] = useState(false);

  useEffect(() => {
    const storedExchanges = JSON.parse(localStorage.getItem('exchanges'));
    if (storedExchanges?.time + 3600000 > Date.now()) {
      setExchanges(storedExchanges.data);
    } else {
      setLoadings(true);
      fetchCurrency()
        .then(data => {
          localStorage.setItem('exchanges', JSON.stringify({ data, time: Date.now() }));
          setExchanges(data);
        })
        .catch(error => {
          throw Error(error);
        })
        .finally(() => setLoadings(false));
    }
  }, []);

  return (
    <div className={s.table__container}>
      {loadings && <Loader />}
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

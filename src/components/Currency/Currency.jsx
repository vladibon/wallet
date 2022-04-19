import { useState, useEffect } from 'react';
import CurrencyItem from './CurrencyItem';
import { fetchCurrency } from 'api/currencyAPI';
import Spinner from 'components/Spinner';
import s from './Currency.module.css';

function Currency() {
  const [exchanges, setExchanges] = useState([]);
  const [loadings, setLoadings] = useState(false);
  const [error, setError] = useState(null);

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
          setError(error);
        })
        .finally(() => setLoadings(false));
    }
  }, []);

  return (
    <div className={s.table__container}>
      {error && <h3 className={s.table__error}>…sorry, server error occurred</h3>}
      {loadings && <Spinner size={100} color='white' opacity='0.8' />}
      <table className={s.table}>
        <thead className={s.table__title_row}>
          <tr>
            <th className={s.table__title}>Currency</th>
            <th className={s.table__title}>Buy</th>
            <th className={s.table__title}>Sale</th>
          </tr>
        </thead>
        <tbody className={s.table__body}>
          {!error &&
            exchanges.map(el => (
              <CurrencyItem key={el.ccy} ccy={el.ccy} buy={el.buy} sale={el.sale} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Currency;

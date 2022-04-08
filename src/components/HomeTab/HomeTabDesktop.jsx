import s from './HomeTabDesktop.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTransactionsQuery, setTransactions } from 'redux/index';
import { selectTransactions } from 'redux/selectors';

function HomeTabDesktop() {
  const dispatch = useDispatch();
  const { data } = useGetTransactionsQuery();
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    if (!data) return;
    else dispatch(setTransactions([...data.transactions]));
  }, [data, dispatch]);

  return (
    <div className={s.tableSection}>
      <table className={s.table}>
        <thead className={s.tableThead}>
          <tr>
            <th align='left'>Date</th>
            <th>Type</th>
            <th align='left'>Category</th>
            <th align='left'>Comment</th>
            <th align='right'>Amount</th>
            <th align='right'>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr>
              <td>{transaction.date}</td>
              <td align='center'>{transaction.type ? '+' : '-'}</td>
              <td>{transaction.category}</td>
              <td>{transaction.comment}</td>
              <td className={transaction.type ? s.income : s.expense} align='right'>
                {Intl.NumberFormat('ru-Ru', { minimumFractionDigits: 2 }).format(
                  transaction.amount,
                )}
              </td>
              <td align='right'>
                {Intl.NumberFormat('ru-Ru', { minimumFractionDigits: 2 }).format(
                  transaction.balance,
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomeTabDesktop;

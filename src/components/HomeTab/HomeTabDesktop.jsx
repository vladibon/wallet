import s from './HomeTabDesktop.module.css';
import HomeTabBackground from '../../images/home-tab-bg.png';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTransactionsQuery, setLatestTransactions } from 'redux/index';
import { selectTransactions } from 'redux/selectors';

function HomeTabDesktop() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { data } = useGetTransactionsQuery(page);
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    if (data?.transactions?.length) {
      setTotalPages(data.totalPages);
      dispatch(setLatestTransactions([...data.transactions]));
    }
  }, [data, dispatch, page]);

  const showPrevPage = () => setPage(page === 1 ? 1 : page - 1);

  const showNextPage = () => setPage(page >= totalPages ? page : page + 1);

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
        {transactions.length ? (
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction._id}>
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
        ) : (
          <tbody>
            <tr>
              <td colSpan='6'>
                <img className={s.homeTab__bg} src={HomeTabBackground} alt='Transactions' />
              </td>
            </tr>
          </tbody>
        )}
      </table>{' '}
      {page >= totalPages && <p>THERE IS NO MORE RESULTS</p>}
      <div style={{ display: 'flex', width: '300' }}>
        <button onClick={showPrevPage}>previous</button>
        <button onClick={showNextPage}>next</button>
      </div>
    </div>
  );
}

export default HomeTabDesktop;

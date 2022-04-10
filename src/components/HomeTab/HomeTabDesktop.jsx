import s from './HomeTabDesktop.module.css';
import HomeTabBackground from '../../images/home-tab-bg.png';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTransactionsQuery, setLatestTransactions, setMoreTransactions } from 'redux/index';
import { selectTransactions } from 'redux/selectors';

function HomeTabDesktop() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { data } = useGetTransactionsQuery(page);
  const transactions = useSelector(selectTransactions);

  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (data?.transactions?.length) {
      setTotalPages(data.totalPages);
      if (page === 1) {
        dispatch(setLatestTransactions([...data.transactions]));
      } else {
        if (page !== data.page) return;
        dispatch(setMoreTransactions([...data.transactions]));
      }
    }
  }, [data, dispatch, page]);

  const scroll = () => {
    if (page === totalPages) {
      setHasMore(false);
      return;
    }
    setPage(page + 1);
  };

  return (
    <div className={s.tableSection}>
      <InfiniteScroll
        dataLength={transactions.length}
        next={scroll}
        hasMore={hasMore}
        height={500}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>sorry, you don't have any transactions yet...</b>
          </p>
        }
      >
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
        </table>
      </InfiniteScroll>
    </div>
  );
}

export default HomeTabDesktop;

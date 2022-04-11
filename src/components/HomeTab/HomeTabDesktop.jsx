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
    <div className={s.homeTab__section}>
      <div className={s.tableSection}>
        <table className={`${s.table} ${s.tableTitle}`}>
          <thead className={s.tableThead}>
            <tr>
              <th className={s.tableCell} align='left'>
                Date
              </th>
              <th className={s.tableCell}>Type</th>
              <th className={s.tableCell} align='left'>
                Category
              </th>
              <th className={s.tableCell} align='left'>
                Comment
              </th>
              <th className={s.tableCell} align='right'>
                Amount
              </th>
              <th className={s.tableCell} align='right'>
                Balance
              </th>
            </tr>
          </thead>
        </table>
        <InfiniteScroll
          dataLength={transactions.length}
          next={scroll}
          hasMore={hasMore}
          height={400}
          endMessage={
            <span className={s.message}>
              &#8212; <i>this was the last one </i>&#8212;
            </span>
          }
        >
          {transactions.length ? (
            <table className={s.table}>
              <tbody>
                {transactions.map(transaction => (
                  <tr className={s.tbody__tr} key={transaction._id}>
                    <td className={s.tableCell}>{transaction.date}</td>
                    <td className={s.tableCell} align='center'>
                      {transaction.type ? '+' : '-'}
                    </td>
                    <td className={s.tableCell}>{transaction.category}</td>
                    <td className={s.tableCell}>{transaction.comment}</td>
                    <td
                      className={
                        transaction.type
                          ? `${s.tableCell} ${s.income}`
                          : `${s.tableCell} ${s.expense}`
                      }
                      align='right'
                    >
                      {Intl.NumberFormat('ru-Ru', { minimumFractionDigits: 2 }).format(
                        transaction.amount,
                      )}
                    </td>
                    <td className={s.tableCell} align='right'>
                      {Intl.NumberFormat('ru-Ru', { minimumFractionDigits: 2 }).format(
                        transaction.balance,
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>
              <img className={s.homeTab__bg} src={HomeTabBackground} alt='Transactions' />
              <p className={s.message}>sorry, you don't have any transactions yet...</p>
            </>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default HomeTabDesktop;

import s from './HomeTabDesktop.module.css';
import HomeTabBackground from '../../images/home-tab-bg.png';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTransactionsQuery, setTransactions } from 'redux/index';
import { selectTransactions } from 'redux/selectors';

function HomeTabDesktop() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const { data } = useGetTransactionsQuery();
  const transactions = useSelector(selectTransactions);

  const [items, setItems] = useState(Array.from({ length: 0 }));
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!data) return;
    else dispatch(setTransactions([...data.transactions]));

    const newItems = [...items, ...transactions];
    setItems(newItems);
  }, [data, dispatch, page]);

  const scroll = () => {
    if (page === totalPages) {
      setHasMore(false);
      return;
    }

    setPage(page + 1);
    const newItems = [...items, ...transactions];
    setItems(newItems);
  };

  return (
    <div className={s.tableSection}>
      <InfiniteScroll
        dataLength={items.length}
        next={scroll}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
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
              {items.map(transaction => (
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

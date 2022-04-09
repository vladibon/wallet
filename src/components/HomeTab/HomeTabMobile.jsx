import HomeTabBackground from '../../images/home-tab-bg.png';
import s from './HomeTabMobile.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTransactionsQuery, setLatestTransactions } from 'redux/index';
import { selectTransactions } from 'redux/selectors';

function HomeTabMobile() {
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
    <>
      {transactions.length ? (
        <>
          <ul className={s.homeTab}>
            {transactions.map(transaction => (
              <li
                className={
                  transaction.type
                    ? `${s.homeTab__items}  ${s.incomeBorder}`
                    : `${s.homeTab__items}  ${s.expenseBorder}`
                }
                key={transaction._id}
              >
                <ul className={s.homeTabItems__list}>
                  <li className={s.homeTabItems__listCell}>
                    <span className={s.homeTabItems__listTitle}>Date</span>
                    <span
                      className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningStart}`}
                    >
                      {transaction.date}
                    </span>
                  </li>
                  <li className={s.homeTabItems__listCell}>
                    <span className={s.homeTabItems__listTitle}>Type</span>
                    <span
                      className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningCenter}`}
                    >
                      {transaction.type ? '+' : '-'}
                    </span>
                  </li>
                  <li className={`${s.homeTabItems__listCell} ${s.homeTabItems__listCellWidth}`}>
                    <span className={s.homeTabItems__listTitle}>Category</span>
                    <span
                      className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningStart}`}
                    >
                      {transaction.category}
                    </span>
                  </li>
                  <li className={`${s.homeTabItems__listCell} ${s.homeTabItems__listCellWidth}`}>
                    <span className={s.homeTabItems__listTitle}>Comment</span>
                    <span
                      className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningStart}`}
                    >
                      {transaction.comment}
                    </span>
                  </li>
                  <li className={s.homeTabItems__listCell}>
                    <span className={s.homeTabItems__listTitle}>Amount</span>
                    <span
                      className={
                        transaction.type
                          ? `${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningWeight} ${s.income}`
                          : `${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningWeight} ${s.expense}`
                      }
                    >
                      {Intl.NumberFormat('ru-Ru', {
                        minimumFractionDigits: 2,
                      }).format(transaction.amount)}
                    </span>
                  </li>
                  <li className={s.homeTabItems__listCell}>
                    <span className={s.homeTabItems__listTitle}>Balance</span>
                    <span className={s.homeTabItems__listMeaning}>
                      {Intl.NumberFormat('ru-Ru', {
                        minimumFractionDigits: 2,
                      }).format(transaction.balance)}
                    </span>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
          {page >= totalPages && <p>THERE IS NO MORE RESULTS</p>}
          <div style={{ display: 'flex', width: '300' }}>
            <button onClick={showPrevPage}>previous</button>
            <button onClick={showNextPage}>next</button>
          </div>
        </>
      ) : (
        <img className={s.homeTab__bg} src={HomeTabBackground} alt='Transactions' />
      )}
    </>
  );
}

export default HomeTabMobile;

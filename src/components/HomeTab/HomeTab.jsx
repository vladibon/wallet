import HomeTabItems from './HomeTabItems';
import s from './HomeTab.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGetTransactionsQuery,
  setLatestTransactions,
  setNextPage,
  resetPage,
} from 'redux/index';
import { selectTransactions } from 'redux/selectors';

function HomeTab() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const { data } = useGetTransactionsQuery(page);
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    if (data?.transactions?.length) {
      dispatch(setLatestTransactions([...data.transactions]));
    }
  }, [data, dispatch, page]);

  const showPrevPage = () => setPage(page === 1 ? 1 : page - 1);

  const showNextPage = () => setPage(page >= totalPages ? page : page + 1);

  // const dispatch = useDispatch();
  // const { data } = useGetTransactionsQuery();
  // const transactions = useSelector(selectTransactions);

  // useEffect(() => {
  //   console.log(data);
  //   if (data?.transactions?.length) {
  //     dispatch(setLatestTransactions([...data.transactions]));
  //   }
  // }, [data, dispatch]);

  // const showNextPage = () => dispatch(setNextPage());

  return (
    <>
      {transactions.length ? (
        <>
          <ul className={s.homeTab}>
            <li className={s.homeTab__hidden}>
              <ul className={s.homeTab__title}>
                <li className={s.homeTab__titleCell}>Дата</li>
                <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellCenter}`}>
                  Тип
                </li>
                <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellWidth}`}>
                  Категория
                </li>
                <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellWidth}`}>
                  Комментарий
                </li>
                <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellEnd}`}>Сумма</li>
                <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellEnd}`}>
                  Баланс
                </li>
              </ul>
            </li>
            {transactions.map(item => (
              <li
                className={
                  item.type === true
                    ? `${s.homeTab__items}  ${s.income}`
                    : `${s.homeTab__items}  ${s.expense}`
                }
                key={item._id}
              >
                <HomeTabItems
                  date={item.date}
                  type={item.type}
                  category={item.category}
                  comment={item.comment}
                  amount={item.amount}
                  balance={item.balance}
                />
              </li>
            ))}
          </ul>
          {/* {page >= totalPages && <p>THERE IS NO MORE RESULTS</p>}
          <div style={{ display: 'flex', width: '300' }}>
            <button onClick={showPrevPage}>previous</button>
            <button onClick={showNextPage}>next</button>
          </div> */}

          <div style={{ display: 'flex', width: '300' }}>
            <button onClick={showNextPage}>next</button>
          </div>
        </>
      ) : (
        <p>sorry, you don't have any transactions yet...</p>
      )}
    </>
  );
}

export default HomeTab;

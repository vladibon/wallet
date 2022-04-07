import HomeTabItems from './HomeTabItems';
import s from './HomeTab.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTransactionsQuery, setMoreTransactions, setLatestTransactions } from 'redux/index';
import { selectTransactions } from 'redux/selectors';

function HomeTab({ items }) {
  const [noMoreResults, setNoMoreResults] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { data } = useGetTransactionsQuery(page, { skip: noMoreResults });
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    if (data?.transactions?.length) {
      dispatch(setMoreTransactions([...data.transactions]));
    } else if (page > 1) {
      setNoMoreResults(true);
    }
  }, [data]);

  // useEffect(() => {
  //   console.log('data', data);
  //   if (!data) return;
  //   else dispatch(setLatestTransactions([...data.transactions]));

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);

  // useEffect(() => {
  //   if (page === 1) return;
  //   else dispatch(setMoreTransactions([...data.transactions]));
  //   console.log('data + page', data);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [page]);

  console.log(transactions);

  return (
    <>
      <ol>
        {transactions.map(el => {
          return (
            <li key={el._id}>
              {el.type}-{el.comment}=={el.amount}
            </li>
          );
        })}
      </ol>
      <button onClick={() => setPage(page + 1)}>more...</button>
    </>
  );

  // return (
  //   <ul className={s.homeTab}>
  //     <li className={s.homeTab__hidden}>
  //       <ul className={s.homeTab__title}>
  //         <li className={s.homeTab__titleCell}>Дата</li>
  //         <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellCenter}`}>Тип</li>
  //         <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellWidth}`}>Категория</li>
  //         <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellWidth}`}>
  //           Комментарий
  //         </li>
  //         <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellEnd}`}>Сумма</li>
  //         <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellEnd}`}>Баланс</li>
  //       </ul>
  //     </li>
  //     {items.map(item => (
  //       <li
  //         className={
  //           item.type === '+'
  //             ? `${s.homeTab__items}  ${s.income}`
  //             : `${s.homeTab__items}  ${s.expense}`
  //         }
  //         key={item.id}
  //       >
  //         <HomeTabItems
  //           date={item.date}
  //           type={item.type}
  //           category={item.category}
  //           comment={item.comment}
  //           sum={item.sum}
  //           balance={item.balance}
  //         />
  //       </li>
  //     ))}
  //   </ul>
  // );
}

export default HomeTab;

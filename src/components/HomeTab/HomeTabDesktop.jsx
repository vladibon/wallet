// import s from './HomeTabMobile.module.css';

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
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Amount</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr>
            <td>{transaction.date}</td>
            <td>{transaction.type}</td>
            <td>{transaction.category}</td>
            <td>{transaction.comment}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HomeTabDesktop;

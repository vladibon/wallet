import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTransactionsQuery, setTransactions } from 'redux/index';
import { selectTransactions } from 'redux/selectors';
import { DiagramChart } from 'components/DiagramChart/DiagramChart'
// import { UserData } from './../DoughnutChart/data';
import s from './DiagramTable.module.css';

const colors = ['#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',];

export default function DiagramTable() {
 const { data} = useGetTransactionsQuery();
  const dispatch = useDispatch();
  
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    if (!data) return;
    else dispatch(setTransactions([...data.transactions]));
  }, [data, dispatch]);
  return (
    <div style={{ paddingTop: 32 }}>
       <DiagramChart />
      <div className={s.selectList}>
        <select className={s.selectItem}>
          <option>April</option>
          <option>May</option>
        </select>
        <select className={s.selectItem}>
          <option>2022</option>
          <option>2021</option>
        </select>
      </div>

      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr className={s.trHead}>
            <th className={s.tableTop}>Category</th>
            <th className={s.tableTop2}>Amount</th>
          </tr>
        </thead>
        <tbody className={s.boby}>
          {transactions.map((transaction,idx) => (
            <tr className={s.listItem} key={transaction.id}>
              <th className={s.nameTansaction}>
                <span className={s.color} style={{ backgroundColor: `${colors[idx]}` }}
                ></span>
                {transaction.category}
              </th>
              <th className={s.costs}>{transaction.amount}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={s.amount}>
        <p className={s.spent}>
          Spent:<span className={s.spentMinus}>22259</span>
        </p>
        <p className={s.spent}>
          Income: <span className={s.spentPlus}>40000</span>
        </p>
      </div>
    </div>
  );
}

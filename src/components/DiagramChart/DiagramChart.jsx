import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTransactionsQuery, setTransactions } from 'redux/index';
import { selectTransactions } from 'redux/selectors';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import s from './DiagramChart.module.css';
import { selectBalance } from 'redux/selectors'

ChartJS.register(ArcElement, Tooltip, Legend);
 
export function  DiagramChart() {
    const balance = useSelector(selectBalance);

  const { data} = useGetTransactionsQuery();
  const dispatch = useDispatch();
  
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    if (!data) return;
    else dispatch(setTransactions([...data.transactions]));
  }, [data, dispatch]);

  const user = {
    // labels: [],
    labels: transactions.map(transaction => transaction.category),
    datasets: [
      {
        label: 'Transactions',
        data: transactions.map(transaction => transaction.amount),
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderWidth: 0,
      },
    ],
  }
  //   options  {
  //   legend: {
  //     display: false,
  //   },
  //   plugins: {
  //     datalabels: {
  //       display: true,
  //       formatter: (val, ctx) => {
  //         return ctx.chart.data.labels[ctx.dataIndex];
  //       },
  //       color: '#fff',
  //       backgroundColor: '#404040'
  //     },
  //   }
  
  
  // };
  
  // const options = {
  //   legend: {
  //     display: false
  //   },
  //   plugins: {
  //     datalabels: {
  //       display: true,
  //       formatter: (val, ctx) => {
  //         return ctx.chart.data.labels[ctx.dataIndex];
  //       },
  //       color: '#fff',
  //       backgroundColor: '#404040'
  //     },
  //   }
  
  // }

  return (
    <div className={s.sectionDoughnut}>
      <h2 className={s.title}>Statistics</h2>
      <div className={s.doughnut}>
              <p className={s.balance__sum}>&#8372; {balance.toFixed(2)}</p>
        <Doughnut data={user}
          // options={options}
        />
      </div>
    </div>
  );
}
 


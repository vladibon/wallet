import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTransactionsQuery, setLatestTransactions } from 'redux/index';
import { selectTransactions } from 'redux/selectors';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import s from './DiagramChart.module.css';
import { selectBalance } from 'redux/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DiagramChart({ data, colors }) {
  const balance = useSelector(selectBalance);

  const user = {
    labels: data.map(transaction => transaction.category),
    datasets: [
      {
        label: 'Transactions',
        data: data.map(transaction => transaction.amount),
        backgroundColor: [...colors],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: '',
        rtl: false,
        labels: {
          pointStyle: 'rect',
          usePointStyle: true,
          padding: 20,
          font: {
            family: 'Montserrat',
            size: 5,
            weight: 400,
          },
        },
      },
    },
  };

  return (
    <div className={s.sectionDoughnut}>
      <h2 className={s.title}>Statistics</h2>
      <div className={s.doughnut}>
        <p className={s.balance__sum}>&#8372; {balance.toFixed(2)}</p>
        <Doughnut data={user} options={options} />
      </div>
    </div>
  );
}

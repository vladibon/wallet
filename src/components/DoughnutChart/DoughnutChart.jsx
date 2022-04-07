import React from 'react';
import { Doughnut } from 'react-chartjs-2';
// import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { UserData } from './data';
import s from './DoughnutChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: [],
  // UserData.map(data => data.userTransaction),
  datasets: [
    {
      label: 'Transactions',
      data: UserData.map(data => data.userLost),
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
};

export function DoughnutChart() {
  return (
    <div className={s.sectionDoughnut}>
      <h2 className={s.title}>Statistics</h2>
      <div className={s.doughnut}>
        <Doughnut data={data} />
      </div>
    </div>
  );
}

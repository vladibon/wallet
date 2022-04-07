import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { UserData } from './data';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: UserData.map(data => data.userTransaction),
  datasets: [
    {
      label: '# of Votes',
      data: UserData.map(data => data.userLost),
      backgroundColor: [
        ' #FED057',
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

export const options = {
  plugins: {
    legend: {
      position: 'right',
      rtl: true,
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 20,
      },
    },
  },
};
export function DoughnutChart() {
  return <Doughnut  options={options} data={data} />;
  
}
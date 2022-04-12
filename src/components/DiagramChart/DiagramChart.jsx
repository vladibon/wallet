import React from 'react';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import s from './DiagramChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DiagramChart({ data, colors, total }) {
  const user = {
    labels: data.map(el => el.category),
    datasets: [
      {
        label: 'Transactions',
        data: data.map(el => el.sum),
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
        {data?.length ? (
          <>
            <p className={s.balance__sum}>&#8372; {total}</p>
            <div className={s.canvas}>
              <Doughnut data={user} options={options} />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

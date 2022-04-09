import React from 'react';
import { UserData } from './../DoughnutChart/data';
import { DoughnutChart } from 'components/DoughnutChart/DoughnutChart';
import s from './DiagramTable.module.css';

export default function DiagramTable() {
  const numbers = UserData;
  return (
    <div className={s.diagramTable__section}>
      <DoughnutChart />
      <div className={s.diagramTable}>
        <div className={s.selectList}>
          <select className={s.selectItem}>
            <option>Aptil</option>
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
            {numbers.map(number => (
              <tr className={s.listItem} key={number.id}>
                <th className={s.nameTansaction}>
                  <span className={s.color} style={{ backgroundColor: `${number.color}` }}></span>
                  {number.userTransaction}
                </th>
                <th className={s.costs}>{number.userLost}</th>
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
    </div>
  );
}

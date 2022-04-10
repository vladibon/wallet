import React from 'react';

import s from './DiagramTable.module.css';

export default function DiagramTable({ data, colors }) {
  return (
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr className={s.trHead}>
          <th className={s.tableTop}>Category</th>
          <th className={s.tableTop2}>Amount</th>
        </tr>
      </thead>
      <tbody className={s.body}>
        {data.map((el, idx) => (
          <tr className={s.listItem} key={el.category}>
            <td className={s.nameTansaction}>
              <span className={s.color} style={{ backgroundColor: `${colors[idx]}` }}></span>
              {el.category}
            </td>
            <td className={s.costs}>{el.sum}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

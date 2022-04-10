import s from './DiagramTab.module.css';

import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  useGetTransactionsQuery,
  setLatestTransactions,
  useGetStatisticsQuery,
  setStatistics,
} from 'redux/index';
import { selectTransactions } from 'redux/selectors';
import DiagramChart from 'components/DiagramChart';
import DiagramTable from 'components/DiagramTable';

const colors = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function DiagramTab() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  // const { data, error } = useGetStatisticsQuery({ month, year });
  const { data } = useGetTransactionsQuery();
  const dispatch = useDispatch();

  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    if (!data) return;
    else dispatch(setLatestTransactions([...data.transactions]));
  }, [data, dispatch]);

  const onInputChange = e => {
    console.log(e.value);
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'month':
        setMonth(value);
        break;
      case 'year':
        setYear(value);
        break;
      default:
    }
  };

  return (
    <div style={{ paddingTop: 32 }}>
      <DiagramChart colors={colors} data={transactions} />
      <div style={{ paddingTop: 32 }}>
        <select className={s.select} onChange={onInputChange} defaultValue={month}>
          <option value='' disabled>
            Month
          </option>
          {months.map((el, idx) => (
            <option key={el} value={idx + 1}>
              {el}
            </option>
          ))}
        </select>
        <select className={s.select} onChange={onInputChange} defaultValue={year}>
          <option value='' disabled>
            Year
          </option>
          <option>2022</option>
        </select>
      </div>

      <DiagramTable colors={colors} data={transactions} />

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

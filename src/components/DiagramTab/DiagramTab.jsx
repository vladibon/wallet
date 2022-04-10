import s from './DiagramTab.module.css';

import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetStatisticsQuery, setStatistics } from 'redux/index';
import { selectStatistics } from 'redux/selectors';
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
  const dispatch = useDispatch();
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [showExpense, setShowExpence] = useState(true);

  const { data, error } = useGetStatisticsQuery({ month, year });
  const stats = useSelector(selectStatistics);

  const statsToRender = () => (showExpense ? stats.expense : stats.income);

  useEffect(() => {
    if (!data) return;
    else dispatch(setStatistics(data));
  }, [data, error, dispatch]);

  const onInputChange = e => {
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
    <div  className={s.DiagramTab}>
      <DiagramChart colors={colors} data={statsToRender()} />
      <div className={s.conteinerTable}>
<div className={s.selectWrapper}>
        <select className={s.select} onChange={onInputChange} name={'month'} value={month}>
          <option value='' disabled>
            Month
          </option>
          {months.map((el, idx) => (
            <option key={el} value={idx}>
              {el}
            </option>
          ))}
        </select>
        <select className={s.select} onChange={onInputChange} name={'year'} value={year}>
          <option value='' disabled>
            Year
          </option>
          <option value={2022}>2022</option>
        </select>
      </div>

      <DiagramTable colors={colors} data={statsToRender()} />

      <div className={s.amount}>
        <p className={s.spent} onClick={() => setShowExpence(true)}>
          <span className={s.spentText}>Spent:</span>
          <span className={s.spentMinus}>{stats.totalExpense}</span>
        </p>
        <p className={s.spent} onClick={() => setShowExpence(false)}>
          <span className={s.spentText}>Income:</span>
          <span className={s.spentPlus}>{stats.totalIncome}</span>
        </p>
      </div>
      </div>
    </div>
  );
}

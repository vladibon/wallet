import s from './DiagramTab.module.css';

import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { useGetStatisticsQuery, setStatistics, setError } from 'redux/index';
import { selectStatistics } from 'redux/selectors';
import DiagramChart from 'components/DiagramChart';
import DiagramTable from 'components/DiagramTable';
import { generalStyle, menuStyle } from '../ModalAddTransaction/ModalAddTransaction.styled';

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
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    if (error?.status >= 500) dispatch(setError(500));

    if (!data) return;
    else dispatch(setStatistics(data));
  }, [data, error, dispatch]);

  const monthsSelection = months.map((el, idx) => ({ value: idx, label: el }));
  const monthStyle = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#4a56e2' : '#000000',
      padding: 20,
    }),

    control: styles => ({
      ...styles,
      ...generalStyle,
      fontSize: '16px',
      fontFamily: 'Poppins',
      border: '1px solid black',
      fontWeight: 400,
      lineHeight: 1.3,
      marginBottom: 20,
      borderRadius: 30,
      cursor: 'pointer',
      padding: '12px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      maxWidth: 280,
    }),
    menu: styles => ({
      ...styles,
      ...menuStyle,
      top: 60,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    },
  };
  const handleMonthChange = selectedMonth => {
    setSelectedMonth(selectedMonth);
    setMonth(selectedMonth.value);
  };

  const SelectMonth = () => (
    <Select
      placeholder='Month'
      styles={monthStyle}
      defaultValue={selectedMonth}
      onChange={handleMonthChange}
      options={monthsSelection}
    />
  );

  const yearSelection = [{ value: 2022, label: '2022' }];

  const handleYearChange = selectedYear => {
    setSelectedYear(selectedYear);
    setYear(selectedYear.value);
  };

  const SelectYear = () => (
    <Select
      placeholder='Year'
      styles={monthStyle}
      defaultValue={selectedYear}
      onChange={handleYearChange}
      options={yearSelection}
    />
  );

  return (
    <div className={s.DiagramTab}>
      <DiagramChart colors={colors} data={statsToRender()} />
      <div className={s.conteinerTable}>
        <div className={s.selectWrapper}>
          <div className={s.selectwr}>
            <SelectMonth />
          </div>

          <div className={s.selectwr}>
            <SelectYear />
          </div>
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

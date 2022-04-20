import s from './DiagramTab.module.css';

import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { useGetStatisticsQuery, setStatistics, setError } from 'redux/index';
import { selectStatistics, selectSignupDate } from 'redux/selectors';
import DiagramChart from 'components/DiagramChart';
import DiagramTable from 'components/DiagramTable';
import { generalStyle, menuStyle } from '../ModalAddTransaction/ModalAddTransaction.styled';

import { colors, months } from './diagramData';

const monthStyle = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#ffffff' : '#000000',
    padding: 20,
  }),

  control: styles => ({
    ...styles,
    ...generalStyle,
    fontSize: '16px',
    fontFamily: 'Poppins',
    border: '1px solid black',
    fontWeight: 500,
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

export default function DiagramTab() {
  const dispatch = useDispatch();
  const date = new Date();
  const [month, setMonth] = useState({
    value: date.getMonth(),
    label: months[date.getMonth()],
  });
  const [year, setYear] = useState({
    value: date.getFullYear(),
    label: date.getFullYear().toString(),
  });
  const [showExpense, setShowExpence] = useState(true);

  const { data, error } = useGetStatisticsQuery({ month: month.value, year: year.value });
  const stats = useSelector(selectStatistics);
  const signupDate = useSelector(selectSignupDate);

  const getDateSelections = () => {
    let m = [];
    let y = [];
    const S = new Date(signupDate);

    m = [...months.slice(S.getMonth()), ...months.slice(0, date.getMonth() + 1)];
    for (let i = S.getFullYear(); i <= date.getFullYear(); i += 1) {
      y.push(i);
    }

    return {
      months: m.map((el, idx) => ({ value: idx, label: el })),
      years: [...y].map((el, idx) => ({ value: idx, label: el })),
    };
  };

  const statsToRender = () => (showExpense ? stats.expense : stats.income);
  const totalToRender = () => (showExpense ? stats.totalExpense : stats.totalIncome);

  useEffect(() => {
    if (error?.status >= 500 || error?.status === 'FETCH_ERROR') dispatch(setError(500));

    if (!data) return;
    else dispatch(setStatistics(data));
  }, [data, error, dispatch]);

  const SelectMonth = () => (
    <Select
      placeholder='Month'
      styles={monthStyle}
      defaultValue={month}
      onChange={value => setMonth(value)}
      options={getDateSelections().months}
    />
  );

  const SelectYear = () => (
    <Select
      placeholder='Year'
      styles={monthStyle}
      defaultValue={year}
      onChange={value => setYear(value)}
      options={getDateSelections().years}
    />
  );

  return (
    <div className={s.DiagramTab}>
      <DiagramChart colors={colors} data={statsToRender()} total={totalToRender()} />
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
          <p
            className={s[!showExpense ? 'spent' : 'spentActive']}
            onClick={() => setShowExpence(true)}
          >
            <span className={s.spentText}>Spent:</span>
            <span className={s.spentMinus}>{stats.totalExpense}</span>
          </p>
          <p
            className={s[showExpense ? 'spent' : 'spentActive']}
            onClick={() => setShowExpence(false)}
          >
            <span className={s.spentText}>Income:</span>
            <span className={s.spentPlus}>{stats.totalIncome}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

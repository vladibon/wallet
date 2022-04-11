import { useState, useEffect, Component } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Icons from 'images/sprite.svg';
import s from './ModalAddTransaction.module.css';
import { selectCategories } from 'redux/selectors';
import {
  useAddTransactionMutation,
  closeModalWindow,
  setBalance,
  setLatestTransactions,
} from 'redux/index';

import { setCurrentDate } from './setCurrentDate';
import Button from 'components/Button';

export default function ContactForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const [type, setType] = useState(false);
  const [category, setCategory] = useState('default');
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState('');
  const currentDate = setCurrentDate();
  const [date, setDate] = useState(currentDate);
  const [comment, setComment] = useState('');

  const { income, expense } = useSelector(selectCategories);
  const [addTransaction] = useAddTransactionMutation();

  useEffect(() => {
    if (type) {
      setCategories(income);
      setCategory(income[0]);
    } else {
      setCategories(expense);
      setCategory(expense[0]);
    }
  }, [expense, income, type]);

  const options = categories.map(category => ({ value: category, label: category }));

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    setCategory(selectedOption.value);
  };

  const customStyles = {
    option: (provided, state) => {
      return {
        ...provided,
        // borderBottom: '1px dotted pink',

        color: state.isSelected ? '#4a56e2' : '#000000',
        padding: 20,
      };
    },

    control: styles => ({
      // none of react-select's styles are passed to <Control />
      // width: 200,
      ...styles,
      width: '100%',
      marginBottom: '20px',
      paddingLeft: '20px',
      fontSize: '18px',
      outline: 'none',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderBottom: '1px solid #e0e0e0',
      borderRadius: 0,
      '&:hover, &:focus': {
        borderBottom: '1px solid #4a56e2',
        outline: 'none',
      },
    }),
    menu: styles => ({
      ...styles,
      overFlow: 'hidden',
      marginBottom: '-20px',
      borderRadius: '30px',
      color: 'black',
      opacity: 0.8,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  const MySelect = () => (
    <Select
      placeholder='Choose category'
      styles={customStyles}
      defaultValue={selectedOption}
      onChange={handleChange}
      options={options}
    />
  );

  const handleInputChange = e => {
    const { name, value, checked } = e.target;

    switch (name) {
      case 'type':
        setType(checked);
        break;

      case 'amount':
        setAmount(value);
        break;

      case 'category':
        setCategory(value);
        break;

      case 'date':
        if (value !== currentDate)
          toast.error('sorry, only current date is available at the moment');
        break;

      case 'comment':
        setComment(value);
        break;

      // no default
    }
  };

  const reset = () => {
    setType(false);
    setCategory('default');
    setAmount('');
    setDate('');
    setComment('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const transaction = {
      date,
      type,
      category,
      comment,
      amount,
    };

    addTransaction({ transaction }).then(({ data, error }) => {
      if (data) {
        dispatch(setBalance({ balance: data.balance }));
        dispatch(setLatestTransactions(data.transactions));
        dispatch(closeModalWindow());
        reset();
      } else if (error) {
        if (error.data.message === 'Balance cannot be negative')
          toast.error("sorry, you don't have enough money for this expense");
        else toast.error(error.data.message);
      }
    });
  };
  return (
    <div className={s.modal}>
      <p className={s.title}>Add transaction</p>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.formCheckbox}>
          <span
            className={s.formCheckbox__label}
            style={{
              color: type && '#24cca7',
            }}
          >
            Income
          </span>
          <span className={s.formCheckbox__toggle}>
            <input
              name='type'
              type='checkbox'
              className={s.checkbox}
              id='checkbox'
              checked={type}
              onChange={handleInputChange}
            />
            <label htmlFor='checkbox'></label>
          </span>
          <span
            className={s.formCheckbox__label}
            style={{
              color: !type && '#ff6596',
            }}
          >
            Expence
          </span>
        </div>

        {/* <select
          className={s.formCategories}
          name='category'
          onChange={handleInputChange}
          defaultValue={category}
          required
        >
          <option value='default' disabled hidden>
            Choose category
          </option>
          {categories.map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select> */}
        <MySelect />
        <span></span>

        <div className={s.inputConatainer}>
          <input
            className={s.formInput}
            type='number'
            name='amount'
            value={amount}
            min='0.01'
            step='0.01'
            onChange={handleInputChange}
            placeholder='0.00'
            required
          />
          <input
            className={s.formDate}
            name='date'
            value={date}
            min={currentDate}
            max={currentDate}
            onChange={handleInputChange}
            required
          />
          <svg width='24' height='24' className={s.inputIcon}>
            <use href={`${Icons}#icon-calendar`} />
          </svg>
        </div>

        <textarea
          className={s.formComent}
          name='comment'
          value={comment}
          onChange={handleInputChange}
          placeholder='Comment'
        />

        <div className={s.btnContainer}>
          <Button className='btn__primary' type='submit' text='ADD' />
          <Button
            className='btn__secondary'
            onClick={() => dispatch(closeModalWindow())}
            type='button'
            text='CANCEL'
          />
        </div>
      </form>
    </div>
  );
}

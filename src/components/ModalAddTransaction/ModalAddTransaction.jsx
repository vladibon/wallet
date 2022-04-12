import { useState, useEffect } from 'react';
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
  setError,
} from 'redux/index';

import { setCurrentDate } from './setCurrentDate';
import Button from 'components/Button';
import { selectionStyles } from './index.js';

export default function ContactForm() {
  const dispatch = useDispatch();
  const { income, expense } = useSelector(selectCategories);

  const [selectedOption, setSelectedOption] = useState(null);
  const [type, setType] = useState(false);
  const [category, setCategory] = useState('default');
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState('');
  const currentDate = setCurrentDate();
  const [date, setDate] = useState(currentDate);
  const [comment, setComment] = useState('');

  const [addTransaction, { data, error, isLoading }] = useAddTransactionMutation();
  const options = categories.map(category => ({ value: category, label: category }));

  useEffect(() => {
    if (type) {
      setCategories(income);
      setCategory(income[0]);
    } else {
      setCategories(expense);
      setCategory(expense[0]);
    }
  }, [expense, income, type]);

  useEffect(() => {
    if (data) {
      dispatch(setBalance({ balance: data.balance }));
      dispatch(setLatestTransactions(data.transactions));
      dispatch(closeModalWindow());
      reset();
    } else if (error) {
      try {
        if (error.data?.message === 'Balance cannot be negative')
          toast.error("sorry, you don't have enough money for this expense");
        else toast.error(error.data?.message || 'your request failed');
      } catch {
        dispatch(setError(500));
        dispatch(closeModalWindow());
      }
    }
  }, [data, dispatch, error]);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    setCategory(selectedOption.value);
  };

  const SelectCategory = () => (
    <Select
      placeholder='Choose category'
      styles={selectionStyles}
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
      date: new Date(),
      type,
      category,
      comment,
      amount,
    };

    addTransaction({ transaction });
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

        <SelectCategory />
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
          <Button className='btn__primary' type='submit' text='ADD' isLoading={isLoading} />
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

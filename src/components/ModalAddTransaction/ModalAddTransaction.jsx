import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
        setDate(value);
        break;

      case 'comment':
        setComment(value);
        break;

      // no default
    }
  };

  // console.log(income, expense);
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
        console.log(error.data.message);
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

        <select
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
        </select>
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
            type='date'
            name='date'
            value={date}
            min={currentDate}
            onChange={handleInputChange}
            required
          />
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

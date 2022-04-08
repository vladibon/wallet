import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

// import Datetime from 'react-datetime';
import 'moment/locale/fr';
import 'react-datetime/css/react-datetime.css';
import s from './ModalAddTransaction.module.css';

import { selectCategories } from 'redux/selectors';
import { useAddTransactionMutation, closeModalWindow, setBalance } from 'redux/index';
import { setCurrentDate } from './setCurrentDate';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [type, setType] = useState(false);
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(() => setCurrentDate());
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
    setCategory([]);
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
        console.log('Success', data);
        dispatch(setBalance({ balance: data.balance }));
        dispatch(closeModalWindow());
        reset();
      } else if (error) {
        console.log(error.data.message);
      }
    });
  };

  // let inputProps = { name: 'date' };

  return (
    <div className={s.modal}>
      <p className={s.title}>Add transaction</p>

      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.formCheckbox}>
          <span className={s.formCheckbox__label}>Income</span>
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
          <span className={s.formCheckbox__label}>Expence</span>
        </div>
        <select
          className={s.formCategories}
          name='category'
          value={category}
          onChange={handleInputChange}
        >
          {categories.map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
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
        {/* <Datetime
          inputProps={inputProps}
          value={date}
          onChange={handleInputChange}
          dateFormat='DD.MM.YYYY'
          timeFormat={false}
        /> */}
        <input
          className={s.formDate}
          type='date'
          name='date'
          value={date}
          onChange={handleInputChange}
          required
        />
        <textarea
          className={s.formComent}
          name='comment'
          value={comment}
          onChange={handleInputChange}
          placeholder='Comment'
        />
        <button className={s.formAddBtn} type='submit'>
          ADD
        </button>
        <button
          className={s.formCancelBtn}
          type='button'
          onClick={() => dispatch(closeModalWindow())}
        >
          CANCEL
        </button>
      </form>
    </div>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func,
//   onClose: PropTypes.func,
// };

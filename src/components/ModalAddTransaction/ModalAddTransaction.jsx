import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from 'indicative/validator';
import { toast } from 'react-toastify';

import Datetime from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

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

const rules = {
  category: 'required',
  comment: 'string|max:40',
};

const messages = {
  required: field => `${field} is required`,
  'comment.max': 'only 40 characters allowed',
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const { income, expense } = useSelector(selectCategories);
  const [categories, setCategories] = useState([]);

  const [type, setType] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [amount, setAmount] = useState('');
  const currentDate = setCurrentDate();
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState('');

  const [addTransaction, { data, error, isLoading }] = useAddTransactionMutation();
  const options = categories.map(category => ({ value: category, label: category }));
  const [validationError, setValidationError] = useState({ field: null, message: '' });

  useEffect(() => {
    type ? setCategories(income) : setCategories(expense);
  }, [expense, income, type]);

  useEffect(() => {
    if (data) {
      dispatch(setBalance({ balance: data.balance }));
      dispatch(setLatestTransactions(data.transactions));
      dispatch(closeModalWindow());
      toast.success('Transaction added');
      reset();
    } else if (error) {
      try {
        if (error.data.message === 'Balance cannot be negative')
          toast.error("Sorry, you don't have enough money for this expense");
        else toast.error(error.data.message);
      } catch {
        dispatch(setError(500));
        dispatch(closeModalWindow());
      }
    }
  }, [data, dispatch, error]);

  const handleChange = selectedOption => {
    setValidationError({ field: null, message: '' });
    setSelectedOption(selectedOption);
  };

  const SelectCategory = () => (
    <Select
      placeholder='Choose category'
      styles={selectionStyles}
      defaultValue={selectedOption}
      onChange={handleChange}
      options={options}
      name='category'
    />
  );

  const handleInputChange = e => {
    const { name, value, checked } = e.target;
    setValidationError({ field: null, message: '' });

    switch (name) {
      case 'type':
        setType(checked);
        setSelectedOption(null);
        break;

      case 'amount':
        setAmount(value);
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
    setSelectedOption(null);
    setAmount('');
    setDate('');
    setComment('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    validate({ category: selectedOption?.value, comment }, rules, messages)
      .then(() => {
        const transaction = {
          date,
          type,
          category: selectedOption.value,
          comment,
          amount,
        };
        addTransaction({ transaction });
      })
      .catch(errors => {
        setValidationError({ field: errors[0].field, message: errors[0].message });
      });
  };

  const { message, field } = validationError;

  return (
    <div className={s.modal}>
      <p className={s.title}>Add transaction</p>
      <form className={s.form} onSubmit={handleSubmit}>
        {field && <p className={s[`${field}Error`]}>{message}</p>}
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
          <Datetime
            className={s.formDate}
            onChange={date => setDate(date._d)}
            isValidDate={function valid(current) {
              return current.isAfter(moment().subtract(1, 'day'));
            }}
            inputProps={{ style: { border: 'none', outline: 'none' } }}
            dateFormat={'DD-MM-YYYY'}
            initialValue={new Date()}
            closeOnSelect={true}
          />
        </div>
        <svg width='24' height='24' className={s.inputIcon}>
          <use href={`${Icons}#icon-calendar`} />
        </svg>

        <textarea
          className={s.formComent}
          type='textarea'
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

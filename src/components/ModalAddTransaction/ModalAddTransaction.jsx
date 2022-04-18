import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { MobileDateTimePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { validate } from 'indicative/validator';
import { toast } from 'react-toastify';
import { selectCategories } from 'redux/selectors';
import {
  useAddTransactionMutation,
  useAddCategoryMutation,
  closeModalWindow,
  setBalance,
  setUserCategories,
  setLatestTransactions,
  setError,
} from 'redux/index';
import Button from 'components/Button';
import Icons from 'images/sprite.svg';
import { selectionStyles } from './index.js';
import s from './ModalAddTransaction.module.css';

const rules = {
  category: 'required',
  comment: 'string|max:40',
};

const messages = {
  required: field => `${field} is required`,
  'comment.max': 'only 40 characters allowed',
};

export default function ModalAddTransaction({ setLottieRun }) {
  const dispatch = useDispatch();
  const { income, expense } = useSelector(selectCategories);
  const [categories, setCategories] = useState([]);

  const [type, setType] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState('');

  const [addTransaction, { data, error, isLoading }] = useAddTransactionMutation();
  const [addCategory, { data: categoryData }] = useAddCategoryMutation();
  const options = categories.map(category => ({ value: category, label: category }));
  const [validationError, setValidationError] = useState({ field: null, message: '' });

  useEffect(() => {
    type ? setCategories(income) : setCategories(expense);
  }, [expense, income, type]);

  useEffect(() => {
    if (!categoryData) return;

    dispatch(setUserCategories(categoryData.categories));
    toast.success(categoryData.message);
  }, [categoryData, dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(setBalance({ balance: data.balance }));
      dispatch(setLatestTransactions(data.transactions));
      dispatch(closeModalWindow());
      reset();
      setLottieRun(true);
    } else if (error) {
      try {
        toast.error(error.data.message);
      } catch {
        dispatch(setError(500));
        dispatch(closeModalWindow());
      }
    }
  }, [data, dispatch, error, setLottieRun]);

  const handleChange = value => {
    setValidationError({ field: null, message: '' });
    setSelectedOption(value);
  };

  const handleCreate = value => {
    value.toLowerCase().replace(/\W/g, '');

    if (value.length > 20) {
      toast.error("Category shouldn't be longer, than 20 symbols");
      return;
    }
    const newOption = { label: value, value };
    const newCategory = { type, category: value };

    addCategory(newCategory)
      .then(() => setSelectedOption(newOption))
      .catch(err => toast.error(err));
  };

  const SelectCategory = () => (
    <CreatableSelect
      isClearable
      placeholder='Choose category'
      styles={selectionStyles}
      onChange={handleChange}
      onCreateOption={handleCreate}
      options={options}
      defaultValue={selectedOption}
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

          <MobileDateTimePicker
            value={date}
            onChange={setDate}
            ampm={false}
            renderInput={props => (
              <TextField className={s.formDate} variant='standard' {...props} />
            )}
          />
          <svg width='24' height='24' className={s.inputIcon}>
            <use href={`${Icons}#icon-calendar`} />
          </svg>
        </div>

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

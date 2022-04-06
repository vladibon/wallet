import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from './close.svg';
import Datetime from 'react-datetime';
import 'moment/locale/fr';
import 'react-datetime/css/react-datetime.css';
import s from './ModalAddTransaction.module.css';

export default function ContactForm({ onSubmit, onClose }) {
  const [type, setType] = useState(false);
  const [category, setCategory] = useState([]);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [coment, setComent] = useState('');

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

      case 'coment':
        setComent(value);
        break;

      // no default
    }
  };

  const reset = () => {
    setType(false);
    setCategory([]);
    setAmount('');
    setDate('');
    setComent('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(type, category, amount, date, coment);
    reset();
  };

  // let inputProps = { name: 'date' };

  return (
    <div className={s.modal}>
      <p className={s.title}>Add transaction</p>
      <button type='button' className={s.btnClose} onClick={onClose}>
        <CloseIcon width='16' height='16' fill='#000000' />
      </button>

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
          <option value='main'>Main</option>
          <option value='food'>Food</option>
          <option value='car'>Car</option>
          <option value='development'>Development</option>
          <option value='children'>Children</option>
          <option value='home'>Home</option>
          <option value='education'>Education</option>
          <option value='oher'>Other</option>
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
          name='coment'
          value={coment}
          onChange={handleInputChange}
          placeholder='Coment'
        />
        <button className={s.formAddBtn} type='submit'>
          ADD
        </button>
        <button className={s.formCancelBtn} type='button' onClick={onClose}>
          CANCEL
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};

import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from './close.svg';
import s from './ModalAddTransaction.module.css';

export default function ContactForm({ onSubmit, onClose }) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [coment, setComent] = useState('');

  const handleNameChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'amount':
        setAmount(value);
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
    setAmount('');
    setDate('');
    setComent('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(amount, date, coment);
    reset();
  };

  return (
    <div className={s.modal}>
      <p className={s.title}>Добавить транзакцию</p>
      <button type='button' className={s.btnClose} onClick={onClose}>
        <CloseIcon width='16' height='16' fill='#000000' />
      </button>
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          <input type='radio' name='transaction' value='income' />
          Доход
        </label>
        <label>
          <input type='radio' name='transaction' value='outgo' checked />
          Расход
        </label>
        <input
          type='number'
          name='amount'
          value={amount}
          onChange={handleNameChange}
          placeholder='0.00'
          required
        />
        <input type='date' name='date' value={date} onChange={handleNameChange} required />
        <input
          type='text'
          name='coment'
          value={coment}
          onChange={handleNameChange}
          placeholder='Комментарий'
        />
        <button type='submit'>ДОБАВИТЬ</button>
        <button type='button' onClick={onClose}>
          ОТМЕНА
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};

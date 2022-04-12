import PropTypes from 'prop-types';
import s from './Button.module.css';
import Spinner from 'components/Spinner';

function Button({ className, onClick, type, disabled = false, text, isLoading = false }) {
  return (
    <button className={s[className]} onClick={onClick} type={type} disabled={disabled}>
      {text} {isLoading && <Spinner size={30} color='white' />}
    </button>
  );
}

Button.prototypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string,
};

export default Button;

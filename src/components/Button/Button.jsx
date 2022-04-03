import PropTypes from "prop-types";
import s from "./Button.module.css";

function Button({className, onClick, type, disabled = false, text }) {
  return (
    <button className={s[className]} onClick={onClick} type={type} disabled={disabled}>{text}</button>
    )
}

Button.prototypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string,
}

export default Button;

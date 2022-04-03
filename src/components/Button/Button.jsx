import PropTypes from "prop-types";
import s from "./Button.module.css";

function Button({className, onClick, type, disabled = false, children }) {
  return (
    <button className={s[className]} onClick={onClick} type={type} disabled={disabled}>{children}</button>
    )
}

Button.prototypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.string,
}

export default Button;

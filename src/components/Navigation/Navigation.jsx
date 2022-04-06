import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icons from 'images/sprite.svg';
import s from './Navigation.module.css';

export default function Navigation({ onClickHome, onClickCurrency, onClickStatistics }) {
  return (
    <section className={s.nav}>
      <button
        type='button'
        className={s.btnNav}
        onClick={onClickHome}
      >
        <svg className={s.btnIcon}>
          <use href={`${Icons}#icon-home`} />
        </svg>
      </button>

      <button
        type='button'
        className={s.btnNav}
        onClick={onClickStatistics}
      >
        <svg className={s.btnIcon}>
          <use href={`${Icons}#icon-statistics`} />
        </svg>
      </button>

      <button
        type='button'
        className={classNames(s.btnNav, s.btnNone)}
        onClick={onClickCurrency}
      >
        <svg className={s.btnIcon}>
          <use href={`${Icons}#icon-currency`} />
        </svg>
      </button>
    </section>
  );
}

Navigation.defaultProps = {
  onClickHome: () => null,
  onClickCurrency: () => null,
  onClickStatistics: () => null,
};

Navigation.propTypes = {
  onClickHome: PropTypes.func.isRequired,
  onClickCurrency: PropTypes.func.isRequired,
  onClickStatistics: PropTypes.func.isRequired,
};
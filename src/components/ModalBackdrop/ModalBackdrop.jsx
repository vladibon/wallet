import s from './ModalBackdrop.module.css';

import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import Icons from 'images/sprite.svg';

import { closeModalWindow } from 'redux/index';
import { useDispatch } from 'react-redux';

const modalRoot = document.querySelector('#modal-root');

function ModalBackdrop({ children }) {
  const dispatch = useDispatch();

  const onModalClose = e => {
    dispatch(closeModalWindow());
  };

  const onEscapePress = e => {
    return e.code !== 'Escape' ? null : onModalClose();
  };

  const onBackdropClick = e => {
    return e.target !== e.currentTarget ? null : onModalClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscapePress);
    return () => window.removeEventListener('keydown', onEscapePress);
  });

  return createPortal(
    <div className={s.lightbox}>
      <div className={s.lightbox__overlay} onClick={onBackdropClick}></div>
      <div className={s.lightbox__content}>
        <button
          type='button'
          className={s.lightbox__buttonClose}
          onClick={onModalClose}
          aria-label='close Modal Window'
        >
          <svg className={s.icon} width='32' height='32'>
            <use href={`${Icons}#icon-close-cross`}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
}

ModalBackdrop.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ModalBackdrop;

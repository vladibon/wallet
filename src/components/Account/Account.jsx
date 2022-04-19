import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import Icons from 'images/sprite.svg';
import { MdOutlineFileUpload, MdWork, MdStars } from 'react-icons/md';
import Button from 'components/Button';
import Spinner from 'components/Spinner';

import s from './Account.module.css';
import SuccessAnimation from 'components/SuccessAnimation';

import {
  useUpdateSubscriptionMutation,
  useUpdateAvatarMutation,
  updateSubscription,
  setAvatarURL,
  setError,
  isSuccessResponse,
} from 'redux/index';
import {
  selectUserName,
  selectUserEmail,
  selectSubscription,
  selectAvatarURL,
} from 'redux/selectors';

function Account() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userSubscription = useSelector(selectSubscription);
  const userAvatar = useSelector(selectAvatarURL);

  let isPremium = userSubscription === 'premium';
  const subscription = userSubscription[0].toUpperCase() + userSubscription.slice(1);

  const [updateSubscr, { data: subscrData, isLoading: subscrLoading }] =
    useUpdateSubscriptionMutation();
  const [updateAvatar, { data: avatarData, error: avatarError, isLoading }] =
    useUpdateAvatarMutation();

  useEffect(() => {
    if (!subscrData) return;
    dispatch(updateSubscription(subscrData));
    dispatch(isSuccessResponse());
  }, [dispatch, subscrData]);

  useEffect(() => {
    if (avatarData) {
      dispatch(setAvatarURL(avatarData));
      dispatch(isSuccessResponse());
    } else if (avatarError) {
      try {
        toast.error(avatarError.data.message);
      } catch {
        dispatch(setError(500));
      }
    }
  }, [dispatch, avatarData, avatarError, isLoading]);

  const onSubscriptionChange = () => {
    updateSubscr({ subscription: isPremium ? 'basic' : 'premium' });
  };

  const onAvatarChange = e => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('avatar', file, file.name);
    updateAvatar(formData);
  };

  return (
    <form className={s.accountForm}>
      <div className={s.accountForm__bgColor}></div>
      <h2 className={s.accountTitle}>Account settings</h2>
      <div className={s.accountForm__wrapper}>
        <div style={{ position: 'relative', height: '100%' }}>
          <img
            className={s.accountImg}
            src={`https://wallet-proj.osc-fr1.scalingo.io/${userAvatar}?${new Date().getTime()}`}
            width='200'
            height='220'
            alt='Avatar'
          />
          {isLoading && <Spinner size={40} color='white' opacity='0.8' />}
          <label className={s.inputFile__button}>
            <input
              className={s.inputFile}
              type='file'
              name='avatar'
              onChange={onAvatarChange}
            ></input>
            <div className={s.inputFile__wrapper}>
              <span className={s.inputFile__iconWrapper}>
                <MdOutlineFileUpload className={s.inputFile__icon} />
              </span>
              <span className={s.inputFile__title}>upload photo</span>
            </div>
          </label>
        </div>

        <div>
          <p className={s.subscription__wrapper}>
            {isPremium ? <MdStars /> : <MdWork />}
            <span className={s.subscriptionTitle}>{subscription} subscription</span>
          </p>

          <div>
            <label className={s.accountLabel}>
              <input
                className={`${s.accountInput} ${s.accountInput__marginBottom}`}
                placeholder='Name'
                // onChange={handleChange}
                name='name'
                // value={name}
                autoComplete='off'
              ></input>
              <button className={s.accountBtn__update} type='button'>
                update
              </button>
              <div className={s.accountPlaceholder}>
                <div className={s.accountPlaceholder__iconWrapper}>
                  <svg width='21' height='16'>
                    <use href={`${Icons}#icon-account_box`} />
                  </svg>
                  <span className={s.accountPlaceholder__title}>Name</span>
                </div>
              </div>
            </label>
          </div>

          <div>
            <label className={s.accountLabel}>
              <input
                className={s.accountInput}
                placeholder='E-mail'
                // onChange={handleChange}
                name='email'
                // value={email}
                autoComplete='off'
              ></input>
              <button className={s.accountBtn__update} type='button'>
                update
              </button>
              <div className={s.accountPlaceholder}>
                <div className={s.accountPlaceholder__iconWrapper}>
                  <svg width='21' height='16'>
                    <use href={`${Icons}#icon-email`} />
                  </svg>
                  <span className={s.accountPlaceholder__title}>E-mail</span>
                </div>
              </div>
            </label>
          </div>

          <div className={s.btn__wrapper}>
            <Button
              className={isPremium ? 'btn__secondary' : 'btn__primary'}
              type='button'
              text={isPremium ? 'quit premium' : 'try premium'}
              onClick={onSubscriptionChange}
              isLoading={subscrLoading}
            />
            <Button className='btn__red' type='button' text='delete account' />
          </div>
        </div>
      </div>
      <SuccessAnimation />
    </form>
  );
}

export default Account;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import Icons from 'images/sprite.svg';
import { MdOutlineFileUpload, MdWork, MdStars } from 'react-icons/md';
import Button from 'components/Button';
import Spinner from 'components/Spinner';

import s from './Account.module.css';
import SuccessAnimation from 'components/SuccessAnimation';

import {
  useUpdateNameMutation,
  useUpdateEmailMutation,
  useUpdateSubscriptionMutation,
  useUpdateAvatarMutation,
  setName,
  setEmail,
  updateSubscription,
  setAvatarURL,
  setError,
  setSuccessResponse,
} from 'redux/index';
import {
  selectUserName,
  selectUserEmail,
  selectSubscription,
  selectAvatarURL,
} from 'redux/selectors';
import { useState } from 'react';

function Account() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userSubscription = useSelector(selectSubscription);
  const userAvatar = useSelector(selectAvatarURL);

  const [newName, setNewName] = useState(userName);
  const [newEmail, setNewEmail] = useState(userEmail);

  let isPremium = userSubscription === 'premium';
  const subscription = userSubscription[0].toUpperCase() + userSubscription.slice(1);

  const [updateName, { data: nameData, error: nameError }] = useUpdateNameMutation();
  const [updateEmail, { data: emailData, error: emailError }] = useUpdateEmailMutation();
  const [updateSubscr, { data: subscrData, isLoading: subscrLoading }] =
    useUpdateSubscriptionMutation();
  const [updateAvatar, { data: avatarData, error: avatarError, isLoading }] =
    useUpdateAvatarMutation();

  useEffect(() => {
    try {
      if (nameData) {
        dispatch(setName(nameData));
        dispatch(setSuccessResponse());
      } else if (nameError) {
        toast.error(nameError.data.message);
      }
    } catch {
      dispatch(setError(500));
    }
  }, [dispatch, nameData, nameError]);

  useEffect(() => {
    try {
      if (emailData) {
        dispatch(setEmail(emailData));
        dispatch(setSuccessResponse());
      } else if (emailError) {
        toast.error(emailError.data.message);
      }
    } catch {
      dispatch(setError(500));
    }
  }, [dispatch, emailData, emailError]);

  useEffect(() => {
    try {
      if (!subscrData) return;
      dispatch(updateSubscription(subscrData));
      dispatch(setSuccessResponse());
    } catch {
      dispatch(setError(500));
    }
  }, [dispatch, subscrData]);

  useEffect(() => {
    try {
      if (avatarData) {
        dispatch(setAvatarURL(avatarData));
        dispatch(setSuccessResponse());
      } else if (avatarError) {
        toast.error(avatarError.data.message);
      }
    } catch {
      dispatch(setError(500));
    }
  }, [dispatch, avatarData, avatarError, isLoading]);

  const onInputSubmit = e => {
    switch (e.target.name) {
      case 'name':
        userName === newName
          ? toast.warning('This name is up to date')
          : updateName({ name: newName });
        break;
      case 'email':
        userEmail === newEmail
          ? toast.warning('This email is up to date')
          : updateEmail({ email: newEmail });
        break;
      default:
        return;
    }
  };

  const onSubscriptionChange = () => {
    updateSubscr({ subscription: isPremium ? 'basic' : 'premium' });
  };

  const onAvatarChange = e => {
    if (!e.target.files[0]) return;
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
          <img className={s.accountImg} src={userAvatar} width='200' height='220' alt='Avatar' />
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
                onChange={e => setNewName(e.target.value)}
                name='name'
                defaultValue={newName}
                autoComplete='off'
              ></input>
              <button
                className={s.accountBtn__update}
                type='button'
                onClick={onInputSubmit}
                name='name'
              >
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
                onChange={e => setNewEmail(e.target.value)}
                name='email'
                defaultValue={newEmail}
                autoComplete='off'
              ></input>
              <button
                className={s.accountBtn__update}
                type='button'
                onClick={onInputSubmit}
                name='email'
              >
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

import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'components/Button';
import sound from './glassBreak.mp3';
import s from './NotFoundPage.module.css';

export default function NotFoundPage() {
  useEffect(() => {
    new Audio(sound).play();
  }, []);

  return (
    <div className={s.box} role="alert">
      <p className={s.text}>
        <span className={s.title} >
          Error 404:
        </span>

        <br />
          Page not found :(
      </p>

      <NavLink to='/home'>
        <Button className='btn__primary' onClick={null} type='button' text='Back to Homepage' /> 
      </NavLink>
    </div>
  );
}

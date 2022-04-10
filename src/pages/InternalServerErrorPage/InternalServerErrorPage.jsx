import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import sound from './programError.mp3';
import internalServerError from './internalServerError.png';
import s from './InternalServerErrorPage.module.css';

export default function InternalServerErrorPage() {
  useEffect(() => {
    new Audio(sound).play();
  }, []);

  return (
    <div className={s.container}>
      <div className={s.heroContainer}>
        <div className={s.loginImage}></div>

        <div className={s.spanContainer}>
          <span className={s.title}>Internal Server Error</span>
        </div>
      </div>
      <div className={s.desktopContainer}>
        <img className={s.img} src={internalServerError} alt="Internal Server Error" />

        <p className={s.text}>
          <span className={s.textTitle} >
            Internal Server Error
            <br />
          </span>

          Please try again later...
        </p>

        <Link to='/home'>
          <Button className='btn__primary' type='button' text='Back to Homepage' /> 
        </Link>
      </div>
    </div>
  );
}

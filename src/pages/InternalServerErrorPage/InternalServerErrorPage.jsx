import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from 'components/Button';
import s from './InternalServerErrorPage.module.css';
import { resetError } from 'redux/index';
import { useMediaQuery } from 'react-responsive';
import ImgError from './imgError';

export default function InternalServerErrorPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(resetError());
  };

  return (
    <div className={s.container}>
      <div className={s.heroContainer}>
        <div className={s.loginImage}>
          <ImgError />
        </div>
        <div className={s.spanContainer}>
          <span className={s.title}>Internal Server Error</span>
        </div>
      </div>
      <div className={s.desktopContainer}>
        {isMobile && <ImgError className={s.img} />}

        <p className={s.text}>
          <span className={s.textTitle}>
            Internal Server Error
            <br />
          </span>
          Please try again later...
        </p>

        <Link to='/home'>
          <Button
            className='btn__primary'
            onClick={onClick}
            type='button'
            text='Back to Homepage'
          />
        </Link>
      </div>
    </div>
  );
}

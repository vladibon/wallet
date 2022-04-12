import { Link } from 'react-router-dom';
import Button from 'components/Button';

import s from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={s.box} role='alert'>
      <p className={s.text}>
        <span className={s.title}>Error 404:</span>
        <br />
        Page not found :(
      </p>

      <Link to='/home'>
        <Button className='btn__primary' type='button' text='Back to Homepage' />
      </Link>
    </div>
  );
}

import loaderImage from './loader.gif';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.box}>
      <img src={loaderImage} alt="Loader" />
    </div>
  );
}

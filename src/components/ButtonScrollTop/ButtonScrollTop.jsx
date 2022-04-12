import { useState, useEffect } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';
import s from './ButtonScrollTop.module.css'


function ButtonScrollTop() {
  const [isVisable, setIsVisable] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
}, [])

  const toggleVisibility = () => {
   if (window.scrollY > 100) {
        setIsVisable(true);
      } else {
        setIsVisable(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };  

  return (
  <>
    { isVisable && (
      <button type='button' onClick={scrollTop} className={s.btn__scroll}>
        <BiArrowFromBottom className={s.btn__icon}  aria-hidden='true' />
          </button>
      )}
      </>        
  )
}

export default ButtonScrollTop;
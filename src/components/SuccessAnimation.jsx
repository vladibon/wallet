import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Player } from '@lottiefiles/react-lottie-player';
import animationData from 'lotties/check-okey-done.json';

import { resetSuccessResponse } from 'redux/index';
import { selectSuccessResponse } from 'redux/selectors';

export default function SuccessAnimation() {
  const dispatch = useDispatch();
  const success = useSelector(selectSuccessResponse);

  useEffect(() => {
    if (!success) return;
    const animation = setTimeout(() => dispatch(resetSuccessResponse()), 2000);

    return () => {
      dispatch(resetSuccessResponse());
      clearTimeout(animation);
    };
  }, [dispatch, success]);

  return (
    <>
      {success && (
        <Player
          id='addTransaction'
          autoplay
          loop='false'
          src={animationData}
          animationSpeed={2.3}
          style={{
            height: '120px',
            width: '120px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </>
  );
}

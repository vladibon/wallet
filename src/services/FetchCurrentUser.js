import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { store } from 'redux/store';
import { useGetCurrenthUserQuery, setUser, resetUser } from 'redux/index';

export const FetchCurrentUser = () => {
  const token = store.getState().auth?.token;
  const dispatch = useDispatch();
  const { data, error, isFetching } = useGetCurrenthUserQuery();

  useEffect(() => {
    if (error) {
      console.log('please, log in');
      dispatch(resetUser());
  
    }
    if (data) dispatch(setUser({ user: data, token }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  return isFetching;
};

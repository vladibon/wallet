import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { store } from 'redux/store';
import { useGetCurrenthUserQuery, setUser, resetUser } from 'redux/index';

export const FetchCurrentUser = () => {
  const token = store.getState().auth?.token;
  const dispatch = useDispatch();
  const { data, error, isFetching } = useGetCurrenthUserQuery();
  console.log(token, data, error);
  useEffect(() => {
    if (!token) return;
    if (data) dispatch(setUser({ user: data, token }));
    // token && data ? dispatch(setUser({ user: data, token })) : dispatch(resetUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return isFetching;
};

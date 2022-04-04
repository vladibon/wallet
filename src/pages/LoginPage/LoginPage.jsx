import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { useLogInUserMutation, setUser } from 'redux/index';

function LoginPage() {
  const [loginUser, { data, error }] = useLogInUserMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    } else if (error) {
      console('Your request failed');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const onLoginSubmit = e => {
    const user = { email: 'aaa@gmail.com', password: '1234567' };
    loginUser({ user });
  };

  return (
    <main>
      <p style={{ fontSize: 200 }}>LOGIN!!!!</p>
      <button onClick={onLoginSubmit}>login</button>
    </main>
  );
}

export default LoginPage;

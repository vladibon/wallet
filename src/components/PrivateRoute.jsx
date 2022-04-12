import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn, selectError } from 'redux/selectors';

function PrivateRoute({ children }) {
  const errorStatus = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (errorStatus === 500) return <Navigate replace to='/server-error' />;
  return isLoggedIn ? children : <Navigate to='/login' />;
}

export default PrivateRoute;

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn, selectError } from 'redux/selectors';

function PublicRoute({ children, restricted = false }) {
  const errorStatus = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  if (errorStatus === 500) return <Navigate replace to='/server-error' />;
  return !shouldRedirect ? children : <Navigate replace to='/home' />;
}

export default PublicRoute;

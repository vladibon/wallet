import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return !shouldRedirect ? children : <Navigate replace to='/home' />;
}

export default PublicRoute;

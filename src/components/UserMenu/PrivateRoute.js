import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import authSelectors from '../../redux/auth/authSelectors';
import { useAuth } from '../Hooks/Hooks';
import { Outlet } from 'react-router';

export default function PrivateRoute() {
  const { isLoggedIn } = useAuth();
  return <>{!isLoggedIn ? <Navigate to="/login"></Navigate> : <Outlet />}</>;
}

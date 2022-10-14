import { lazy } from 'react';
// import Contacts from '../pages/Contacts';
// import Home from '../pages/Home';
import { Navigate, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
// import Register from '../pages/Register';
// import Login from '../pages/Login';
import { useAuth } from './Hooks/Hooks';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
// import s from './app.module.css';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';
import {
  useDispatch,
  // , useSelector
} from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from '../redux/auth/operations';
// import { selectError, selectIsLoading } from '../redux/selectors';
// import ReactLoading from 'react-loading';
const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

const App = () => {
  // const { isLoggedIn } = useAuth();
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  console.log(isRefreshing);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} restricted />
            </Route>

            <Route element={<PublicRoute />} restricted>
              <Route path="/register" element={<Register />} />
            </Route>

            {/* <Route path="/contacts" element={<Contacts />} /> */}
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<Contacts />}></Route>
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </>
    )

    // <div className={s.conteiner}>
    //   <h1 className={s.title}>Phonebook</h1>
    //   <ContactForm />

    //   <h2 className={s.title}>Contacts</h2>

    //   <Filter />
    //   {isLoading && !error && <ReactLoading type="bubbles" color="#fff" />}

    //   <ContactList />
    // </div>
  );
};
export default App;

// Код для Арр:
// <Route element={<PrivateRoute />}>
//    <Route path="/contacts" element={<Contacts/>}></Route></Route>

// Код для PrivateRoute:
// function PrivateRoute() {
//   return <>{!isAutorized ? <Navigate to="/"></Navigate> : <Outlet />}</>;
// }

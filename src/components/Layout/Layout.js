import { Outlet } from 'react-router';
// import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
// import s from './Layout.module.css';
import { AppBar } from '../AppBar/AppBar';

const Layout = () => {
  return (
    <div
      // className={s.nav}
      style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <nav className="{s.nav}">
        <NavLink className="{s.link}" style={setActiveStyle} to="/" end>
          Home
        </NavLink>
        <NavLink className="{s.link}" style={setActiveStyle} to="/register">
          Register
        </NavLink>
        <NavLink className="{s.link}" style={setActiveStyle} to="/login">
          Login
        </NavLink>
        <NavLink className="{s.link}" style={setActiveStyle} to="/contacts">
          Contacts
        </NavLink>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense> */}
    </div>
  );
};

export default Layout;

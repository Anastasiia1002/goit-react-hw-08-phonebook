import { NavLink } from 'react-router-dom';
import { useAuth } from '../Hooks/Hooks';
import css from './Navigation.module.css';

const setActiveStyle = ({ isActive }) =>
  isActive ? { color: 'rgba(161, 41, 121, 0.607)', fontWeight: 'bold' } : null;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink style={setActiveStyle} className={css.link} to="/" end>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink style={setActiveStyle} className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

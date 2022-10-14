import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  register,
  // , logIn, logOut
} from '../redux/auth/operations';
import c from './Login.module.css';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    // const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    // const form = e.currentTarget;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <form className={c.form} onSubmit={handleSubmit} autoComplete="off">
        <h1 className={c.title}>Register</h1>
        <label className={c.label}>
          Username
          <input
            className={c.input}
            type="text"
            name="name"
            value={name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label className={c.label}>
          Email
          <input
            className={c.input}
            type="email"
            name="email"
            value={email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label className={c.label}>
          Password
          <input
            className={c.input}
            type="password"
            name="password"
            value={password}
            onChange={event => handleChange(event)}
          />
        </label>
        <button className={c.buttonSub} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

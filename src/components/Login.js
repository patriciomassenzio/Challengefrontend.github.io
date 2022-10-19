/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './css/Style.css';
import './css/Login.css';

import useAuth from '../auth/useAuth';

const Login = () => {
  const history = useHistory();

  const [isLogged, setIsLogged] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      alert('complete los campos por favor');
    } else if (email === 'challenge@nubceo.com') {
      auth.login();
      history.push('/home');
      setIsLogged(true);
    } else {
      alert('error');
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="email">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            id="email"
            placeholder="EMAIL"
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            id="password"
            placeholder="PASSWORD"
          />
        </div>
        <input
          className="btn btn-primary form-control my-2 my-sm-0"
          type="submit"
          value="SEND"
        />
      </form>
    </div>
  );
};
export default Login;

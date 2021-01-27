import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import style from './Login.module.scss';

import { auth } from '../../firebase';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: 'welkom@gmail.com',
    password: 'Welkom123',
  });

  let error = '';

  const { email, password } = inputs;
  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inpts) => ({ ...inpts, [name]: value }));
  }

  function submit(e) {
    e.preventDefault();

    // Firebase automatically stores the data
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        history.push('/home');
      })
      .catch((err) => {
        error = err.message;
      });
  }

  return (
    <div className={style.login}>
      <form onSubmit={submit}>
        <div className={style.loginForm}>
          <div className="">
            <img className="" src="https://www.logolynx.com/images/logolynx/e5/e5ba79334133d2cb362dd639f755a392.png" alt="Avatar" width="70px" height="70px" />
            <p className="">Login</p>
            <div className="">
              <input
                type="email"
                className={style.email}
                id="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              {error.email
                      && error.email.map((err) => <b>{err}</b>)}
            </div>
            <div className="">
              <input
                type="password"
                className={style.password}
                id="password"
                placeholder="Wachtwoord"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <Link to="register" className={style.register}>Nieuw? Registreer hier</Link>
            <br />

            <input className={style.submitButton} type="submit" value="Inloggen" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

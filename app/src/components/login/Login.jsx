/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import axios from 'axios';

import './Login.css';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: 'welkom@gmail.com',
    password: 'Welkom123',
  });

  let error = '';

  const { email, password } = inputs;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inpts) => ({ ...inpts, [name]: value }));
  }

  // Log the user out when he lands here
  useEffect(() => {

  }, []);

  function login(e) {
    e.preventDefault();

    const body = inputs;
    axios.post('http://localhost:8000/api/auth/login', body)
      .then((res) => {
        // Check for succesful log
        if (res.status !== 200) {
          return;
        }
        const { data } = res;
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('expires_in', Date.now() + (data.expires_in * 1000));

        // And send the logged in user to home
        window.location = '/home';
      })
      .catch((res) => {
        error = res.response.data.errors;
      });
  }

  return (
    <div className="container mt-2">
      <form onSubmit={login}>
        <div className="row justify-content-center align-items-center text-center p-2">
          <div className="m-1 col-sm-8 col-md-6 col-lg-4 shadow-sm p-3 mb-5 bg-white border rounded">
            <div className="pt-5 pb-5">
              <img className="rounded mx-auto d-block" src="https://www.logolynx.com/images/logolynx/e5/e5ba79334133d2cb362dd639f755a392.png" alt="Avatar" width="70px" height="70px" />
              <p className="text-center text-uppercase mt-3">Login</p>
              <div className="form-group input-group-md">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                {error.email
                      && error.email.map((err) => <b>{err}</b>)}
              </div>
              <div className="form-group input-group-md">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Wachtwoord"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <input className="btn btn-lg btn-block btn-primary mt-4" type="submit" value="Login" />
            </div>
            {/* <a href="#" class="text-center d-block mt-2">Create an account? </a> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

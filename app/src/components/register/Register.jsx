/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import style from './Register.module.scss';

import { auth } from '../../firebase';

class Register extends Component {
  constructor(props) {
    super(props);
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';

    this.errors = {};
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }

  // Used to update the variable
  handleChange(event) {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
  }

  register(e) {
    e.preventDefault();
    // Reset the errors
    this.errors = [];

    const {
      password, confirmPassword, email, name,
    } = this.state;

    if (password !== confirmPassword) {
      this.errors.password = ['De wachtwoorden zijn niet gelijk'];
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          res.user.updateProfile({
            displayName: name,
          });
          this.setState({
            name: '',
            email: '',
            password: '',
          });

          // I cant send him back home because this is a class
          // This hack will work
          window.location.href = '/home';
        });
    }

    // Update the render to display errors
    this.forceUpdate();
  }

  render() {
    const {
      name, email, password, confirmPassword,
    } = this.props;

    return (
      <div className={style.register}>
        <div className={style.registerForm}>
          <img className={style.img} src="https://www.logolynx.com/images/logolynx/e5/e5ba79334133d2cb362dd639f755a392.png" alt="Avatar" width="70px" height="70px" />
          <h2 className="">Registreren</h2>

          <form onSubmit={this.register}>
            <div className="">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Gebruikersnaam"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
              />
            </div>
            <p>
              {this.errors.email
                        && this.errors.email.map((err) => <b>{err}</b>)}
            </p>
            <div className="">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </div>
            <p>
              {this.errors.password
                        && this.errors.password.map((err) => <b>{err}</b>)}
            </p>
            <div className="">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Wachtwoord"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Wachtwoord bevestigen"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                required
              />
            </div>
            <input className={style.submitButton} type="submit" value="Maak account aan" />
          </form>
        </div>
      </div>
    );
  }
}

export default Register;

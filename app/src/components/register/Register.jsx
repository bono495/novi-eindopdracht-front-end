/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import axios from 'axios';

import './Register.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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

    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.errors.password = ['De wachtwoorden zijn niet gelijk'];
    } else {
      const body = this.state;
      axios.post('http://localhost:8000/api/auth/register', body)
        .then((res) => {
          // Check for succesful log
          if (res.status !== 201) {
            return;
          }

          // And send the logged in user to home
          window.location = '/home';
        })
        .catch((res) => {
          this.errors = res.response.data.errors;
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
      <div className="background h-100 text-center">
        <div className="position-absolute ml-2 mt-2">
          <Button variant="outline-primary" type="button">
            <Link to="home"><h3>Terug naar Home</h3></Link>
          </Button>
        </div>
        <h2 className="pt-5 w-75 mx-auto">Registreren</h2>
        <div className="container mt-5">
          <div className="card">
            <div className="card-body">
              <div className="card-text">
                <div className="flex-row align-items-center">
                  <form onSubmit={this.register}>
                    <div className="form-group input-group-md">
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
                    <div className="form-group input-group-md">
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
                    <div className="form-group input-group-md">
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
                    <div className="form-group input-group-md">
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
                    <input className="btn btn-lg btn-block btn-primary mt-4" type="submit" value="Maak account aan" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

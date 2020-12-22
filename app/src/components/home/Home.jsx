import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import Quote from 'inspirational-quotes';

import Button from 'react-bootstrap/Button';

class Home extends Component {
  handleChange(event) {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
  }

  render() {
    return (
      <div className="background h-100 text-center">
        <h1 className="pt-5 w-75 mx-auto">
          { Quote.getRandomQuote() }
        </h1>
        <div className="container mt-5">
          <div className="row justify-content-around">
            <div className="col-3">
              <Button variant="outline-primary" type="button" onClick={this.sayHello}>
                <Link to="register"><h3>Registreren</h3></Link>
              </Button>
            </div>
            <div className="col-3">
              <Button variant="outline-primary" type="button">
                <Link to="movies"><h3>Laatste Films</h3></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

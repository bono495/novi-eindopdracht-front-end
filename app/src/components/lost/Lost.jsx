import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './Lost.css';

import LostImage from '../../assets/lost.gif';

function Lost() {
  return (
    <div className="background h-100 text-center">
      <h2 className="pt-5 w-75 mx-auto">U bent waarschijnlijk verdwaald.</h2>
      <div className="mt-5">
        <img src={LostImage} alt="wall-e in space" />
      </div>
      <div className="mt-5">
        <Button variant="outline-primary" type="button">
          <Link to="home"><h3>Terug naar Home</h3></Link>
        </Button>
      </div>
    </div>
  );
}

export default Lost;

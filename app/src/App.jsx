/* eslint-disable react/prop-types  */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link
} from 'react-router-dom';

// Bootstrap css form https://getbootstrap.com/
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

// Components
import Login from './components/login/Login';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Lost from './components/lost/Lost';
import Movies from './components/movies/Movies';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/lost">
            <Lost />
          </Route>
          <Route>
            <Redirect to="/lost" />
          </Route>
        </PrivateRoute>
        <Route>
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

// function logOut() {
//   localStorage.removeItem('token');
//   localStorage.removeItem('expires_in');
// }

function PrivateRoute({ children }) {
  return (
    <Route
      render={({ location }) => (
        localStorage.getItem('token') && localStorage.getItem('expires_in') > Date.now() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      )}
    />
  );
}

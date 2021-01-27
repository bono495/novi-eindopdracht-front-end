/* eslint-disable react/prop-types  */
import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';

// Components
import Login from './components/login/Login';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Lost from './components/lost/Lost';
import Movies from './components/movies/Movies';
import { useAuthState } from './context/AuthContext';

export default function App() {
  const { isAuthenticated } = useAuthState();
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/home">
        {isAuthenticated ? <Home /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/movies">
        {isAuthenticated ? <Movies /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/lost">
        <Lost />
      </Route>
      <Route>
        <Redirect to="/lost" />
      </Route>
    </Switch>
  );
}

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  // Link
} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { AuthContextProvider } from './context/AuthContext';

ReactDOM.render(
  <Router>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

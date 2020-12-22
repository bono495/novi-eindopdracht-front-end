import { StatusBar } from 'expo-status-bar';

import React from 'react';

import {
  NativeRouter, Route, Switch
} from 'react-router-native';

// import Home from './src/Home/Home';
import Movies from './src/Movies/Movies';

const App = () => (
  <NativeRouter>
    <StatusBar />
    <Switch>
      <Route exact path="/" component={Movies} />
    </Switch>
  </NativeRouter>
);

export default App;

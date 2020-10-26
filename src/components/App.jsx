/* eslint-disable react/no-array-index-key */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Users from './Users';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" component={Users} />
    </Switch>
  </BrowserRouter>
);

export default App;

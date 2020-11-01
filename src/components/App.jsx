import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Users from '../containers/Users';
import Posts from '../containers/Posts';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Users} />
      <Route path="/posts/:key" component={Posts} />
    </Switch>
  </BrowserRouter>
);

export default App;

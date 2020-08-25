import React, { Component } from 'react';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import Address from './Components/Address';
import History from './Components/History';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path ="/" component={History} />
          <Route path ="/address" component={Address} />
        </Switch>
      </div>
    )
  }
}

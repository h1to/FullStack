import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './ClientList';
import ClientEdit from "./ClientEdit";
import Home from "./Home";

// async function componentDidMount() {
//     const response = await fetch('/clients');
//     const body = await response.json();
//     this.setState({clients: body});
// }

function App(state) {
    // state = {
    //     clients: []
    // };
    // const {clients} = this.state;
  return (
      <Router>
          <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/clients' exact={true} component={ClientList}/>
              <Route path='/clients/:id' component={ClientEdit}/>
          </Switch>
      </Router>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './component/ClientList';
import ClientEdit from "./component/ClientEdit";
import Home from "./component/Home";
import LoginComponent from "./component/LoginComponent";
import AuthenticatedRoute from "./component/AuthenticatedRoute";
import LogoutComponent from "./component/LogoutComponent";


function App() {
  return (
      <Router>
          <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path="/login" exact component={LoginComponent} />
              <AuthenticatedRoute path='/clients' exact={true} component={ClientList}/>
              <Route path="/logout" exact component={LogoutComponent} />
              <AuthenticatedRoute  path='/clients/:id' component={ClientEdit}/>
          </Switch>
      </Router>
  );
}

export default App;

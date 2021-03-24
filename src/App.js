import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute'; 
import {getToken, removeUserSession, setUserSession} from './Utils/Common';

import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import Axios from 'axios';

function App() {

  const[authLoading, setAuthLoading] = useState(true);

  useEffect (() => {
    const token = getToken();
    if(!token) {
      return;
    }

    Axios.get("http://localhost:3000/verifyToken?token=$ABCDEF$123").then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content"> Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/dashboard" component={Dashboard}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { createHashHistory } from "history";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import App from './App'
import Login from './components/login/Login';
import Dashboard from './components/Dashboard/Dashboard';


const createRoutes = () => (
    <Router>
      <div>  
        <Route exact path="/" component={App}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/login" component={Login}/>
      </div>
    </Router>
);


export default createRoutes;
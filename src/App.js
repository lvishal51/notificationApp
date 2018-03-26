import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from '../src/components/login/Login';
import Dashboard from '../src/components/Dashboard/Dashboard';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default App;

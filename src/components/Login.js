import React from "react";
import { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {

    return (
    

        <div>

<div className="container">
  <div className="body"></div>
  <div className="col-md-12">
    <div className="loginMain">
      <div className="row">
        <div className="header col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div>App<span>Notify</span></div>
        </div>

        <div className="login col-xs-12 col-sm-12 col-md-8 col-lg-8">
          <input type="text" placeholder="usernamee" name="user" />
          <input type="password" placeholder="passwordd" name="password" />
          <input type="button" value="Login" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
  }
}

export default Login;

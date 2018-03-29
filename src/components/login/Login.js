import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../reducers/login-reducer';
import './LoginForm.css';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    console.log('this.props',this.props);
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
                  <input type="text" placeholder="usernamee" name="user" onChange={e => this.setState({email: e.target.value})}/>
                  <input type="password" placeholder="passwordd" name="password" onChange={e => this.setState({password: e.target.value})}/>
                  <input type="button" value="Login" onClick={this.onSubmit}/>
                </div>
              <div className="message">
              { isLoginPending && <div>Please wait...</div> }
              { isLoginSuccess && <div>Success.</div> }
              { loginError && <div>{loginError.message}</div> }
            </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  console.log('state',state);
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
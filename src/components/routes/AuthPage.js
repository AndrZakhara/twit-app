import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
// import Header from "../../containers/Header";

class AuthPage extends Component {
  render() {
    const {isAuth} = this.props;
    console.log(isAuth);
    return(
        <div>
          <Route path="/auth/login" component={LoginPage} />
          <Route path="/auth/signup" component={RegisterPage} />
        </div>
    )
  }
}

export default connect(
  store => ({
    isAuth: store.loginForm.isAuth,
  }),
  dispatch =>({})
)(AuthPage)
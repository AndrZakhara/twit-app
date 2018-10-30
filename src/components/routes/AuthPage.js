import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Header from "../../containers/Header";
import { handleLogin, handleSignUp } from '../../actions/authActions';


class AuthPage extends Component {
  render() {
    const {
      isAuth,
      handleLogin,
      handleSignUp
    } = this.props;
    console.log(isAuth);
    return(
      <Router>
        <div>
          <Header />
          <h2>Auth Page</h2>
          <Route
            path="/auth/login"
            render={() => <LoginPage onSubmit={handleLogin} />}
          />
          <Route
            path="/auth/signup"
            render={() => <RegisterPage onSubmit={handleSignUp} />}
          />
        </div>
      </Router>
    )
  }
}

export default connect(
  store => ({
    isAuth: store.authForm.isAuth,
  }),
  dispatch =>({
    handleLogin: form => dispatch(handleLogin(form)),
    handleSignUp: form => dispatch(handleSignUp(form)),
  })
)(AuthPage)
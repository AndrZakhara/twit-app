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
      formError,
      handleLogin,
      handleSignUp,
    } = this.props;

    return(
      <Router>
        <div>
          <Header />
          <h4>You are Unauthorized. <br/>Use your login or create a new account.</h4>
          <Route
            path="/auth/login"
            render={() => <LoginPage
              onSubmit={handleLogin}
              formError={formError}
            />}
          />
          <Route
            path="/auth/signup"
            render={() => <RegisterPage
              onSubmit={handleSignUp}
              formError={formError}
            />}
          />
        </div>
      </Router>
    );
  }
}

export default connect(
  store => ({
    formError: store.form,
  }),
  dispatch =>({
    handleLogin: form => dispatch(handleLogin(form)),
    handleSignUp: form => dispatch(handleSignUp(form)),
  }),
)(AuthPage)
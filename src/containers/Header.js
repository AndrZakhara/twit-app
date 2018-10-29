import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

class Header extends Component {

  render() {
    const {
      username
    } = this.props;
  console.log(username);
    return (
      <div>
        <h2>Social App</h2>
        <br />
        <NavLink to="/auth/login">Log In</NavLink>
        <br/>
        <NavLink to="/auth/signup">Sign Up</NavLink>
        <hr />
      </div>
    );
  }
}

Header.propTypes = {

};

export default connect(
  store => ({
    username: store.loginForm.userName,
    isAuth: store.loginForm.isAuth,
  }),
  dispatch => ({})
)(Header);

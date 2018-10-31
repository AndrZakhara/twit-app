import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import UnregisterUser from '../components/UnRegisterUser';
import RegisterUser from '../components/RegisterUser';

class Header extends Component {

  render() {
    const {
      isAuth,
      username
    } = this.props;

    return (
      <div>
        <h2>Social App</h2>
        <br />
        {!isAuth ? <UnregisterUser /> : <RegisterUser username={username}/>}
        <hr />
      </div>
    );
  }
}

Header.propTypes = {

};

export default connect(
  store => ({
    username: store.authForm.userName,
    isAuth: store.authForm.isAuth,
  }),
)(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { handleLogout } from '../actions/authActions';

class RegisterUser extends Component {
  render() {
    const { handleLogot } = this.props;
    return(
      <div>
        <button
          to="/auth"
          onClick={handleLogout}
        >Log Out</button>
      </div>
    )
  }
}

export default connect (
  dispatch => ({
    handleLogout: () => dispatch(handleLogout())
  })
)(RegisterUser)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { handleLogout } from '../actions/authActions';

class RegisterUser extends Component {

  render() {
    const { handleClick } = this.props;

    return (
      <div>
        <NavLink
          to="/auth"
          onClick={handleClick}
        >
          Log Out
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps =  dispatch => ({
  handleClick: e => dispatch(handleLogout(e)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(RegisterUser)
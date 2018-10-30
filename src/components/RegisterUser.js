import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { handleLogout } from '../actions/authActions';

class RegisterUser extends Component {


  render() {

    console.log('Logout');
    console.log(this.props);
    const { handleClick } = this.props;

    return(
      <div>
        <NavLink
          to="/auth"
          onClick={handleClick}
        >Log Out</NavLink>
        {/*<button*/}
          {/*// to="/auth"*/}
          {/*onClick={handleClick}*/}
        {/*>Log Out</button>*/}
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps =  dispatch => ({
  handleClick: e => dispatch(handleLogout(e)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
  // dispatch => ({handler: () => dispatch(handleLogout())})
)(RegisterUser)
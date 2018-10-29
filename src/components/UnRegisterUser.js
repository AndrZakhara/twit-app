import React from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function UnRegisterUser() {

  return (
    <div>
      <NavLink to="/auth/login">Log In</NavLink>
      <br/>
      <NavLink to="/auth/signup">Sign Up</NavLink>
    </div>
  )
}

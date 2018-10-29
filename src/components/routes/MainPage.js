import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../containers/Header';

class MainPage extends Component {
  render() {
    return(
      <div>
        <Header />
        <h2>Main pages</h2>
      </div>
    )
  }
};

export default connect(
  store => ({
    isAuth: store.authForm.isAuth,
  }),
  dispatch =>({})
)(MainPage)
import React, { Components } from 'react';
import { connect } from 'react-redux';
import Header from '../../containers/Header';

class MainPage extends Components {
  render() {
    return(
      <div>
        <Header />
        <h2>Main pages</h2>
      </div>
    )
  }
}

export default connect(
  store => ({}),
  dispatch => ({}),
)(MainPage);
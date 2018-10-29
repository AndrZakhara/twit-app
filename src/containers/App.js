import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';

import AuthPage from '../components/routes/AuthPage';
import MainPage from '../components/routes/MainPage';


class App extends Component {
  render() {
    console.log(this.props);
    const {
      isAuth,
    } = this.props;

    return (
      <Router>
        <div>
          <Route exact path="/*" render={()=>(
            !isAuth ? (
              <Redirect to="/auth" />
            ) : (
              <Redirect to="/mainpage" />
            )
          )} />
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/mainpage" component={MainPage} />
        </div>
      </Router>
    );
  }
}

export default connect(
  store => ({
    isAuth: store.authForm.isAuth,
  }),
)(App);

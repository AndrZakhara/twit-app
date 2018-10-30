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
import PostPage from "../components/routes/PostPage";
import AuthorsPage from "../components/routes/AuthorsPage";
import MyPage from "../components/routes/MyPage";


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
              <Redirect to="/main" />
            )
          )} />
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/posts" component={PostPage} />
          <Route exact path="/author" component={AuthorsPage} />
          <Route exact path="/mypage" component={MyPage} />
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import AuthPage from '../components/routes/AuthPage';
import MainPage from '../components/routes/MainPage';
import PostPage from '../components/routes/PostPage';
import AuthorsPage from '../components/routes/AuthorsPage';
import MyPage from '../components/routes/MyPage';
import { getUser } from '../actions/authActions';
import ProtectedRoute from '../components/routes/ProtectedRoute';

class App extends Component {

  constructor(props) {
    super(props);

    this.renderRedirect = this.renderRedirect.bind(this);
  }

  componentDidMount() {
    this.props.handleGetUser();
    console.log('app_ get_user')
  }


  renderRedirect() {
    if (!this.props.isAuth && this.props.currentPath === '/auth') {
      return <Route path="/auth" />;
    }

    if (!this.props.isAuth) {
      return <Redirect to="/auth" />;
    }

    return <Redirect to="/main" />;
  }

  render() {
    const { isAuth } = this.props;

    return (
      <Router>
        <div>
          <Route path="/" render={this.renderRedirect} />
          <Switch>
            <Route exact path="/auth" component={AuthPage} />
            <ProtectedRoute exact path="/main" component={MainPage} authorized={isAuth} />
            <ProtectedRoute exact path="/posts" component={PostPage} authorized={isAuth} />
            <ProtectedRoute exact path="/author" component={AuthorsPage} authorized={isAuth} />
            <ProtectedRoute exact path="/mypage" component={MyPage} authorized={isAuth} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  store => ({
    isAuth: store.authForm.isAuth,
    currentPath: store.router.location.pathname,
  }),
  dispatch =>({
    handleGetUser: () => dispatch(getUser()),
  }), null, {pure: false},
)(App);

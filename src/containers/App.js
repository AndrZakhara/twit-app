import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import AuthPage from '../components/routes/AuthPage';
import MainPage from '../components/routes/MainPage';
import PostPage from "../components/routes/PostPage";
import AuthorsPage from "../components/routes/AuthorsPage";
import MyPage from "../components/routes/MyPage";
import {getUser} from "../actions/authActions";

class App extends Component {
  componentDidMount() {
    this.props.handleGetUser();
  }

  render() {
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
          <Switch>
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/posts" component={PostPage} />
          <Route exact path="/author" component={AuthorsPage} />
          <Route exact path="/mypage" component={MyPage} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  store => ({
    isAuth: store.authForm.isAuth,
  }),
  dispatch =>({
    handleGetUser: () => dispatch(getUser()),
  }),
)(App);

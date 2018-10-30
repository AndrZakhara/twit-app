import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
} from 'react-router-dom';
import Header from '../../containers/Header';
// import MainPage from './MainPage';
import PostPage from './PostPage';
import AuthorsPage from './AuthorsPage';
import MyPage from './MyPage';

export default class MainPage extends Component {
  render() {
    return(
      <div>
        <Header />
        <h2>Main pages</h2>
        <hr/>
        <ul>
          <li>
            <NavLink to="/main" activeStyle={{color: 'red'}}>Main page</NavLink>
          </li>
          <li>
            <NavLink to="/posts" activeStyle={{color: 'red'}}>Post page</NavLink>
          </li>
          <li>
            <NavLink to="/author" activeStyle={{color: 'red'}}>Authors page</NavLink>
          </li>
          <li>
            <NavLink to="/mypage" activeStyle={{color: 'red'}}>My page</NavLink>
          </li>
        </ul>
        <hr/>
        <h4>Content</h4>
      </div>
    )
  }
};

// export default connect(
//   store => ({
//     isAuth: store.authForm.isAuth,
//   }),
//   dispatch =>({})
// )(MainPage)
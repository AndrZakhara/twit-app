import React, { Component } from 'react';
import Header from '../../containers/Header';
import {NavLink} from "react-router-dom";

class MyPage extends Component {
  render() {
    return(
      <div>
        <Header />
        <h2>My Page</h2>
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
        <h4>content</h4>
      </div>
    )
  }
}

export default MyPage
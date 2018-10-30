import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
} from 'react-router-dom';
import Header from '../../containers/Header';
import Categories from '../Categories';
import Posts from '../Posts';
import { getCategories } from '../../actions/mainPageActions';

class MainPage extends Component {

  render() {
    console.log('Main page: ');
    console.log(this.props)
    const { getCategoriesHandler } = this.props;
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
        <Categories />
        <Posts />
        <button
          onClick={getCategoriesHandler}
        >
          Get categories
        </button>
      </div>
    )
  }
};

export default connect(
  store => store,
  dispatch =>({
    getCategoriesHandler: (e) => dispatch(getCategories(e)),
  })
)(MainPage)

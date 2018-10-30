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
import { getAllCategories, getAllPosts } from '../../actions/mainPageActions';

class MainPage extends Component {
  constructor(props) {

    super(props);
  }

  componentDidMount() {
    this.props.getCategoriesHandler();
    this.props.getPostsHandler();
  }

  render() {
    console.log('Main page: ');
    console.log(this.props)

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
          Get categories
      </div>
    )
  }
};

export default connect(
  store => store,
  dispatch =>({
    getCategoriesHandler: () => dispatch(getAllCategories()),
    getPostsHandler: () => dispatch(getAllPosts()),
  })
)(MainPage)

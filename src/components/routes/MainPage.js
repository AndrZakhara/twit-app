import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  NavLink,
} from 'react-router-dom';
import Header from '../../containers/Header';
import CategoriesList from '../CategoriesList';
import PostsList from '../PostsList';
import { getAllCategories, getAllPosts, getCategoriesId } from '../../actions/mainPageActions';
import { getFilteredPostsList } from '../../selectors/getFilteredPostsList';

class MainPage extends Component {

  componentDidMount() {
    this.props.getCategoriesHandler();
    this.props.getPostsHandler();
  }

  render() {
    const {
      categories,
      posts,
      getCategoriesId
    } = this.props;
    console.log('Main page: ');
    console.log(this.props);

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
        <div>
          <h4>Categories:</h4>
          <CategoriesList
            categories={categories}
            getCategoriesId={getCategoriesId}
          />
        </div>
        <div>
          <h4>Posts:</h4>
          <PostsList
            posts={posts}
          />
        </div>
      </div>
    );
  }s
}

export default connect(
  store => ({
    categories: store.mainPage.categories,
    posts: getFilteredPostsList(store),

  }),
  dispatch =>({
    getCategoriesHandler: () => dispatch(getAllCategories()),
    getPostsHandler: () => dispatch(getAllPosts()),
    getCategoriesId: (id) => dispatch(getCategoriesId(id))
  }),
)(MainPage);

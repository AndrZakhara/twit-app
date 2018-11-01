import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';
import Header from '../../containers/Header';
import CategoriesList from '../CategoriesList';
import PostsList from '../PostsList';
import {
  getAllCategories,
  getAllPosts,
  getCategoriesId,
  getPostId,
} from '../../actions/mainPageActions';
import { getUser } from '../../actions/authActions';
import { getFilteredPostsList } from '../../selectors/getFilteredPostsList';

class MainPage extends Component {

  componentDidMount() {
    if(localStorage.getItem('cks_token') !== undefined) {
      console.log(localStorage.getItem('cks_token'))
      this.props.handleGetUser();
      this.props.getCategoriesHandler();
      this.props.getPostsHandler();
    }

  }

  render() {
    const {
      categories,
      posts,
      getCategoriesId,
      getPostId,
    } = this.props;

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
            getPostId={getPostId}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(
  store => ({
    categories: store.mainPage.categories,
    posts: getFilteredPostsList(store),

  }),
  dispatch =>({
    handleGetUser: () => dispatch(getUser()),
    getCategoriesHandler: () => dispatch(getAllCategories()),
    getPostsHandler: () => dispatch(getAllPosts()),
    getCategoriesId: id => dispatch(getCategoriesId(id)),
    getPostId: (id => dispatch(getPostId(id)))
  }), null, {pure: false},
)(MainPage));

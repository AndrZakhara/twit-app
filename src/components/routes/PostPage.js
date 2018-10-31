import React, { Component } from 'react';
import Header from '../../containers/Header';
import { NavLink } from 'react-router-dom';
import PostItemById from '../PostItemByID';
import { connect } from 'react-redux/';
import { getPostById } from '../../actions/postPageActions';

class PostPage extends Component {
  componentDidMount() {
    this.props.getPostById(this.props.currentPostId);
  }

  render() {
    const {
      currentPost,
    } = this.props;

    return(
      <div>
        <Header />
        <h2>Post Page</h2>
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
        <PostItemById
          post={currentPost}
        />
      </div>
    );
  }
}

export default connect(
  store => ({
    currentPostId: store.mainPage.activePostId,
    currentPost: store.postPage.currentPost,
  }),
  dispatch =>({
    getPostById: id => dispatch(getPostById(id)),
  }),
)(PostPage);